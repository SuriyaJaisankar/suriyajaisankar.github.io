import { profile } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-cloud-muted bg-white/60">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-3 py-8 text-sm text-ink/60">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-4">
          <a className="hover:text-brand-deep" href={profile.socials.linkedin}>LinkedIn</a>
          <a className="hover:text-brand-deep" href={profile.socials.github}>GitHub</a>
          <a className="hover:text-brand-deep" href={profile.socials.trailhead}>Trailhead</a>
        </div>
      </div>
    </footer>
  );
}
