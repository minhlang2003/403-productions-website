'use client'

import Link from 'next/link'
import type {FooterContent, NavigationItem} from '@/lib/content/types'

type Language = 'vi' | 'en'

export function SiteFooter({brand, descriptor, email, navigation, footer, language}: {brand: string; descriptor: string; email: string; navigation: NavigationItem[]; footer: FooterContent; language: Language}) {
  return <footer className="site-footer">
    <div className="site-footer-head">
      <Link className="site-footer-brand" href="/" aria-label={brand}><span>{brand.split(' ')[0]}</span><small>{descriptor}</small></Link>
      <p>{footer.availability[language]}</p>
    </div>
    <div className="site-footer-rule" />
    <div className="site-footer-grid">
      <div><span>{language === 'vi' ? 'Khám phá' : 'Explore'}</span>{navigation.map(item => <Link key={item.href} href={item.href}>{item.label[language]}</Link>)}</div>
      <div><span>{language === 'vi' ? 'Liên hệ' : 'Contact'}</span><a href={`mailto:${email}`}>{email}</a><p>{footer.address[language]}</p></div>
      <div><span>{footer.followLabel[language]}</span>{footer.socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <i>↗</i></a>)}</div>
      <button type="button" className="footer-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><span>{footer.topLabel[language]}</span><i>↑</i></button>
    </div>
    <div className="site-footer-bottom"><p>{footer.copyright[language]}</p><p>403 / 10°46′N 106°42′E</p></div>
  </footer>
}
