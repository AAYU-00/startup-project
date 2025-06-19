import React, { useState } from 'react';
import { Search, MapPin, Users, Star, MessageCircle, Filter, X } from 'lucide-react';

const FindCoFounders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const skills = ['JavaScript', 'Python', 'React', 'Node.js', 'Design', 'Marketing', 'Sales', 'Finance', 'Operations', 'Strategy'];
  
  const founders = [
    {
      id: 1,
      name: 'Alex Johnson',
      title: 'Full-Stack Developer & Product Manager',
      location: 'San Francisco, CA',
      skills: ['JavaScript', 'React', 'Node.js', 'Product Management'],
      experience: '8 years',
      looking: 'Technical Co-founder for FinTech startup',
      rating: 4.9,
      reviews: 23,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Experienced in building scalable web applications. Previously worked at Google and launched 2 successful startups.',
      equity: '10-20%',
      commitment: 'Full-time'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      title: 'Marketing Director & Growth Hacker',
      location: 'New York, NY',
      skills: ['Marketing', 'Sales', 'Strategy', 'Analytics'],
      experience: '6 years',
      looking: 'Business Co-founder for SaaS platform',
      rating: 4.8,
      reviews: 18,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Led growth teams at 3 startups. Expertise in digital marketing, user acquisition, and revenue optimization.',
      equity: '15-25%',
      commitment: 'Full-time'
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'UI/UX Designer & Brand Strategist',
      location: 'Austin, TX',
      skills: ['Design', 'Branding', 'User Research', 'Prototyping'],
      experience: '5 years',
      looking: 'Creative Co-founder for Consumer App',
      rating: 4.7,
      reviews: 15,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Award-winning designer with experience at top agencies. Passionate about creating user-centered products.',
      equity: '10-15%',
      commitment: 'Part-time to Full-time'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      title: 'Data Scientist & AI Engineer',
      location: 'Seattle, WA',
      skills: ['Python', 'Machine Learning', 'Data Science', 'AI'],
      experience: '7 years',
      looking: 'Technical Co-founder for AI startup',
      rating: 4.9,
      reviews: 31,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'PhD in Computer Science, specializing in machine learning. Published researcher with industry experience at Microsoft.',
      equity: '20-30%',
      commitment: 'Full-time'
    }
  ];

  const filteredFounders = founders.filter(founder =>
    founder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    founder.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    founder.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Co-Founder</h1>
          <p className="text-lg text-gray-600">
            Connect with talented individuals who can help turn your vision into reality
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name, title, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <button
                      key={skill}
                      onClick={() => {
                        setSelectedSkills(prev =>
                          prev.includes(skill)
                            ? prev.filter(s => s !== skill)
                            : [...prev, skill]
                        );
                      }}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedSkills.includes(skill)
                          ? 'bg-purple-100 text-purple-800 border border-purple-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFounders.map(founder => (
            <div key={founder.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{founder.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{founder.rating}</span>
                        <span className="text-sm text-gray-400">({founder.reviews})</span>
                      </div>
                    </div>
                    <p className="text-purple-600 font-medium mb-2">{founder.title}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{founder.location}</span>
                      <span className="mx-2">•</span>
                      <span>{founder.experience} experience</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 text-sm mb-3">{founder.description}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Looking for:</strong> {founder.looking}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {founder.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span><strong>Equity:</strong> {founder.equity}</span>
                    <span><strong>Commitment:</strong> {founder.commitment}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Connect</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFounders.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No founders found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindCoFounders;