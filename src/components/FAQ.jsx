import React, { useState } from "react";

const faqs = [
  {
    question: "What does a debt collection agency do?",
    answer:
      "A debt collection agency helps businesses recover unpaid debts from customers. They use various methods, including letters, phone calls, and sometimes legal action, to ensure that outstanding amounts are paid. If you're looking for an affordable debt collection agency, they can provide cost-effective solutions to help you get your money back.",
  },
  {
    question: "How does debt collection work in Dubai?",
    answer:
      "Debt collection in Dubai involves a structured process where agencies work to recover debts from individuals or businesses. Experienced debt collectors in Dubai follow UAE laws and regulations, starting with communication and negotiation, and moving to legal action if necessary.",
  },
  {
    question: "What are the debt collection laws in UAE?",
    answer:
      "The UAE has specific laws that govern how debts can be collected. These laws are designed to protect both creditors and debtors. Dubai debt collection laws explained include regulations on how debt collectors can contact debtors, limits on charges, and the steps required before taking legal action.",
  },
  {
    question: "What is the debt recovery process?",
    answer:
      "The debt recovery process typically starts with the creditor attempting to contact the debtor. If this fails, the creditor might hire a debt recovery agency in UAE who will then send demand letters, make phone calls, and possibly initiate legal proceedings to recover the debt.",
  },
  {
    question: "Can a debt collection agency sue you?",
    answer:
      "Yes, if you don't settle your debt, a collection agency can take legal action against you. Many agencies offer a no win no fee debt collection service, meaning they only get paid if they successfully recover the debt, which may involve suing the debtor.",
  },
  {
    question: "What are the benefits of hiring a debt collection agency?",
    answer:
      "Hiring a debt collection agency can save you time and effort, increase the chances of debt recovery, and ensure compliance with legal regulations. They have expertise in negotiations and legal processes, making debt recovery more efficient.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 rounded-lg max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-secondary-dark)' }}>
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="mb-3 rounded-lg shadow-sm overflow-hidden border border-gray-200"
            style={{ 
              borderColor: isOpen ? 'var(--color-main-dark)' : 'rgba(229, 231, 235)' 
            }}
          >
            <div 
              className={`p-4 font-semibold flex justify-between items-center cursor-pointer transition-colors duration-200 ${isOpen ? 'bg-gray-50' : 'bg-white'}`}
              onClick={() => toggleFAQ(index)}
              style={{ 
                borderLeft: isOpen ? '4px solid var(--color-main-dark)' : '4px solid transparent',
                color: 'var(--color-secondary-dark)'
              }}
            >
              <span>{faq.question}</span>
              <span 
                className="flex items-center justify-center h-6 w-6 rounded-full text-white font-bold text-sm"
                style={{ 
                  backgroundColor: isOpen ? 'var(--color-main-dark)' : 'var(--color-main-light)'
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && (
              <div className="p-4 bg-white border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQPage;