import type {Metadata} from 'next'
import {MotionSystem} from '@/components/motion-system'
import './globals.css'

export const metadata: Metadata = {title: '403 Productions — Stories Meet Here', description: 'Film & Media Production — Vietnam.'}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="vi"><body><div className="noise" aria-hidden="true" /><MotionSystem />{children}</body></html>
}
