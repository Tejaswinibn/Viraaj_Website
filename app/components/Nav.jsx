export default function Nav() {
  return (
    <nav>
      <a href="#" className="logo">
        <span className="logo-vr">VR</span>
        <span className="logo-j">J</span>
        <span className="logo-dot" />
      </a>
      <ul className="nav-links">
        <li><a href="#films">Films</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#animation">Animation</a></li>
        <li><a href="#contact">Studio</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Work With Us</a>
    </nav>
  )
}
