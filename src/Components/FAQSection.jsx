import { useState } from 'react';
import { motion } from 'framer-motion';


const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: 'How can I donate?', answer: 'You can donate directly through our website.' },
    { question: 'Where does my donation go?', answer: 'Your donation helps fund our various community projects.' },
    { question: 'Can I volunteer?', answer: 'Yes, we have opportunities for volunteers in various campaigns.' },
    { question: 'Is my donation tax-deductible?', answer: 'Yes, all donations are tax-deductible.' },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={() => toggleOpen(index)}
              className="w-full text-left text-xl font-semibold focus:outline-none"
            >
              {faq.question}
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: open === index ? 'auto' : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mt-2"
            >
              <p className="text-lg">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
