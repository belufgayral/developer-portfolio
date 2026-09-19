import { NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolioData } from "@/data/portfolioData";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestHistory = new Map<string, number[]>();
const projectTypes = new Set([
  "fullstack",
  "frontend",
  "design-system",
  "consulting",
  "other",
]);

function getClientIdentifier(request: Request): string {
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;

  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",").at(-1)?.trim() || "unknown";
}

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const recentRequests = (requestHistory.get(identifier) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestHistory.set(identifier, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestHistory.set(identifier, recentRequests);
  return false;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getTrimmedString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export async function POST(req: Request) {
  try {
    if (isRateLimited(getClientIdentifier(req))) {
      return NextResponse.json(
        { error: "Demasiados intentos. Probá nuevamente más tarde." },
        { status: 429, headers: { "Retry-After": "900" } },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === "tu_api_key_aqui") {
      return NextResponse.json(
        {
          error:
            "Falta configurar la RESEND_API_KEY en el archivo .env.local del proyecto.",
        },
        { status: 500 }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "El cuerpo de la solicitud no es válido." },
        { status: 400 },
      );
    }

    if (!isRecord(body)) {
      return NextResponse.json(
        { error: "El cuerpo de la solicitud no es válido." },
        { status: 400 },
      );
    }

    const name = getTrimmedString(body.name);
    const email = getTrimmedString(body.email);
    const message = getTrimmedString(body.message);
    const projectType = getTrimmedString(body.projectType) || "other";
    const honeypot = getTrimmedString(body.website);

    if (honeypot) {
      return NextResponse.json(
        { error: "No se pudo procesar la solicitud." },
        { status: 400 },
      );
    }

    if (
      !name ||
      !email ||
      !message ||
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000 ||
      !projectTypes.has(projectType)
    ) {
      return NextResponse.json(
        { error: "Revisá los datos ingresados e intentá nuevamente." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El correo electrónico provisto no tiene un formato válido." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";
    const toEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || portfolioData.email;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProjectType = escapeHtml(projectType);
    const safeMessage = escapeHtml(message);
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #121318; color: #e3e1e9; border: 1px solid #292a2f; border-radius: 12px; overflow: hidden;">
        <div style="padding: 24px; border-bottom: 1px solid #292a2f; background-color: #1a1b21;">
          <h2 style="margin: 0; font-size: 20px; color: #c0c1ff; letter-spacing: -0.02em;">Nuevo mensaje de contacto // Portfolio</h2>
        </div>
        <div style="padding: 24px; font-size: 15px; line-height: 1.6;">
          <p style="margin: 0 0 16px 0;"><strong style="color: #908fa0;">Nombre:</strong> <span style="color: #ffffff;">${safeName}</span></p>
          <p style="margin: 0 0 16px 0;"><strong style="color: #908fa0;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #4edea3; text-decoration: none;">${safeEmail}</a></p>
          <p style="margin: 0 0 16px 0;"><strong style="color: #908fa0;">Tipo de Proyecto / Asunto:</strong> <span style="color: #e3e1e9; background-color: #292a2f; padding: 3px 8px; border-radius: 4px; font-size: 13px;">${safeProjectType}</span></p>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #292a2f;">
            <strong style="display: block; margin-bottom: 8px; color: #908fa0;">Mensaje:</strong>
            <div style="background-color: #0d0e13; border: 1px solid #292a2f; border-radius: 8px; padding: 16px; white-space: pre-wrap; color: #e3e1e9; font-size: 14px;">${safeMessage}</div>
          </div>
        </div>
        <div style="padding: 16px 24px; background-color: #0d0e13; border-top: 1px solid #292a2f; font-size: 12px; color: #908fa0; text-align: center;">
          Recibido a través del formulario de contacto de ${portfolioData.brand}
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio Contact] ${name} — ${projectType}`,
      html: emailHtml,
      text: `Nuevo mensaje de: ${name} (${email})\nTipo de proyecto: ${projectType}\n\nMensaje:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: error.message || "Error al enviar el email a través de Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err: unknown) {
    console.error("Contact API Handler Error:", err);
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Error interno del servidor.",
      },
      { status: 500 }
    );
  }
}

