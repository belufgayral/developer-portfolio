"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { form } = portfolioData.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: form.projectTypeOptions[0]?.value || "fullstack",
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
        projectType: form.projectTypeOptions[0]?.value || "fullstack",
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
              {form.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder={form.namePlaceholder}
              className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              className="block font-label-code text-label-code text-on-surface uppercase tracking-wider"
              htmlFor="email"
            >
              {form.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder={form.emailPlaceholder}
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
            {form.projectTypeLabel}
          </label>
          <select
            id="project-type"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md transition-all"
          >
            {form.projectTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <label
            className="block font-label-code text-label-code text-on-surface uppercase tracking-wider"
            htmlFor="message"
          >
            {form.messageLabel}
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder={form.messagePlaceholder}
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
              ? form.submitButton.submitting
              : isSuccess
              ? form.submitButton.success
              : form.submitButton.idle}
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
            {form.feedbackSuccess}
          </div>
        )}
      </form>
    </div>
  );
}
