'use client'

import Link from 'next/link'
import {useState} from 'react'
import type {NavigationItem} from '@/lib/content/types'

export function SiteShell({navigation, children}: {navigation: NavigationItem[]; children: React.ReactNode}) {
  const [language, setLanguage] = useState<'vi' | 'en'>('vi')
  return <div data-language={language}>
    <header className="nav"><Link className="brand" href="/"><span>403</span><small>PRODUCTIONS</small></Link><div className="nav-meta">VIETNAM · 2026</div><nav>{navigation.map(item => <Link key={item.href} href={item.href}>{item.label[language]}</Link>)}<button className="lang-toggle" onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}>{language === 'vi' ? 'EN' : 'VI'}</button></nav></header>
    <main>{children}</main>
  </div>
}
