import { profile } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 py-10 text-sm text-ink/50 font-mono">
        <p>
          © {new Date().getFullYear()} {profile.name} · built with Next.js + Tailwind
        </p>
        <div className="flex gap-5">
          <a className="hover:text-white transition-colors" href={profile.socials.linkedin}>LinkedIn</a>
          <a className="hover:text-white transition-colors" href={profile.socials.github}>GitHub</a>
          <a className="hover:text-white transition-colors" href={profile.socials.trailhead}>Trailhead</a>
        </div>
      </div>
    </footer>
  );
}
