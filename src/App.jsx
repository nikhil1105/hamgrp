import './App.css'
import About from './components/AboutUs'
import Client from './components/Client'
import FAQPage from './components/FAQ'
import Service from './components/Service'
import NFWrapper from './hoc/NFWrapper'

function App() {
  return (
    <>
      <NFWrapper>
        <>
        <About/>
        <FAQPage/>
        <Service/>
        <Client/>

        </>
      </NFWrapper>
    </>
  )
}

export default App
