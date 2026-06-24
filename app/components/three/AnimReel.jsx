'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

const RED = '#990011'
const GOLD = '#FDD20E'

function Knot() {
  const ref = useRef(null)

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.18
    ref.current.rotation.y += delta * 0.25
  })

  return (
    <group ref={ref}>
      <TorusKnot args={[1.05, 0.34, 220, 32]}>
        <MeshDistortMaterial
          color={RED}
          emissive={RED}
          emissiveIntensity={0.5}
          roughness={0.25}
          metalness={0.7}
          distort={0.28}
          speed={1.6}
        />
      </TorusKnot>
      <Icosahedron args={[1.9, 1]}>
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.08} />
      </Icosahedron>
    </group>
  )
}

export default function AnimReel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.6], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#070210', 5, 12]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} intensity={30} color={RED} distance={20} />
      <pointLight position={[-4, -2, 3]} intensity={18} color={GOLD} distance={20} />
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
        <Knot />
      </Float>
    </Canvas>
  )
}
