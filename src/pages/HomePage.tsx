import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, MessageSquare, Award, Calendar, Briefcase, TrendingUp, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Users,
      title: 'Find Co-Founders',
      description: 'Connect with talented individuals who share your vision and complement your skills.',
      href: '/find-cofounders',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Startup Resources',
      description: 'Access comprehensive guides, templates, and tools to build your startup.',
      href: '/resources',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Community',
      description: 'Join discussions, share experiences, and learn from fellow entrepreneurs.',
      href: '/community',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Mentorship',
      description: 'Get guidance from experienced entrepreneurs and industry experts.',
      href: '/mentorship',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Briefcase,
      title: 'Job Board',
      description: 'Find opportunities at startups or post positions for your team.',
      href: '/jobs',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Attend meetups, pitch competitions, and networking events.',
      href: '/events',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Founders' },
    { value: '5K+', label: 'Successful Matches' },
    { value: '2K+', label: 'Startups Launched' },
    { value: '100+', label: 'Expert Mentors' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow',
      content: 'FounderHub helped me find my co-founder and access the resources needed to launch our startup. We raised $2M in Series A.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, GreenTech Solutions',
      content: 'The mentorship program connected me with industry veterans who provided invaluable guidance during our early stages.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emma Thompson',
      role: 'Co-founder, HealthAI',
      content: 'The community support and resources available on FounderHub accelerated our product development by months.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Your Dream Team &<br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Launch Your Startup
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Connect with co-founders, access world-class resources, and join a community of ambitious entrepreneurs building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/find-cofounders"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <span>Find Co-Founders</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/resources"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From finding the perfect co-founder to accessing expert mentorship, we provide all the tools and connections you need to build a successful startup.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.href}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from founders who built successful startups with FounderHub
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Startup?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of founders who have found their co-founders, mentors, and resources on FounderHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/find-cofounders"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/dashboard"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;