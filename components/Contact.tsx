import Reveal from '@/components/Reveal';
import { profile } from '@/lib/content';

const socials = [
  { label: 'Email', value: 'suriyajaisankar41@gmail.com', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: '/in/suriyajaisankar', href: profile.socials.linkedin },
  { label: 'GitHub', value: 'SuriyaJaisankar', href: profile.socials.github },
  { label: 'Trailhead', value: 'suriyajaisankar', href: profile.socials.trailhead },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">08 — Contact</p>
          <h2 className="h-section mt-3">
            Let&apos;s build <span className="text-gradient">something</span>.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 glass p-8 sm:p-10">
            <p className="text-lg text-ink/85 max-w-2xl">
              Open to Salesforce roles, contract work, and Agentforce projects. I&apos;m friendly, I write clean Apex, and I care about the parts of the platform users actually feel.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group glass p-5 hover-lift"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-cyan/70">
                      {s.label}
                    </p>
                    <span className="font-mono text-[10px] text-ink/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-2 font-medium text-white group-hover:text-gradient transition-colors">
                    {s.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
