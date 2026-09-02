import { experience } from '@/lib/content';

export default function Experience() {
  return (
    <section id="experience" className="section bg-white/40">
      <div className="container-page">
        <p className="eyebrow">Experience</p>
        <h2 className="h-section mt-2">Where I&apos;ve built things.</h2>

        <ol className="relative mt-10 border-l border-cloud-muted space-y-10 pl-6">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-brand ring-4 ring-cloud" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">
                  {job.role} <span className="text-brand-deep">· {job.company}</span>
                </h3>
                <p className="text-sm text-ink/60">
                  {job.start} – {job.end} · {job.location}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-ink/80">
                {job.bullets.map((b, i) => (
                  <li key={i} className="pl-4 relative">
                    <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-brand-deep/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
