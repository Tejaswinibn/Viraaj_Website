import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let frame

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const tick = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      frame = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div id="cur" ref={dotRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  )
}
