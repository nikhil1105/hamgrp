import React from 'react'
import HomeSlider from './HomeSlider'

function Home() {
    return (
        <div>
            <HomeSlider />
            <div className="bg-white rounded-xl shadow-lg p-8 text-center mt-12">
                <h2 className="text-2xl font-bold text-orange-600 mb-4">Become Our Client</h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Join our growing list of satisfied clients and experience our professional debt recovery services tailored to your specific needs.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300">
                    Contact Us Today
                </button>
            </div>
        </div>
    )
}

export default Home