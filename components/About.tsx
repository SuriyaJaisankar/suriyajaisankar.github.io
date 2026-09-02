import Reveal from '@/components/Reveal';
import { profile, education, highlights } from '@/lib/content';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <Reveal>
              <p className="eyebrow">01 — About</p>
              <h2 className="h-section mt-3">
                Non-technical background. <span className="text-gradient">Three years</span> of shipping. Still learning fast.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-ink/85">{profile.summary}</p>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={120 + i * 80}>
                  <div className="glass p-5 h-full hover-lift">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-cyan/80">0{i + 1}</p>
                    <p className="mt-2 font-display text-lg text-white">{h.title}</p>
                    <p className="mt-2 text-sm text-ink/70 leading-relaxed">{h.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={360}>
              <div className="grid sm:grid-cols-2 gap-4">
                {education.map((e) => (
                  <div key={e.school} className="glass p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">{e.period}</p>
                    <p className="mt-2 font-medium text-white">{e.degree}</p>
                    <p className="text-sm text-ink/60">{e.school} · {e.location}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
