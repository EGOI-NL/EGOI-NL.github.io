import { EGOI, IntroText, Funders, CursusIntro } from '@/startpage'
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
      <IntroText />
      <CursusIntro />
      <EGOI />
      <Funders />
    </Layout>
  )
}
