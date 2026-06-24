const ITEMS = [
  'Feature Films',
  'Live Action',
  'Animation Studio',
  'Brand Films',
  'VRJ Studios',
  'Cinematic Excellence',
]

export default function Ticker() {
  // doubled for a seamless loop
  const items = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((label, i) => (
          <span className="ticker-item" key={i}>
            {label} <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
