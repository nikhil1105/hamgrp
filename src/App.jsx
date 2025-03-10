import './App.css'
import About from './components/AboutUs'
import Client from './components/Client'
import FAQPage from './components/FAQ'
import Service from './components/Service'
import ClientSlider from './components/ClientSlider'
import NFWrapper from './hoc/NFWrapper'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import ProfileCard from './components/Teams'
const activePageData = {
  home: <Home />,
  about: <About />,
  faq: <FAQPage />,
  service: <Service />,
  client: <Client />,
  teams: <ProfileCard />
}
function App() {
  const [activePage, setActivePage] = useState('home')
  useEffect(() => {
    console.log('activePage', activePage);

  }, [activePage])
  return (
    <>
      <NFWrapper setActivePage={setActivePage} >
        <>
          {activePageData[activePage]}
        </>
        <ClientSlider />
        
      </NFWrapper>
    </>
  )
}

export default App
