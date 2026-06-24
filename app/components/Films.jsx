const FILMS = [
  { genre: 'Drama · 2024', name: ['RAKT', 'BANDHAN'], meta: 'Dir. Aakash Mehta · 2h 14m' },
  { genre: 'Thriller · 2024', name: ['NEEL', 'GAGAN'], meta: 'Dir. Priya Varma · 1h 58m' },
  { genre: 'Epic · 2025', name: ['SONA', 'MITTI'], meta: 'Dir. Rohan Das · 2h 32m' },
  { genre: 'Action · 2025', name: ['ARANYA', 'PUTRA'], meta: 'Dir. TBA · Release 2025' },
  { genre: 'Coming Soon', name: ['UNTITLED', 'PROJECT'], meta: 'VRJ Studios · 2026' },
]

export default function Films() {
  return (
    <section className="films" id="films">
      <div className="films-top reveal">
        <div>
          <div className="section-label">Featured Work</div>
          <h2 className="section-heading">Our Films</h2>
        </div>
        <div>
          <p className="films-count">Scroll to explore →</p>
        </div>
      </div>

      <div className="films-track reveal reveal-delay">
        {FILMS.map((film, i) => (
          <div className="film-card" key={i}>
            <div className="film-poster">
              <div className="film-poster-bg" />
              <div className="film-overlay">
                <p className="film-genre">{film.genre}</p>
                <div className="film-name">
                  {film.name[0]}<br />{film.name[1]}
                </div>
                <div className="film-meta">{film.meta}</div>
              </div>
            </div>
            <div className="film-redline" />
          </div>
        ))}
      </div>
    </section>
  )
}
