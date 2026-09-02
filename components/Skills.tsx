import { skillGroups } from '@/lib/content';

export default function Skills() {
  return (
    <section id="skills" className="section bg-white/40">
      <div className="container-page">
        <p className="eyebrow">Skills</p>
        <h2 className="h-section mt-2">Toolbox.</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="card h-full">
              <h3 className="font-semibold text-brand-deep">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
