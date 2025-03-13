import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaHandshake, FaUserCheck } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine className="text-blue-600 text-4xl" />,
    title: "Proven Track Record",
    description:
      "With two decades of experience, we've successfully recovered billions of rupees for our clients. Our proven track record speaks for itself. We understand the complexities of debt recovery and have the expertise to navigate challenging situations.",
  },
  {
    icon: <FaUsers className="text-blue-600 text-4xl" />,
    title: "Expert Team",
    description:
      "Our team of seasoned professionals is highly skilled in the art of debt recovery. They employ advanced strategies and ethical practices to ensure optimal results. Our team is dedicated to providing exceptional service and exceeding client expectations.",
  },
  {
    icon: <FaHandshake className="text-blue-600 text-4xl" />,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' needs and tailor our services to their specific requirements. Our dedicated account managers ensure open communication and transparency throughout the process. We work closely with our clients to develop customized strategies that align with their business objectives.",
  },
  {
    icon: <FaUserCheck className="text-blue-600 text-4xl" />,
    title: "Happy Customers",
    description:
      "We prioritize customer satisfaction and strive to exceed expectations. Our clients are our greatest asset, and we are committed to providing them with the highest level of service.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto my-4"></div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mt-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-4 rounded-full border border-blue-600 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
