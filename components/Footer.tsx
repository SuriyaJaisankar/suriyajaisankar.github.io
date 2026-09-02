import Image from 'next/image';
import { profile } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="container-page py-16">
        <div className="glass relative overflow-hidden p-8 sm:p-10">
          {/* glow */}
          <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-neon-violet/25 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-neon-cyan/20 blur-3xl" />

          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] items-center">
            <div className="relative z-10">
              <p className="eyebrow">Signal / off</p>
              <h3 className="mt-2 h-display text-3xl sm:text-4xl text-white">
                Thanks for scrolling — <span className="text-gradient">stay curious</span>.
              </h3>
              <p className="mt-3 text-ink/70">
                Cameo appearance by Astro, the original mascot. ⌨️
              </p>
            </div>
            <div className="relative h-40 hidden md:block">
              <div aria-hidden className="absolute inset-0 rounded-full bg-neon-cyan/25 blur-2xl" />
              <Image
                src="/astro.png"
                alt="Astro"
                width={400}
                height={400}
                className="relative h-full w-auto ml-auto animate-float"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/50 font-mono">
          <p>© {new Date().getFullYear()} {profile.name} · built with Next.js + Tailwind</p>
          <div className="flex gap-5">
            <a className="hover:text-white transition-colors" href={profile.socials.linkedin}>LinkedIn</a>
            <a className="hover:text-white transition-colors" href={profile.socials.github}>GitHub</a>
            <a className="hover:text-white transition-colors" href={profile.socials.trailhead}>Trailhead</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
