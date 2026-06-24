export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grain" />

      <div className="perfs">
        {Array.from({ length: 12 }).map((_, i) => (
          <div className="perf" key={i} />
        ))}
      </div>

      <div className="hero-reel">Cinematic Studio — Est. 2024</div>
      <div className="hero-year">Film · Animation · Brand</div>

      <div className="hero-content">
        <p className="hero-eyebrow"><span />Viraaj Studios</p>
        <h1 className="hero-title">VIR<span className="r">A</span>AJ</h1>
        <p className="hero-tagline">
          Crafting frames that breathe. Stories that endure. Cinema that demands to be remembered.
        </p>
        <div className="hero-actions">
          <a href="#films" className="btn-red">Explore Films</a>
          <a href="#services" className="btn-text">Our Services</a>
        </div>
      </div>

      <div className="scroll-ind">
        <div className="scroll-bar" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
