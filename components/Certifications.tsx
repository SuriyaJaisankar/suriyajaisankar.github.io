import { certifications } from '@/lib/content';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-page">
        <p className="eyebrow">Certifications</p>
        <h2 className="h-section mt-2">Salesforce credentials.</h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c}
              className="card flex items-center gap-4 py-4"
            >
              <div className="h-10 w-10 rounded-lg bg-brand/10 grid place-items-center text-brand-deep font-semibold">
                ✦
              </div>
              <p className="font-medium text-ink">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
