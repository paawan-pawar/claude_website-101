import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the delivery process work?',
      answer: 'Once you place an order, our team picks the freshest products from our partner farms and stores. You can choose a delivery time slot that works for you, and we\'ll deliver your groceries right to your doorstep. Pro members get free same-day delivery on all orders.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with any product, contact us within 24 hours of delivery for a full refund or replacement. No questions asked. Your satisfaction is our priority.'
    },
    {
      question: 'Are the products really organic and fresh?',
      answer: 'Absolutely! We partner directly with certified organic farms and local suppliers. All produce is hand-picked and goes through strict quality checks. We guarantee maximum freshness with our farm-to-door delivery model.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your Pro or Enterprise subscription at any time with no cancellation fees. Simply go to your account settings and click "Cancel Subscription". You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'What areas do you deliver to?',
      answer: 'We currently deliver to over 100 cities across the country. Enter your zip code on our homepage to check if we deliver to your area. We\'re constantly expanding to new locations!'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is confirmed, you\'ll receive a tracking link via email and SMS. You can also track your order in real-time through our mobile app or website. You\'ll get notifications at every stage of the delivery process.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about FreshCart
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Contact Support
            </button>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              View Help Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
