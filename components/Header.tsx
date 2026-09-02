import Link from 'next/link';
import { nav, profile } from '@/lib/content';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-night-950/60 border-b border-white/5">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-widest text-ink hover:text-white transition-colors">
          <span className="text-neon-cyan">/</span>
          {profile.name.split(' ').map((w) => w[0]).join('').toLowerCase()}
          <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-neon-violet shadow-glow" />
        </Link>
        <nav className="hidden md:flex gap-7 text-sm text-ink/70 font-mono">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className="group hover:text-white transition-colors"
            >
              <span className="text-neon-cyan/60 mr-2">{String(i + 1).padStart(2, '0')}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${profile.email}`} className="hidden md:inline-flex btn-primary text-xs">
          Get in touch →
        </a>
      </div>
    </header>
  );
}
