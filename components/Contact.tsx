import { portfolioData } from "@/data/portfolioData";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { sections, contact, email, location, socialLinks } = portfolioData;

  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-outline-variant/20"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Contact Heading & Direct Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-label-code text-label-code text-primary uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {sections.contact.kicker}
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
            {sections.contact.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {sections.contact.description}
          </p>

          {/* Direct Info Cards */}
          <div className="space-y-4 pt-4">
            <a
              className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-colors group"
              href={`mailto:${email}`}
            >
              <div className="w-9 h-9 rounded bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  alternate_email
                </span>
              </div>
              <div>
                <div className="font-label-code text-label-code text-outline">
                  {contact.emailLabel}
                </div>
                <div className="font-code-md text-code-md text-on-surface group-hover:text-primary transition-colors">
                  {email}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-outline-variant/30">
              <div className="w-9 h-9 rounded bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[18px]">
                  location_on
                </span>
              </div>
              <div>
                <div className="font-label-code text-label-code text-outline">
                  {contact.locationLabel}
                </div>
                <div className="font-code-md text-code-md text-on-surface">
                  {location.full}
                </div>
              </div>
            </div>

            {/* Social Links Monospace Group */}
            <div className="pt-4">
              <div className="font-label-code text-label-code text-outline mb-2 uppercase tracking-wider">
                {contact.socialTitle}
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    className="px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/30 font-label-code text-label-code text-on-surface hover:text-primary hover:border-primary/50 transition-colors flex items-center gap-1.5"
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
