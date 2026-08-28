import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your groceries delivered within 2 hours or schedule for later. Free delivery on orders above $50.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '🌱',
      title: 'Organic & Fresh',
      description: 'Handpicked organic produce sourced directly from local farms. 100% fresh guaranteed.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing with daily deals and exclusive discounts. Save up to 30% on your favorites.',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      icon: '🔒',
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level security. Your data is always protected.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '⭐',
      title: 'Quality Assured',
      description: 'Every product goes through strict quality checks. Not satisfied? 100% money-back guarantee.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: '📱',
      title: 'Easy to Use',
      description: 'Intuitive interface with smart search and personalized recommendations. Shop in minutes.',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">FreshCart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a smarter way to shop for groceries with features designed for your convenience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary-200"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Start Shopping Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
