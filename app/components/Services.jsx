const SERVICES = [
  { num: '01', name: 'Feature Films' },
  { num: '02', name: 'Animation' },
  { num: '03', name: 'Brand & Ad Films' },
  { num: '04', name: 'Short Films' },
  { num: '05', name: 'Post Production' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-intro reveal">
        <div>
          <div className="section-label">What We Offer</div>
          <h2 className="section-heading">Services</h2>
        </div>
        <p className="services-body">
          We partner with producers, brands, and creators to bring visions to life — whether
          that's a feature film, a cinematic commercial, or a fully animated world. Every
          project carries the same commitment: premium craft, zero compromise.
        </p>
      </div>

      <div className="service-list reveal reveal-delay">
        {SERVICES.map((svc) => (
          <div className="service-row" key={svc.num}>
            <span className="svc-num">{svc.num}</span>
            <span className="svc-name">{svc.name}</span>
            <span className="svc-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
