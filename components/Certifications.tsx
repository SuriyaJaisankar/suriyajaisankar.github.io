import Reveal from '@/components/Reveal';
import { certifications } from '@/lib/content';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-page">
        <Reveal>
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <div>
              <p className="eyebrow">05 — Certifications</p>
              <h2 className="h-section mt-3">Ten badges, one stack.</h2>
            </div>
            <span className="font-mono text-xs text-ink/50">
              {String(certifications.length).padStart(2, '0')} / {String(certifications.length).padStart(2, '0')}
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <div className="glass p-5 flex items-center gap-4 hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-violet/30 to-neon-cyan/30 border border-white/10 text-lg font-display text-white">
                  ✦
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-white truncate">{c.name}</p>
                  <p className="text-xs text-ink/50 font-mono">{c.issuer}</p>
                </div>
                <span className="ml-auto font-mono text-[10px] text-ink/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
