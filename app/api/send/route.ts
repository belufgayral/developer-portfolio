import { NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolioData } from "@/data/portfolioData";

export async function POST(req: Request) {
  try {
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

    const body = await req.json();
    const { name, email, projectType, message } = body;

    // Validación básica de campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben estar completos." },
        { status: 400 }
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

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #121318; color: #e3e1e9; border: 1px solid #292a2f; border-radius: 12px; overflow: hidden;">
        <div style="padding: 24px; border-bottom: 1px solid #292a2f; background-color: #1a1b21;">
          <h2 style="margin: 0; font-size: 20px; color: #c0c1ff; letter-spacing: -0.02em;">Nuevo mensaje de contacto // Portfolio</h2>
        </div>
        <div style="padding: 24px; font-size: 15px; line-height: 1.6;">
          <p style="margin: 0 0 16px 0;"><strong style="color: #908fa0;">Nombre:</strong> <span style="color: #ffffff;">${name}</span></p>
          <p style="margin: 0 0 16px 0;"><strong style="color: #908fa0;">Email:</strong> <a href="mailto:${email}" style="color: #4edea3; text-decoration: none;">${email}</a></p>
          <p style="margin: 0 0 16px 0;"><strong style="color: #908fa0;">Tipo de Proyecto / Asunto:</strong> <span style="color: #e3e1e9; background-color: #292a2f; padding: 3px 8px; border-radius: 4px; font-size: 13px;">${projectType || "General"}</span></p>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #292a2f;">
            <strong style="display: block; margin-bottom: 8px; color: #908fa0;">Mensaje:</strong>
            <div style="background-color: #0d0e13; border: 1px solid #292a2f; border-radius: 8px; padding: 16px; white-space: pre-wrap; color: #e3e1e9; font-size: 14px;">${message}</div>
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
      subject: `[Portfolio Contact] ${name} — ${projectType || "Nuevo mensaje"}`,
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
  } catch (err: any) {
    console.error("Contact API Handler Error:", err);
    return NextResponse.json(
      { error: err.message || "Error interno del servidor." },
      { status: 500 }
    );
  }
}

