'use client'

import Image from 'next/image'
import {useEffect, useState} from 'react'
import type {TeamShowcase} from '@/lib/content/types'

type Language = 'vi' | 'en'

export function TeamSlideshow({content, language}: {content: TeamShowcase; language: Language}) {
  const [active, setActive] = useState(0)
  const members = content.members
  useEffect(() => {
    if (members.length < 2) return
    const timer = window.setInterval(() => setActive(current => (current + 1) % members.length), 4800)
    return () => window.clearInterval(timer)
  }, [members.length])
  if (!members.length) return null
  const member = members[active]
  return <section className="team-showcase">
    <div className="team-showcase-copy"><div className="section-label">04 / {content.label[language]}</div><h2>{content.heading[language]}</h2><div className="team-member-meta"><span>0{active + 1} / 0{members.length}</span><strong>{member.name}</strong><p>{member.role[language]}</p></div></div>
    <div className="team-stage" aria-live="polite">
      {members.map((item, index) => <Image key={`${item.name}-${item.image}`} className={`team-portrait ${index === active ? 'is-active' : ''}`} src={item.image} alt={`${item.name} — ${item.role[language]}`} fill sizes="(max-width: 760px) 100vw, 50vw" style={{objectPosition: `${item.position || '50%'} center`}} priority={index === 0}/>) }
      <div className="team-scan" aria-hidden="true" />
      <div className="team-controls">{members.map((item, index) => <button key={item.name} type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`${language === 'vi' ? 'Xem' : 'View'} ${item.name}`}><i /></button>)}</div>
    </div>
  </section>
}
