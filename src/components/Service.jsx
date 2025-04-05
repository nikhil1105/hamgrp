import React from 'react';

function Service() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We offer tailored services designed to meet your specific needs. Our goal is to work collaboratively with you to
            optimize your cash flow and reduce debtor days. We maintain a respectful and professional approach when
            communicating with debtors, fostering positive business relationships while safeguarding our clients' interests.
          </p>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
          <div className="bg-orange-500 p-4">
            <h2 className="text-2xl font-semibold text-white">Service Areas</h2>
          </div>
          <div className="p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              {[
                'Personal Loan', 'Business Loan', 'Consumer Durable', 'Mortgage/Home Loan',
                'Auto Loan', 'Credit Card', 'Two Wheeler', 'Cellular'
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Operational Cities */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-4">
            <h2 className="text-2xl font-semibold text-white">Operational Cities</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  region: 'West Region',
                  cities: 'Thane (Mumbai), Pune, Nasik, Aurangabad'
                },
                {
                  region: 'Center Region',
                  cities: 'Nagpur, Akola, Amravati'
                },
                {
                  region: 'South Region',
                  cities: 'Kerala'
                },
                {
                  region: 'Eastern Region',
                  cities: 'Kolkata'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-600 mb-2">{item.region}</h3>
                  <p className="text-gray-700">{item.cities}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Service;