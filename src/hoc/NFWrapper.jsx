import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeSlider from '../components/HomeSlider'

function NFWrapper({ children , setActivePage }) {
    return (
        <div className='' >
            <Navbar setActivePage={setActivePage} />
            {
                children
            }
            <Footer />
        </div>
    )
}

export default NFWrapper