import Reveal from '@/components/Reveal';

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">07 — Writing</p>
          <h2 className="h-section mt-3">Notes & posts.</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 glass p-8 hover-lift">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-cyan/80">
              Coming soon · draft
            </p>
            <p className="mt-4 font-display text-2xl text-white">
              Grounding Agentforce with Data Cloud — a practical walkthrough.
            </p>
            <p className="mt-3 text-ink/70 leading-relaxed">
              How to wire Data Cloud into an Agentforce topic without ballooning latency or cost — with the schema mistakes I made so you don&apos;t have to.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
