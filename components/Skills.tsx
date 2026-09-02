import Reveal from '@/components/Reveal';
import { skillGroups } from '@/lib/content';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">04 — Skills</p>
          <h2 className="h-section mt-3">Toolbox.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div className="glass p-6 h-full hover-lift">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg text-white">{g.title}</h3>
                  <span className="font-mono text-[10px] text-ink/40">
                    {String(g.items.length).padStart(2, '0')} items
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
