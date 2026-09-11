"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "fullstack",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        projectType: "fullstack",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 1000);
  };

  return (
    <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 shadow-xl">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              className="block font-label-code text-label-code text-on-surface uppercase tracking-wider"
              htmlFor="name"
            >
              Nombre completo *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Ej. Martín Soler"
              className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              className="block font-label-code text-label-code text-on-surface uppercase tracking-wider"
              htmlFor="email"
            >
              Correo electrónico *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="martin@empresa.com"
              className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md transition-all"
            />
          </div>
        </div>

        {/* Project Type Selector */}
        <div className="space-y-2">
          <label
            className="block font-label-code text-label-code text-on-surface uppercase tracking-wider"
            htmlFor="project-type"
          >
            Tipo de Proyecto / Asunto
          </label>
          <select
            id="project-type"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md transition-all"
          >
            <option value="fullstack">Desarrollo Web Fullstack Completo</option>
            <option value="frontend">
              Frontend Engineering &amp; UI Architecture
            </option>
            <option value="design-system">
              Sistemas de Diseño &amp; Auditoría UI/UX
            </option>
            <option value="consulting">Consultoría Técnica / Rol Remoto</option>
            <option value="other">Otra consulta</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <label
            className="block font-label-code text-label-code text-on-surface uppercase tracking-wider"
            htmlFor="message"
          >
            Detalles del mensaje *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Describe los objetivos clave, cronograma estimado o detalles sobre tu equipo..."
            className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md transition-all resize-none"
          />
        </div>

        {/* Submit Button with feedback states */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-md shadow-primary/10 ${
            isSuccess
              ? "bg-secondary text-on-secondary"
              : "bg-on-surface text-background hover:bg-white"
          }`}
        >
          <span className="font-code-md text-code-md font-semibold">
            {isSubmitting
              ? "Transmitiendo paquete..."
              : isSuccess
              ? "Mensaje Enviado"
              : "Enviar mensaje"}
          </span>
          <span
            className={`material-symbols-outlined text-[18px] ${
              isSubmitting ? "animate-spin" : ""
            }`}
          >
            {isSubmitting ? "sync" : isSuccess ? "check" : "arrow_forward"}
          </span>
        </button>

        {/* Feedback message container */}
        {isSuccess && (
          <div className="p-3 rounded-lg bg-surface-container border border-secondary/40 text-secondary font-code-md text-code-md text-center animate-fadeIn">
            ✓ Mensaje transmitido con éxito. Te responderé en menos de 24 horas laborables.
          </div>
        )}
      </form>
    </div>
  );
}

