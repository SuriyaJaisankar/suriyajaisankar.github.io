import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { profile, stats } from '@/lib/content';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-32 pb-24">
      {/* Animated blur orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-neon-violet/30 blur-3xl animate-blob" />
        <div className="absolute top-40 right-[-120px] h-[480px] w-[480px] rounded-full bg-neon-cyan/20 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-[-80px] left-1/3 h-[380px] w-[380px] rounded-full bg-neon-pink/20 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
                Salesforce · Agentforce · Apex · LWC
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="h-display mt-6 text-[3rem] sm:text-[5.5rem] leading-[0.95] tracking-tight">
                <span className="text-gradient">Suriya</span>
                <br />
                <span className="text-white">Jaisankar.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-ink/70">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  See my work
                  <span aria-hidden>→</span>
                </a>
                <a href={`mailto:${profile.email}`} className="btn-ghost">
                  {profile.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink/60 font-mono">
                <span>{profile.location}</span>
                <span className="text-neon-violet">·</span>
                <a className="hover:text-white transition-colors" href={profile.socials.linkedin}>LinkedIn</a>
                <a className="hover:text-white transition-colors" href={profile.socials.github}>GitHub</a>
                <a className="hover:text-white transition-colors" href={profile.socials.trailhead}>Trailhead</a>
              </div>
            </Reveal>
          </div>

          {/* Astro character */}
          <Reveal delay={300} className="relative hidden md:block">
            <div className="relative aspect-square max-w-md ml-auto">
              <div aria-hidden className="absolute inset-6 rounded-full bg-neon-cyan/25 blur-3xl" />
              <div aria-hidden className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-violet/40 via-transparent to-neon-cyan/30 blur-2xl" />
              <Image
                src="/astro.png"
                alt="Astro, the Salesforce mascot"
                width={900}
                height={900}
                priority
                className="relative animate-float drop-shadow-[0_20px_60px_rgba(139,92,246,0.35)]"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <Reveal delay={400}>
          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass px-5 py-6 hover-lift">
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">{s.label}</dt>
                <dd className="mt-2 font-display text-3xl text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
