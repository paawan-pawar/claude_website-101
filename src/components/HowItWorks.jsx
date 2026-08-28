import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Browse Products',
      description: 'Explore our wide range of fresh groceries, organic produce, and daily essentials with smart filters and search.',
      icon: '🔍',
      color: 'from-primary-500 to-green-600'
    },
    {
      number: '02',
      title: 'Add to Cart',
      description: 'Select your favorite items, choose quantities, and add them to your cart. Save lists for easy reordering.',
      icon: '🛒',
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Fast Delivery',
      description: 'Choose your delivery slot and pay securely. Get fresh groceries delivered to your doorstep within hours.',
      icon: '📦',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get fresh groceries delivered to your door
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-purple-200 to-pink-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Number Badge */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 text-center">
                    <div className="inline-block text-6xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-primary-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8">
          <p className="text-lg text-gray-700 mb-4">
            Ready to experience hassle-free grocery shopping?
          </p>
          <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Order Your First Box
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
