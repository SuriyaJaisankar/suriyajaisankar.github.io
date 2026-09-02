import Reveal from '@/components/Reveal';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">03 — Projects</p>
          <h2 className="h-section mt-3">Selected engagements.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="glass group relative overflow-hidden p-7 h-full hover-lift">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-neon-violet/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs text-neon-cyan/70">
                    /{String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                    {p.tag}
                  </p>
                </div>

                <h3 className="mt-4 font-display text-3xl text-white">{p.name}</h3>
                <p className="mt-4 text-ink/75 leading-relaxed">{p.description}</p>

                <ul className="mt-5 space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="pl-5 relative text-sm text-ink/70">
                      <span className="absolute left-0 top-2 h-1 w-2.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
