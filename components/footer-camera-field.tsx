'use client'

import {useEffect, useRef} from 'react'

type Particle = {x:number; y:number; ox:number; oy:number; vx:number; vy:number; size:number; drift:number; phase:number; accent:boolean}

export function FooterCameraField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const footer = canvas?.closest('.site-footer') as HTMLElement | null
    if (!canvas || !footer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = canvas.getContext('2d')
    if (!context) return
    let particles: Particle[] = []
    let frame = 0
    let width = 0
    let height = 0
    let pointer = {x:-1000, y:-1000, active:false}
    const random = (seed:number) => {
      const value = Math.sin(seed * 12.9898) * 43758.5453
      return value - Math.floor(value)
    }

    const resize = () => {
      const bounds = footer.getBoundingClientRect()
      const density = Math.min(window.devicePixelRatio, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = Math.round(width * density)
      canvas.height = Math.round(height * density)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(density, 0, 0, density, 0, 0)
      const count = width < 760 ? 120 : 300
      particles = Array.from({length: count}, (_, index) => {
        const x = random(index + 1) * width
        const y = random(index + 42) * height
        const phase = random(index + 211) * Math.PI * 2
        const speed = .06 + random(index + 347) * .18
        return {x, y, ox:x, oy:y, vx:Math.cos(phase) * speed, vy:Math.sin(phase) * speed, size:2.6 + random(index + 88) * 4.5, drift:.16 + random(index + 123) * .42, phase, accent:random(index + 390) > .92}
      })
    }

    const trackPointer = (event: PointerEvent) => {
      const bounds = footer.getBoundingClientRect()
      pointer.active = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }
    const leave = () => { pointer.active = false }

    const drawCamera = (particle: Particle, time:number) => {
      const bob = Math.sin(time * particle.drift + particle.phase) * 1.5
      const x = particle.x
      const y = particle.y + bob
      const size = particle.size
      context.save()
      context.translate(x, y)
      context.rotate(Math.sin(time * .13 + particle.phase) * .15)
      context.globalAlpha = particle.accent ? .42 : .2
      context.strokeStyle = particle.accent ? '#fe1413' : '#00139e'
      context.lineWidth = .8
      context.beginPath()
      context.roundRect(-size, -size * .52, size * 2, size * 1.22, size * .18)
      context.stroke()
      context.beginPath()
      context.arc(0, size * .1, size * .38, 0, Math.PI * 2)
      context.stroke()
      context.beginPath()
      context.rect(-size * .53, -size * .86, size * .55, size * .34)
      context.stroke()
      context.restore()
    }

    const animate = (time:number) => {
      context.clearRect(0, 0, width, height)
      for (const particle of particles) {
        const dx = particle.x - pointer.x
        const dy = particle.y - pointer.y
        const distance = Math.hypot(dx, dy)
        if (pointer.active && distance < 175) {
          // A broad, low-force field makes the cameras ease away from the cursor.
          const force = (1 - distance / 175) * .48
          particle.vx += (dx / Math.max(distance, 1)) * force
          particle.vy += (dy / Math.max(distance, 1)) * force
        }
        // Cameras keep their own momentum instead of returning to fixed anchors.
        particle.vx += Math.cos(time / 3800 + particle.phase) * .0018
        particle.vy += Math.sin(time / 4400 + particle.phase * 1.7) * .0018
        particle.vx *= .996
        particle.vy *= .996
        particle.x += particle.vx
        particle.y += particle.vy
        const edge = particle.size * 3
        if (particle.x < -edge) particle.x = width + edge
        if (particle.x > width + edge) particle.x = -edge
        if (particle.y < -edge) particle.y = height + edge
        if (particle.y > height + edge) particle.y = -edge
        drawCamera(particle, time / 1000)
      }
      frame = requestAnimationFrame(animate)
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(footer)
    window.addEventListener('pointermove', trackPointer, {passive:true})
    footer.addEventListener('pointerleave', leave)
    frame = requestAnimationFrame(animate)
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('pointermove', trackPointer); footer.removeEventListener('pointerleave', leave) }
  }, [])

  return <canvas ref={canvasRef} className="footer-camera-field" aria-hidden="true" />
}
