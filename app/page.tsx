import {getSiteContent} from '@/lib/content/get-site-content'
import {HomeView} from '@/components/home-view'

export default async function HomePage() {
  const content = await getSiteContent()
  return <HomeView content={content} />
}
