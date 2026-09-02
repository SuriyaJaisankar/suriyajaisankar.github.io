import Link from 'next/link';
import { nav, profile } from '@/lib/content';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-cloud/80 border-b border-cloud-muted">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-brand"> ●</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-ink/70">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-brand-deep transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center rounded-full bg-brand-deep text-white text-sm px-4 py-2 hover:bg-brand transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
