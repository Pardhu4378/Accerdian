import Image from "next/image";
import { Linkedin, Twitter, Instagram, Youtube, Facebook, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";

const socialLinks = [
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: SITE_CONFIG.social.twitter, label: "Twitter / X" },
  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
  { icon: Youtube, href: SITE_CONFIG.social.youtube, label: "YouTube" },
  { icon: Facebook, href: SITE_CONFIG.social.facebook, label: "Facebook" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-dark)] text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />

      <div className="container-wide py-16 lg:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="Accredian"
              width={130}
              height={38}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              India&apos;s leading enterprise learning platform. Partnering with IITs, IIMs, XLRI & SP Jain to transform workforce capability through certified programs.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/16 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-1">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Contact</p>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-white/60 hover:text-white text-sm transition-colors block">
                {SITE_CONFIG.email}
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-white/60 hover:text-white text-sm transition-colors block">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-white/90 font-semibold text-sm tracking-wide">Programs</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white/90 font-semibold text-sm tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/50 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:underline inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight size={11} className="opacity-50" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className="space-y-4">
            <h3 className="text-white/90 font-semibold text-sm tracking-wide">Enterprise</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.enterprise.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 hover:text-white/60 text-xs transition-colors focus-visible:outline-none focus-visible:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
