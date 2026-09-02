import { profile } from '@/lib/content';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <p className="eyebrow">Contact</p>
        <h2 className="h-section mt-2">Let&apos;s build something.</h2>

        <div className="mt-8 card">
          <p className="text-lg text-ink/80">
            Open to Salesforce roles, contract work, and Agentforce projects.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-cloud-muted px-4 py-3 hover:border-brand-deep transition-colors"
            >
              <p className="eyebrow">Email</p>
              <p className="mt-1 font-medium">{profile.email}</p>
            </a>
            <a
              href={profile.socials.linkedin}
              className="rounded-xl border border-cloud-muted px-4 py-3 hover:border-brand-deep transition-colors"
            >
              <p className="eyebrow">LinkedIn</p>
              <p className="mt-1 font-medium">/in/suriyajaisankar</p>
            </a>
            <a
              href={profile.socials.github}
              className="rounded-xl border border-cloud-muted px-4 py-3 hover:border-brand-deep transition-colors"
            >
              <p className="eyebrow">GitHub</p>
              <p className="mt-1 font-medium">SuriyaJaisankar</p>
            </a>
            <a
              href={profile.socials.trailhead}
              className="rounded-xl border border-cloud-muted px-4 py-3 hover:border-brand-deep transition-colors"
            >
              <p className="eyebrow">Trailhead</p>
              <p className="mt-1 font-medium">suriyajaisankar</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
