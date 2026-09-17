'use client'

import Link from 'next/link'
import {useEffect, useState} from 'react'
import type {SiteContent} from '@/lib/content/types'
import {SiteFooter} from '@/components/site-footer'
import {TeamSlideshow} from '@/components/team-slideshow'

type Language = 'vi' | 'en'

export function HomeView({content}: {content: SiteContent}) {
  const [language, setLanguage] = useState<Language>('vi')
  const project = content.featuredProjects[0]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return <div data-language={language}>
    <header className="nav">
      <Link className="brand" href="/" aria-label={content.brand}><span>{content.brand.split(' ')[0]}</span><small>{content.brandDescriptor}</small></Link>
      <div className="nav-meta">{content.navMeta[language]}</div>
      <nav aria-label={language === 'vi' ? 'Điều hướng chính' : 'Main navigation'}>
        {content.navigation.map(item => <Link key={item.href} href={item.href}>{item.label[language]}</Link>)}
        <button className="lang-toggle" type="button" onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')} aria-label={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}>{language === 'vi' ? 'EN' : 'VI'}</button>
      </nav>
    </header>

    <main>
      <section className="hero next-hero">
        <div className="hero-visual" aria-hidden="true"><div className="orb orb-a"/><div className="orb orb-b"/><div className="film-frame"/><div className="scanline"/></div>
        <div className="hero-index">{content.home.productionHouse[language]}</div>
        <div className="hero-copy"><p className="eyebrow reveal">{content.supportingLine[language]}</p><h1 className="reveal">{content.tagline[language]}</h1></div>
        <div className="hero-footer"><Link className="play-reel" href="/work"><span className="play-icon">↓</span>{content.home.viewProjects[language]}</Link><p>{content.positioning[language]}</p></div>
      </section>

      <section className="statement">
        <div className="section-label">01 / {content.about.label[language]}</div>
        <p className="statement-lead">{content.about.statement[language]}</p>
        <div className="statement-foot"><p>{content.about.footnote[language]}</p><Link href="/about">{content.home.aboutLink[language]} ↗</Link></div>
      </section>

      {project && <section className="work">
        <div className="work-heading"><div className="section-label">02 / {content.home.featuredLabel[language]}</div><h2>{content.home.featuredHeading[language]}</h2></div>
        <article className="project project-one"><Link href={`/films/${project.slug}`} data-cursor="VIEW"><div className="project-media"><div className="project-stage stage-one"><span className="spotlight"/><span className="silhouette"/></div></div><div className="project-info"><h3>{project.title} / {project.subtitle}</h3><p>{project.category[language]} · {project.year}</p></div></Link></article>
      </section>}

      <section className="services">
        <div className="section-label">03 / {content.home.capabilitiesLabel[language]}</div>
        <div className="services-grid"><h2 className="preserve-lines">{content.home.capabilitiesHeading[language]}</h2><div className="service-list">{content.services.map((service,index)=><div className="service" key={service.title.en}><span>0{index+1}</span><h3>{service.title[language]}</h3><p>{service.description[language]}</p></div>)}</div></div>
      </section>

      <TeamSlideshow content={content.teamShowcase} language={language}/>

      <section className="contact">
        <div className="section-label">04 / {content.contact.eyebrow[language]}</div>
        <a className="contact-link" href={`mailto:${content.contact.email}`}><strong>{content.contact.heading[language]}</strong><i>↗</i></a>
      </section>
      <SiteFooter brand={content.brand} descriptor={content.brandDescriptor} email={content.contact.email} navigation={content.navigation} footer={content.footer} language={language}/>
    </main>
  </div>
}
