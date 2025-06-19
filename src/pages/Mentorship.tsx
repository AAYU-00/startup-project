import React, { useState } from 'react';
import { Star, MapPin, Clock, Award, MessageCircle, Calendar, Filter, Users } from 'lucide-react';

const Mentorship = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = ['all', 'Technology', 'FinTech', 'HealthTech', 'E-commerce', 'SaaS', 'Consumer', 'B2B'];

  const mentors = [
    {
      id: 1,
      name: 'Jennifer Wu',
      title: 'Former VP of Product at Stripe',
      company: 'Ex-Stripe, Ex-Google',
      expertise: ['Product Management', 'Growth', 'FinTech', 'Scaling'],
      experience: '15+ years',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviews: 127,
      sessions: 450,
      price: '$300/hour',
      bio: 'Led product teams at Stripe during hypergrowth phase. Helped 50+ startups scale from MVP to Series B.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'FinTech',
      achievements: ['Built products used by 10M+ users', 'Led 5 successful product launches', 'Advisor to 20+ startups']
    },
    {
      id: 2,
      name: 'Marcus Chen',
      title: 'Serial Entrepreneur & Investor',
      company: '3 exits, Partner at Sequoia',
      expertise: ['Fundraising', 'Strategy', 'Operations', 'Leadership'],
      experience: '20+ years',
      location: 'Palo Alto, CA',
      rating: 4.8,
      reviews: 89,
      sessions: 320,
      price: '$500/hour',
      bio: 'Founded and exited 3 companies (2 IPOs, 1 acquisition). Now investing in early-stage startups.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'Technology',
      achievements: ['$2B+ in exits', 'Invested in 100+ startups', 'Board member at 15+ companies']
    },
    {
      id: 3,
      name: 'Dr. Sarah Patel',
      title: 'CEO & Co-founder at MedTech Solutions',
      company: 'MedTech Solutions',
      expertise: ['HealthTech', 'Regulatory', 'Team Building', 'R&D'],
      experience: '12+ years',
      location: 'Boston, MA',
      rating: 4.9,
      reviews: 65,
      sessions: 280,
      price: '$250/hour',
      bio: 'Built and scaled a medical device company from idea to $100M revenue. Expert in healthcare regulations.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'HealthTech',
      achievements: ['FDA approved 3 medical devices', '$100M+ in revenue', 'Published 25+ research papers']
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      title: 'Growth Hacker & Marketing Expert',
      company: 'Ex-Uber, Ex-Airbnb',
      expertise: ['Growth Marketing', 'User Acquisition', 'Analytics', 'Conversion'],
      experience: '10+ years',
      location: 'Austin, TX',
      rating: 4.7,
      reviews: 112,
      sessions: 380,
      price: '$200/hour',
      bio: 'Drove growth at Uber and Airbnb during their expansion phases. Helped 100+ startups scale user acquisition.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'Consumer',
      achievements: ['Grew user base by 1000%+', 'Led growth in 50+ markets', 'Speaker at 30+ conferences']
    }
  ];

  const programs = [
    {
      id: 1,
      name: 'Founder Bootcamp',
      description: 'Intensive 8-week program for first-time founders covering all aspects of starting a company.',
      duration: '8 weeks',
      participants: 20,
      startDate: 'March 15, 2024',
      price: '$2,500',
      mentors: ['Jennifer Wu', 'Marcus Chen', 'Sarah Patel'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Growth Accelerator',
      description: 'For founders ready to scale. Focus on growth strategies, fundraising, and team building.',
      duration: '12 weeks',
      participants: 15,
      startDate: 'April 1, 2024',
      price: '$4,000',
      mentors: ['Alex Rodriguez', 'Marcus Chen'],
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'HealthTech Specialization',
      description: 'Specialized program for healthcare and biotech startups with regulatory guidance.',
      duration: '10 weeks',
      participants: 12,
      startDate: 'May 20, 2024',
      price: '$3,500',
      mentors: ['Dr. Sarah Patel'],
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const filteredMentors = selectedIndustry === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mentorship</h1>
          <p className="text-lg text-gray-600">
            Get guidance from experienced entrepreneurs and industry experts who've built successful companies
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('mentors')}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'mentors'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Find Mentors
              </button>
              <button
                onClick={() => setActiveTab('programs')}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'programs'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Programs
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'mentors' && (
          <>
            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMentors.map(mentor => (
                <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                      <p className="text-purple-600 font-medium">{mentor.title}</p>
                      <p className="text-gray-600 text-sm">{mentor.company}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{mentor.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{mentor.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{mentor.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">{mentor.reviews} reviews</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map(skill => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Award className="h-3 w-3 text-purple-600 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{mentor.sessions} sessions</span>
                      </div>
                      <span className="font-medium text-gray-900">{mentor.price}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>Message</span>
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Book Session</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'programs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map(program => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Participants:</span>
                      <span className="font-medium">{program.participants} max</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Start Date:</span>
                      <span className="font-medium">{program.startDate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Mentors</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.mentors.map(mentor => (
                        <span
                          key={mentor}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {mentor}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-2xl font-bold text-purple-600">{program.price}</span>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentorship;