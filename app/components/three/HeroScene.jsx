'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const RED = '#990011'
const GOLD = '#FDD20E'

// Floating film "dust" — a volumetric particle field that slowly drifts.
function Dust({ count = 1600 }) {
  const ref = useRef(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.005
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color={GOLD}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// The cinematic centerpiece — a slowly morphing dark-red form set into the
// top-right glow, echoing the hero's red light.
function CenterForm() {
  const group = useRef(null)

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.z += delta * 0.04
  })

  return (
    <group ref={group} position={[3.1, 1.4, -1]}>
      <Icosahedron args={[1.9, 6]}>
        <MeshDistortMaterial
          color={RED}
          emissive={RED}
          emissiveIntensity={0.45}
          roughness={0.35}
          metalness={0.6}
          distort={0.4}
          speed={1.4}
          transparent
          opacity={0.9}
        />
      </Icosahedron>
      <Icosahedron args={[2.25, 2]}>
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.07} />
      </Icosahedron>
    </group>
  )
}

// Gentle parallax: the whole scene leans toward the pointer for depth.
function Parallax({ children }) {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const targetX = state.pointer.y * 0.12
    const targetY = state.pointer.x * 0.2
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04
  })

  return <group ref={group}>{children}</group>
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#060606', 6, 16]} />
      <ambientLight intensity={0.25} />
      <pointLight position={[6, 5, 4]} intensity={45} color={RED} distance={30} />
      <pointLight position={[-6, -4, 2]} intensity={20} color={GOLD} distance={30} />
      <Parallax>
        <CenterForm />
        <Dust />
      </Parallax>
    </Canvas>
  )
}
