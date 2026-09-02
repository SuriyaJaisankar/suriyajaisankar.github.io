import { profile, education } from '@/lib/content';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <p className="eyebrow">About</p>
          <h2 className="h-section mt-2">A pragmatic Salesforce builder.</h2>
        </div>
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg leading-relaxed text-ink/80">{profile.summary}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((e) => (
              <div key={e.school} className="card">
                <p className="eyebrow">{e.period}</p>
                <p className="mt-2 font-semibold">{e.degree}</p>
                <p className="text-ink/70 text-sm">{e.school} · {e.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
