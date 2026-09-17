'use client'

import {usePathname, useRouter} from 'next/navigation'
import {useEffect, useRef, useState} from 'react'

export function MotionSystem() {
  const pathname = usePathname()
  const router = useRouter()
  const isStudio = pathname.startsWith('/studio')
  const [phase, setPhase] = useState<'entering' | 'idle' | 'leaving'>('entering')
  const cursorRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLElement>(null)
  const navigatingRef = useRef(false)

  useEffect(() => {
    if (isStudio) { setPhase('idle'); return }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setPhase('idle'); return }
    setPhase('entering')
    navigatingRef.current = false
    const timer = window.setTimeout(() => setPhase('idle'), 780)
    return () => window.clearTimeout(timer)
  }, [pathname, isStudio])

  useEffect(() => {
    if (isStudio) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const cleanups: Array<() => void> = []

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      progressRef.current?.style.setProperty('--scroll-progress', String(scrollable > 0 ? window.scrollY / scrollable : 0))
      document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', updateScroll, {passive: true})
    updateScroll()
    cleanups.push(() => window.removeEventListener('scroll', updateScroll))

    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target) }
    }), {threshold: .12, rootMargin: '0px 0px -7% 0px'})
    document.querySelectorAll('.project,.service,.statement-lead,.work-item,.belief-row,.film-credits>div:not(.section-label),.contact-details>div,.editorial-grid>*').forEach((element,index) => {
      element.classList.add('motion-reveal')
      ;(element as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(index,5)*65}ms`)
      observer.observe(element)
    })
    cleanups.push(() => observer.disconnect())

    if (!reduced && finePointer) {
      const onPointer = (event: PointerEvent) => {
        if (cursorRef.current) { cursorRef.current.style.left=`${event.clientX}px`; cursorRef.current.style.top=`${event.clientY}px` }
        const x=event.clientX/window.innerWidth-.5, y=event.clientY/window.innerHeight-.5
        document.querySelectorAll<HTMLElement>('.film-frame,.crossroads-lines').forEach((element,index) => {
          const strength=index%2?14:24
          element.style.setProperty('--parallax-x',`${x*strength}px`)
          element.style.setProperty('--parallax-y',`${y*strength}px`)
        })
      }
      window.addEventListener('pointermove', onPointer, {passive:true})
      cleanups.push(() => window.removeEventListener('pointermove', onPointer))

      document.querySelectorAll<HTMLElement>('.project-media,.work-art').forEach(media => {
        const move=(event:PointerEvent)=>{const rect=media.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;media.style.setProperty('--tilt-x',`${y*-4}deg`);media.style.setProperty('--tilt-y',`${x*5}deg`);media.style.setProperty('--light-x',`${(x+.5)*100}%`);media.style.setProperty('--light-y',`${(y+.5)*100}%`)}
        const leave=()=>{media.style.setProperty('--tilt-x','0deg');media.style.setProperty('--tilt-y','0deg')}
        media.addEventListener('pointermove',move); media.addEventListener('pointerleave',leave)
        cleanups.push(()=>{media.removeEventListener('pointermove',move);media.removeEventListener('pointerleave',leave)})
      })

      document.querySelectorAll<HTMLElement>('[data-cursor]').forEach(item => {
        const enter=()=>cursorRef.current?.classList.add('visible'), leave=()=>cursorRef.current?.classList.remove('visible')
        item.addEventListener('mouseenter',enter);item.addEventListener('mouseleave',leave)
        cleanups.push(()=>{item.removeEventListener('mouseenter',enter);item.removeEventListener('mouseleave',leave)})
      })
    }

    const navigate = (event: MouseEvent) => {
      const link=(event.target as HTMLElement).closest('a')
      if (!link || reduced || event.metaKey || event.ctrlKey || event.shiftKey || link.target==='_blank') return
      const href=link.getAttribute('href')
      if(!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
      const destination=new URL(link.href,window.location.href)
      if(destination.origin!==window.location.origin || destination.pathname===pathname)return
      if (navigatingRef.current) return
      event.preventDefault()
      navigatingRef.current = true
      cursorRef.current?.classList.remove('visible')
      setPhase('leaving')
      window.setTimeout(()=>router.push(destination.pathname+destination.search+destination.hash),430)
    }
    document.addEventListener('click',navigate,true)
    cleanups.push(()=>document.removeEventListener('click',navigate,true))
    return () => cleanups.forEach(cleanup=>cleanup())
  }, [pathname,router,isStudio])

  if (isStudio) return null

  return <>
    <div className={`motion-layer ${phase==='entering'?'is-entering':phase==='leaving'?'is-leaving':''}`} aria-hidden="true"><span className="transition-line line-a"/><span className="transition-line line-b"/><span className="transition-line line-c"/><span className="transition-line line-d"/><strong>403</strong></div>
    <div className="scroll-progress" aria-hidden="true"><i ref={progressRef}/></div>
    <div className="cursor" ref={cursorRef} aria-hidden="true"><span>VIEW</span></div>
  </>
}
