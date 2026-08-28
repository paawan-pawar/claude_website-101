import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Home Chef',
      image: '👩‍🍳',
      rating: 5,
      text: 'FreshCart has completely changed how I shop for ingredients. The quality is exceptional and delivery is always on time. Highly recommend!',
      color: 'from-pink-400 to-rose-600'
    },
    {
      name: 'Michael Chen',
      role: 'Fitness Enthusiast',
      image: '🏋️',
      rating: 5,
      text: 'As someone who values organic and healthy food, FreshCart is a game-changer. The selection of organic produce is amazing!',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Busy Mom',
      image: '👩‍👧',
      rating: 5,
      text: 'With two kids and a full-time job, FreshCart saves me hours every week. The subscription service is so convenient and the prices are great.',
      color: 'from-purple-400 to-indigo-600'
    },
    {
      name: 'David Thompson',
      role: 'Restaurant Owner',
      image: '👨‍🍳',
      rating: 5,
      text: 'We use FreshCart for our restaurant supplies. The freshness and reliability are unmatched. It\'s like having a farmers market at your fingertips.',
      color: 'from-green-400 to-emerald-600'
    },
    {
      name: 'Lisa Anderson',
      role: 'Health Coach',
      image: '🧘‍♀️',
      rating: 5,
      text: 'I recommend FreshCart to all my clients. The quality of organic products and the transparency about sourcing makes it trustworthy.',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      name: 'James Wilson',
      role: 'Tech Professional',
      image: '👨‍💻',
      rating: 5,
      text: 'The app is intuitive and the whole experience is seamless. From browsing to delivery, everything just works. Best grocery service I\'ve used.',
      color: 'from-indigo-400 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who have transformed their grocery shopping experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-2xl mr-4`}>
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '50,000+', label: 'Orders Delivered' },
            { value: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
