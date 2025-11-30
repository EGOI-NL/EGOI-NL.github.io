import { EGOI, HeroBanner, Funders, CursusIntro } from '@/components'
import { Layout } from '@/components/layout'

export default function IndexPage() {
  return (
    <Layout
      url={`/`}
      title={'Girls @ Informatica Olympiade'}
      card={
        'assets/logo_no-text.png'
      }
      enableBanner
    >
      <HeroBanner />
      <CursusIntro />
      <EGOI />
      <Funders />
    </Layout>
  )
}
