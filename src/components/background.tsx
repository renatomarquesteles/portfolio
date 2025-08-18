'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls, RoundedBoxGeometry } from 'three-stdlib'

const textures = {
  matcap: 'https://images.unsplash.com/photo-1626908013943-df94de54984c?...',
  env: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?...',
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000a0b)

    const camera = new THREE.PerspectiveCamera(35)
    camera.position.set(0, -1.7, 5)

    const controls = new OrbitControls(camera, canvasRef.current)
    controls.target.set(0, 0, 0)
    controls.rotateSpeed = 0.9
    controls.enableZoom = false
    controls.enableDamping = true
    controls.dampingFactor = 0.02

    const matcapTexture = new THREE.TextureLoader().load(textures.matcap)
    const envTexture = new THREE.TextureLoader().load(textures.env)

    const material = new THREE.MeshMatcapMaterial({
      color: 0xffffff,
      matcap: matcapTexture,
      map: envTexture,
    })

    const box = new THREE.Mesh(
      new RoundedBoxGeometry(1, 1, 1, 5, 0.05),
      material,
    )
    // O círculo original tinha 5 segmentos, o que cria um pentágono.
    // Aumentei para 32 para que pareça um círculo.
    const circle = new THREE.Mesh(new THREE.CircleGeometry(5, 32), material)
    circle.rotation.x = Math.PI / 2
    circle.position.y = -1

    scene.add(box)

    const capsules: THREE.Mesh<
      THREE.CapsuleGeometry,
      THREE.MeshBasicMaterial
    >[] = []
    for (let i = 0; i <= 20; i++) {
      const capsule = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.02, 0.5 + Math.random(), 5, 16),
        new THREE.MeshBasicMaterial(),
      )
      capsule.position.y = -Math.random() + Math.random()
      capsule.position.x = -Math.sin(i * 0.3) * Math.PI
      capsule.position.z = -Math.cos(i * 0.3) * Math.PI
      scene.add(capsule)
      capsules.push(capsule)
    }

    const clock = new THREE.Clock()

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    let animationFrameId: number
    const animate = () => {
      const elapsed = clock.getElapsedTime()
      scene.rotation.y = elapsed * 0.2
      box.rotation.y = -elapsed * 0.2
      box.rotation.z = elapsed * 0.2
      box.rotation.x = elapsed * 0.2
      box.position.y = Math.sin(elapsed * 0.2) * 0.2

      controls.update()
      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)

      // Descarta os objetos do Three.js para evitar vazamentos de memória
      renderer.dispose()
      material.dispose()
      matcapTexture.dispose()
      envTexture.dispose()
      box.geometry.dispose()
      circle.geometry.dispose()
      capsules.forEach((capsule) => {
        capsule.geometry.dispose()
        capsule.material.dispose()
      })
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
}
