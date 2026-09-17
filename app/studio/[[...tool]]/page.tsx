'use client'

import dynamic from 'next/dynamic'

const SanityStudio = dynamic(() => import('@/components/sanity-studio'), {ssr: false})

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return <main className="studio-setup">
      <p>403 PRODUCTIONS / CMS</p>
      <h1>Kết nối Sanity để bắt đầu quản lý nội dung.</h1>
      <ol>
        <li>Tạo một project trên sanity.io/manage.</li>
        <li>Thêm Project ID vào <code>.env.local</code>.</li>
        <li>Khởi động lại <code>npm run dev</code>, sau đó mở lại trang này.</li>
      </ol>
      <pre>NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id{`\n`}NEXT_PUBLIC_SANITY_DATASET=production</pre>
    </main>
  }

  return <SanityStudio />
}
