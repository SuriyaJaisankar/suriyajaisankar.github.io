import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { cast } from '@/lib/content';

const hueMap: Record<string, { grad: string; ring: string; glow: string; tint: string }> = {
  violet: {
    grad: 'from-neon-violet/60 via-indigo-500/30 to-neon-cyan/30',
    ring: 'ring-neon-violet/40',
    glow: 'shadow-[0_30px_80px_-20px_rgba(139,92,246,0.55)]',
    tint: 'from-[#7c3aed] to-[#22d3ee]',
  },
  cyan: {
    grad: 'from-neon-cyan/60 via-sky-400/30 to-neon-violet/30',
    ring: 'ring-neon-cyan/40',
    glow: 'shadow-[0_30px_80px_-20px_rgba(34,211,238,0.55)]',
    tint: 'from-[#0ea5e9] to-[#a78bfa]',
  },
  pink: {
    grad: 'from-neon-pink/60 via-fuchsia-500/30 to-neon-violet/30',
    ring: 'ring-neon-pink/40',
    glow: 'shadow-[0_30px_80px_-20px_rgba(236,72,153,0.55)]',
    tint: 'from-[#ec4899] to-[#f97316]',
  },
  gold: {
    grad: 'from-amber-400/60 via-orange-400/30 to-neon-pink/20',
    ring: 'ring-amber-400/40',
    glow: 'shadow-[0_30px_80px_-20px_rgba(251,191,36,0.55)]',
    tint: 'from-[#f59e0b] to-[#22d3ee]',
  },
};

export default function Cast() {
  return (
    <section id="cast" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">02 — The Cast</p>
          <h2 className="h-section mt-3">
            One <span className="text-gradient">Suriya</span>, four cameos.
          </h2>
          <p className="mt-4 max-w-2xl text-ink/70">
            A little homage to the Salesforce mascot lineup — each card is a hat I actually wear, with the powers to match.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cast.map((c, i) => {
            const h = hueMap[c.hue];
            return (
              <Reveal key={c.name} delay={i * 100}>
                <article className={`glass group relative overflow-hidden p-5 h-full hover-lift ${h.glow}`}>
                  {/* character portrait */}
                  <div className={`relative aspect-square rounded-xl overflow-hidden ring-1 ${h.ring} bg-gradient-to-br ${h.grad}`}>
                    <div aria-hidden className="absolute inset-0 mix-blend-hard-light opacity-90">
                      <div className={`h-full w-full bg-gradient-to-br ${h.tint}`} />
                    </div>
                    <Image
                      src="/suriya.jpg"
                      alt={c.name}
                      width={600}
                      height={600}
                      className="relative h-full w-full object-cover mix-blend-luminosity opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* corner glyph */}
                    <div className="absolute top-3 right-3 font-mono text-lg text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                      {c.glyph}
                    </div>
                    {/* frosted band bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night-950/90 via-night-950/40 to-transparent" />
                    <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
                      {String(i + 1).padStart(2, '0')} / 04
                    </p>
                  </div>

                  {/* metadata */}
                  <div className="mt-4">
                    <p className="font-display text-xl text-white leading-tight">{c.name}</p>
                    <p className="mt-1 text-xs text-ink/60 font-mono uppercase tracking-widest">{c.role}</p>
                    <p className="mt-3 text-sm text-ink/75 leading-relaxed">{c.power}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.tools.map((t) => (
                        <span key={t} className="chip !text-[10px] !py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
