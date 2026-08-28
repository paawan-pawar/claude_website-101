import React from 'react';

const About = () => {
  const benefits = [
    {
      title: 'Farm-Fresh Quality',
      description: 'Direct partnerships with local farms ensure the freshest produce reaches your table.',
      icon: '🌾'
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly packaging and carbon-neutral delivery options for a greener tomorrow.',
      icon: '♻️'
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated customer service team is always ready to help you with any queries.',
      icon: '💬'
    },
    {
      title: 'Flexible Plans',
      description: 'Choose from one-time orders or subscribe for regular deliveries with exclusive discounts.',
      icon: '📅'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              FreshCart is revolutionizing the way people shop for groceries. We believe everyone deserves access to fresh, high-quality food without the hassle of crowded stores and long checkout lines.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded by a team of food enthusiasts and tech innovators, we've built a platform that connects you directly with the best local suppliers, ensuring maximum freshness and supporting your community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-gray-700">Partner Farms</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-sm text-gray-700">Cities Covered</div>
              </div>
            </div>

            <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Learn Our Story
            </button>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            To make fresh, healthy food accessible to everyone while supporting local communities and promoting sustainable practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
