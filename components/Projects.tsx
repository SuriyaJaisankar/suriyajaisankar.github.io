import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <p className="eyebrow">Projects</p>
        <h2 className="h-section mt-2">Selected engagements.</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="card flex flex-col">
              <p className="eyebrow">{p.tag}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-ink/80 leading-relaxed">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
