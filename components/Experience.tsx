import Reveal from '@/components/Reveal';
import { experience } from '@/lib/content';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">02 — Experience</p>
          <h2 className="h-section mt-3">Where I&apos;ve built things.</h2>
        </Reveal>

        <ol className="relative mt-14 space-y-6">
          {experience.map((job, idx) => (
            <Reveal key={`${job.company}-${job.role}`} delay={idx * 80}>
              <li className="glass p-6 sm:p-8 hover-lift">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-xs text-neon-cyan/80">
                    {String(idx + 1).padStart(2, '0')} /
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-white">{job.role}</h3>
                  <span className="text-ink/40">·</span>
                  <span className="font-display text-lg text-gradient">{job.company}</span>
                  <span className="ml-auto font-mono text-xs text-ink/50">
                    {job.start} — {job.end} · {job.location}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="pl-5 relative text-ink/80 leading-relaxed">
                      <span className="absolute left-0 top-2.5 h-1 w-3 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
