import React from 'react';

function Service() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-secondary-dark">Our Services</h1>
        
        <p className="text-center text-secondary-light text-lg mb-10">
          We offer tailored services designed to meet your specific needs. Our goal is to work collaboratively with you to
          optimize your cash flow and reduce debtor days. We maintain a respectful and professional approach when
          communicating with debtors, fostering positive business relationships while safeguarding our clients' interests.
        </p>
        
        <div className="bg-main-light p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-secondary-dark mb-4">Service Areas</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-secondary-light text-lg">
            <li>✔ Personal Loan</li>
            <li>✔ Business Loan</li>
            <li>✔ Consumer Durable</li>
            <li>✔ Mortgage/Home Loan</li>
            <li>✔ Auto Loan</li>
            <li>✔ Credit Card</li>
            <li>✔ Two Wheeler</li>
            <li>✔ Cellular</li>
          </ul>
        </div>
        
        <div className="bg-main-light p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-secondary-dark mb-4">Operational Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-secondary-light text-lg">
            <div>
              <h3 className="font-semibold text-secondary-dark">West Region</h3>
              <p>Vasai, Virar (Mumbai), Pune, Nasik, Aurangabad</p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-dark">Center Region</h3>
              <p>Nagpur, Akola, Amravati</p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-dark">South Region</h3>
              <p>Kerala</p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-dark">Eastern Region</h3>
              <p>Kolkata</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
