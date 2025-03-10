import React from "react";

const ClientLogos = ({ categories }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">Our Clients</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We're proud to work with leading financial institutions both domestically and internationally. Our clients trust us to deliver exceptional debt recovery services.
          </p>
        </div>

        {categories.map((category, index) => (
          <div key={index} className="mb-12 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-10 bg-orange-500 mr-3"></div>
              <h2 className="text-2xl font-bold text-blue-700">{category.title}</h2>
              <div className="h-1 w-10 bg-orange-500 ml-3"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
              {category.logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center p-4 bg-gray-50 shadow-md rounded-lg h-24 w-full border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

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
    </div>
  );
};


const clientData = [
  {
    title: "Domestic Clients",
    logos: [
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/volkswagan.jpg", alt: "Volkswagen Financial Services" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/tvs.jpg", alt: "TVS Finance & Services Ltd." },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/tatamotors.jpg", alt: "TATA Motorfinance" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/ltfinance.jpg", alt: "L&T Finance" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/icicibank.jpg", alt: "ICICI Bank" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/hdfcbank.jpg", alt: "HDFC Bank" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/fullerton.jpg", alt: "Fullerton India" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/citibank.jpg", alt: "Citibank" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/bajajfinance.jpg", alt: "Bajaj Finserv" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/axisbank.jpg", alt: "Axis Bank" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/capital-first.png", alt: "Capital First" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/indusind-bank.png", alt: "IndusInd Bank" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/sbi-card.png", alt: "SBI Card" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/yes-bank.png", alt: "Yes Bank" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/vodafone.jpg", alt: "Vodafone" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/airtel.jpg", alt: "Airtel" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/RBL-Bank.png", alt: "RBL Bank" },
    ],
  },
  {
    title: "International Clients",
    logos: [
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/rakbank.jpg", alt: "RAKBank" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/FabLogo-1.png", alt: "First Abu Dhabi Bank" },
      { src: "http://hemgroups.com/wp-content/uploads/2017/03/DIB-1.png", alt: "Dubai Islamic Bank" },
    ],
  },
];

const App = () => {
  return (
    <div className="">
      <ClientLogos categories={clientData} />
    </div>
  );
};

export default App;
