import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '0',
      period: 'Free Forever',
      description: 'Perfect for trying out our service',
      features: [
        'Browse all products',
        'Standard delivery (2-3 days)',
        'Email support',
        'Basic product recommendations',
        'Order tracking'
      ],
      buttonText: 'Get Started',
      popular: false,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Pro',
      price: '9.99',
      period: 'per month',
      description: 'Most popular for families',
      features: [
        'Everything in Basic',
        'Free delivery on all orders',
        'Express delivery (same day)',
        'Priority support 24/7',
        'Exclusive deals & discounts',
        'Personalized recommendations',
        'Monthly surprise box',
        'Cancel anytime'
      ],
      buttonText: 'Start Free Trial',
      popular: true,
      color: 'from-primary-600 to-green-600'
    },
    {
      name: 'Enterprise',
      price: '29.99',
      period: 'per month',
      description: 'For businesses & large families',
      features: [
        'Everything in Pro',
        'Bulk ordering discounts',
        'Dedicated account manager',
        'Custom delivery schedules',
        'Invoice billing',
        'Team accounts (up to 10)',
        'Advanced analytics',
        'API access'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      color: 'from-purple-600 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our quality guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular ? 'border-primary-500 transform scale-105' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period.split(' ')[0]}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{plan.period}</p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl mb-8 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900 mb-4">What's included:</p>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <svg
                        className={`w-6 h-6 mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-primary-600' : 'text-gray-400'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include our 30-day money-back guarantee
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ No hidden fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
