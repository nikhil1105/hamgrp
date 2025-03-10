import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeSlider from '../components/HomeSlider'

function NFWrapper({ children }) {
    return (
        <div className='' >
            <Navbar />
            <HomeSlider/>
            {
                children
            }
            <Footer />
        </div>
    )
}

export default NFWrapper