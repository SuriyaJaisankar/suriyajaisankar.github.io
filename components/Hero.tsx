import { profile } from '@/lib/content';

export default function Hero() {
  return (
    <section id="top" className="section pt-24 sm:pt-32">
      <div className="container-page">
        <p className="eyebrow">Salesforce Developer · Agentforce · LWC · Apex</p>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-ink/70 max-w-2xl">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full bg-brand-deep text-white text-sm px-5 py-2.5 hover:bg-brand transition-colors"
          >
            See my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full border border-ink/15 text-ink text-sm px-5 py-2.5 hover:border-brand-deep hover:text-brand-deep transition-colors"
          >
            {profile.email}
          </a>
        </div>
        <div className="mt-6 flex gap-4 text-sm text-ink/60">
          <span>{profile.location}</span>
          <span>·</span>
          <a className="hover:text-brand-deep" href={profile.socials.linkedin}>LinkedIn</a>
          <a className="hover:text-brand-deep" href={profile.socials.github}>GitHub</a>
          <a className="hover:text-brand-deep" href={profile.socials.trailhead}>Trailhead</a>
        </div>
      </div>
    </section>
  );
}
