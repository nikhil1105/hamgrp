import React from "react";

const ClientLogos = ({ categories }) => {
  return (
    <div className="p-6">
      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">{category.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 place-items-center">
            {category.logos.map((logo, idx) => (
              <div key={idx} className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg h-24 w-36">
                <img src={logo.src} alt={logo.alt} className="h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      ))}
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
    <div className="container mx-auto p-6">
      <ClientLogos categories={clientData} />
    </div>
  );
};

export default App;
