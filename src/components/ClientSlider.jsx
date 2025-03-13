import { motion } from "framer-motion";

const logos = [
    "/clients/airtel.jpg",
    "/clients/axisbank.jpg",
    "/clients/bajajfinance.jpg",
    "/clients/capital-first.png",
    "/clients/citibank.jpg",
    "/clients/fullerton.jpg",
    "/clients/hdfcbank.jpg",
    "/clients/icicibank.jpg",
    "/clients/indusind-bank.png",
    "/clients/ltfinance.jpg",
    "/clients/RBL-Bank.png",
    "/clients/sbi-card.png",
    "/clients/tatamotors.jpg",
    "/clients/tvs.jpg",
    "/clients/vodafone.jpg",
    "/clients/volkswagan.jpg",
    "/clients/yes-bank.png",
    "/clients/internationalClients/DIB-1.png",
    "/clients/internationalClients/FabLogo-1.png",
    "/clients/internationalClients/rakbank.jpg",
];

export default function ClientSlider() {
    return (
        <div className="overflow-hidden bg-gray-100 py-12">
                <h2 className="text-2xl text-center font-bold text-orange-600 mb-6">Our Clients</h2>
                <div className="relative flex w-full mt-[10px]" >
                <motion.div
                    className="flex space-x-10 min-w-[250%]"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Increased to ensure smooth full animation
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt="Client Logo" className=" h-16 md:h-20 w-auto" />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
