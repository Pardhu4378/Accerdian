import { TextMarquee } from "@/components/common/LogoMarquee";
import LogoMarquee from "@/components/common/LogoMarquee";
import { FadeUp } from "@/components/common/MotionWrapper";
import { PARTNER_LOGOS, TRUSTED_BY_COMPANIES } from "@/lib/constants";

export default function TrustedBy() {
  return (
    <section
      className="py-16 bg-[var(--color-secondary)] overflow-hidden"
      aria-labelledby="trusted-heading"
    >
      <div className="container-wide mb-8">
        <FadeUp>
          <p
            id="trusted-heading"
            className="text-center text-xs font-semibold text-[var(--color-muted)] uppercase tracking-widest"
          >
            Academic Partners & Certifying Institutions
          </p>
        </FadeUp>
      </div>

      {/* Partner logos marquee */}
      <LogoMarquee items={PARTNER_LOGOS} />

      {/* Divider */}
      <div className="container-wide my-10">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[var(--color-border)]" />
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-widest whitespace-nowrap">
            Trusted by professionals from
          </p>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>
      </div>

      {/* Company names marquee */}
      <TextMarquee items={TRUSTED_BY_COMPANIES} />
    </section>
  );
}
