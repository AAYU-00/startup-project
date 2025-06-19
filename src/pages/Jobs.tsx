import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Clock, Users, Briefcase, Filter, Star, Building } from 'lucide-react';

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Equity Only'];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'TechFlow',
      location: 'San Francisco, CA',
      type: 'Full-time',
      equity: '0.1-0.5%',
      salary: '$120k-180k',
      experience: 'Senior',
      remote: true,
      posted: '2 days ago',
      description: 'Join our fast-growing fintech startup. Lead the development of our core platform used by 10k+ businesses.',
      requirements: ['5+ years React/Node.js', 'Startup experience preferred', 'Fintech background a plus'],
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      stage: 'Series A',
      funding: '$15M',
      team: 25
    },
    {
      id: 2,
      title: 'Head of Marketing',
      company: 'GreenTech Solutions',
      location: 'Austin, TX',
      type: 'Full-time',
      equity: '0.5-1.5%',
      salary: '$140k-200k',
      experience: 'Senior',
      remote: false,
      posted: '1 day ago',
      description: 'Lead marketing strategy for sustainable energy solutions. Drive growth from $5M to $50M ARR.',
      requirements: ['7+ years marketing leadership', 'B2B SaaS experience', 'Growth hacking expertise'],
      logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      stage: 'Series B',
      funding: '$30M',
      team: 45
    },
    {
      id: 3,
      title: 'Product Designer',
      company: 'HealthAI',
      location: 'Remote',
      type: 'Full-time',
      equity: '0.2-0.8%',
      salary: '$100k-140k',
      experience: 'Mid-level',
      remote: true,
      posted: '3 days ago',
      description: 'Design AI-powered healthcare products that impact millions of patients. Work with cutting-edge technology.',
      requirements: ['3+ years product design', 'Healthcare tech experience', 'Figma/Sketch expertise'],
      logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      stage: 'Seed',
      funding: '$5M',
      team: 12
    },
    {
      id: 4,
      title: 'Co-founder & CTO',
      company: 'Stealth Mode Startup',
      location: 'New York, NY',
      type: 'Equity Only',
      equity: '10-25%',
      salary: 'Equity',
      experience: 'Senior',
      remote: false,
      posted: '5 days ago',
      description: 'Join as technical co-founder for revolutionary AI platform. Looking for someone to lead engineering and product.',
      requirements: ['10+ years engineering leadership', 'AI/ML expertise', 'Previous startup experience'],
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      stage: 'Pre-seed',
      funding: 'Stealth',
      team: 3
    },
    {
      id: 5,
      title: 'Sales Director',
      company: 'DataViz Pro',
      location: 'Chicago, IL',
      type: 'Full-time',
      equity: '0.3-1.0%',
      salary: '$130k-180k',
      experience: 'Senior',
      remote: true,
      posted: '1 week ago',
      description: 'Build and lead sales team for enterprise data visualization platform. Scale from $2M to $20M ARR.',
      requirements: ['5+ years enterprise sales', 'Team leadership experience', 'SaaS background required'],
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      stage: 'Series A',
      funding: '$12M',
      team: 30
    }
  ];

  const companies = [
    {
      id: 1,
      name: 'TechFlow',
      description: 'Fintech platform for SMBs',
      location: 'San Francisco, CA',
      stage: 'Series A',
      funding: '$15M',
      team: 25,
      openRoles: 5,
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'FinTech'
    },
    {
      id: 2,
      name: 'GreenTech Solutions',
      description: 'Sustainable energy technology',
      location: 'Austin, TX',
      stage: 'Series B',
      funding: '$30M',
      team: 45,
      openRoles: 8,
      logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'CleanTech'
    },
    {
      id: 3,
      name: 'HealthAI',
      description: 'AI-powered healthcare solutions',
      location: 'Boston, MA',
      stage: 'Seed',
      funding: '$5M',
      team: 12,
      openRoles: 3,
      logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'HealthTech'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Startup Jobs</h1>
          <p className="text-lg text-gray-600">
            Find opportunities at fast-growing startups or post positions for your team
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('browse')}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'browse'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Browse Jobs
              </button>
              <button
                onClick={() => setActiveTab('companies')}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'companies'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Companies
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'browse' && (
          <>
            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Jobs List */}
            <div className="space-y-6">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="font-medium text-purple-600">{job.company}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            {job.remote && (
                              <>
                                <span>•</span>
                                <span className="text-green-600">Remote</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                              {job.type}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {job.experience}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span className="font-medium">{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-gray-400" />
                            <span>Equity: {job.equity}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4 text-gray-400" />
                            <span>{job.stage}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span>{job.team} people</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Learn More
                          </button>
                          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'companies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map(company => (
              <div key={company.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-600">{company.industry}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{company.description}</p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">{company.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Stage:</span>
                    <span className="font-medium">{company.stage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Funding:</span>
                    <span className="font-medium">{company.funding}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Team Size:</span>
                    <span className="font-medium">{company.team} people</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-1 text-sm text-purple-600">
                    <Briefcase className="h-4 w-4" />
                    <span>{company.openRoles} open roles</span>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    View Jobs
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Hiring for Your Startup?</h2>
          <p className="text-purple-100 mb-6">
            Post your job opening and connect with talented individuals ready to join your team.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;