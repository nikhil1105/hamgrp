import './App.css'
import About from './components/AboutUs'
import Client from './components/Client'
import FAQPage from './components/FAQ'
import Service from './components/Service'
import NFWrapper from './hoc/NFWrapper'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import ProfileCard from './components/Teams'
import PrivacyPolicy from './components/Privacy'
import DebtCollectionServices from './components/ClentDubai'
import DebtRecoverySolutions from './components/Clientindia'
import ContactSection from './components/ContactSection'
const activePageData = {
  home: <Home />,
  about: <About />,
  faq: <FAQPage />,
  service: <Service />,
  client: <Client />,
  teams: <ProfileCard />,
  Privacy: <PrivacyPolicy />,
  clientDubai: <DebtCollectionServices />,
  clientIndia: <DebtRecoverySolutions />,
  contact: <ContactSection />
}
function App() {
  const [activePage, setActivePage] = useState('home')
  return (
    <>
      <NFWrapper activePage={activePage} setActivePage={setActivePage} >
        <>
          {activePageData[activePage]}
        </>
      </NFWrapper>
    </>
  )
}

export default App
