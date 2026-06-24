const STATS = [
  { num: '12', label: 'Films Produced', delay: '' },
  { num: '8', label: 'Festival Selections', delay: 'reveal-delay' },
  { num: '40', label: 'Creative Crew', delay: 'reveal-delay2' },
  { num: '3', label: 'Animation Projects', delay: '' },
]

export default function Stats() {
  return (
    <div className="stats-strip" id="stats">
      {STATS.map((stat, i) => (
        <div className={`stat-box reveal ${stat.delay}`.trim()} key={i}>
          <div className="stat-num">{stat.num}<span>+</span></div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
