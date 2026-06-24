const TAGS = ['2D Animation', '3D Animation', 'Motion Design', 'VFX', 'Title Sequences']

export default function AnimationSection() {
  return (
    <section className="anim-section" id="animation">
      <div className="anim-inner">
        <div className="anim-left reveal">
          <div className="section-label">Animation Wing</div>
          <h2 className="anim-title">
            Dark.<br />
            <span className="gold">Deliberate.</span><br />
            Different.
          </h2>
          <p className="anim-body">
            Our animation isn't soft or loud — it's cinematic. Built with the same tension,
            craft, and restraint as our live-action films. Controlled color. Deliberate motion.
            Stories that linger long after the reel ends.
          </p>
          <div className="anim-tags">
            {TAGS.map((tag) => (
              <span className="anim-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="anim-right reveal reveal-delay">
          <div className="anim-visual">
            <div className="orb-ring" />
            <div className="orb-ring" />
            <div className="orb-ring" />
            <div className="orb-dot" />
          </div>
          <div className="anim-badge">
            <strong>VRJ</strong>
            Animation<br />Studio
          </div>
        </div>
      </div>
    </section>
  )
}
