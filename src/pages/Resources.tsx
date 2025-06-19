import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, Play, FileText, Lightbulb, TrendingUp, Users, DollarSign, Settings } from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'guides', name: 'Startup Guides', icon: FileText },
    { id: 'templates', name: 'Templates', icon: Settings },
    { id: 'funding', name: 'Funding', icon: DollarSign },
    { id: 'growth', name: 'Growth & Marketing', icon: TrendingUp },
    { id: 'team', name: 'Team Building', icon: Users },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb }
  ];

  const resources = [
    {
      id: 1,
      title: 'The Complete Startup Playbook',
      description: 'A comprehensive guide covering everything from ideation to scaling your startup.',
      type: 'guide',
      category: 'guides',
      format: 'PDF',
      downloads: 12500,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Sarah Chen',
      duration: '45 min read'
    },
    {
      id: 2,
      title: 'Business Plan Template',
      description: 'Professional business plan template used by Y Combinator startups.',
      type: 'template',
      category: 'templates',
      format: 'DOCX',
      downloads: 8900,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Marcus Rivera',
      duration: 'Template'
    },
    {
      id: 3,
      title: 'Fundraising Masterclass',
      description: 'Learn how to raise capital from angel investors and VCs.',
      type: 'video',
      category: 'funding',
      format: 'Video',
      downloads: 6700,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Alex Thompson',
      duration: '2.5 hours'
    },
    {
      id: 4,
      title: 'Growth Hacking Strategies',
      description: 'Proven tactics to grow your startup from 0 to 1 million users.',
      type: 'guide',
      category: 'growth',
      format: 'PDF',
      downloads: 9200,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Emily Davis',
      duration: '30 min read'
    },
    {
      id: 5,
      title: 'Pitch Deck Template',
      description: 'Winning pitch deck template that helped raise over $100M.',
      type: 'template',
      category: 'funding',
      format: 'PPTX',
      downloads: 15600,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'David Kim',
      duration: 'Template'
    },
    {
      id: 6,
      title: 'Building High-Performance Teams',
      description: 'How to recruit, manage, and retain top talent for your startup.',
      type: 'guide',
      category: 'team',
      format: 'PDF',
      downloads: 7300,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184386/pexels-photo-3184386.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Lisa Martinez',
      duration: '40 min read'
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const getIcon = (format: string) => {
    switch (format) {
      case 'Video':
        return Play;
      case 'PDF':
        return FileText;
      case 'DOCX':
      case 'PPTX':
        return Download;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Startup Resources</h1>
          <p className="text-lg text-gray-600">
            Access our curated collection of guides, templates, and tools to accelerate your startup journey
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-purple-100 text-purple-800 border border-purple-200'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => {
            const FormatIcon = getIcon(resource.format);
            return (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center space-x-1">
                      <FormatIcon className="h-3 w-3" />
                      <span>{resource.format}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {resource.author}</span>
                    <span>{resource.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">{resource.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Download className="h-4 w-4" />
                      <span>{resource.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Resource?</h2>
          <p className="text-purple-100 mb-6">
            Can't find what you're looking for? Request a custom guide or template from our experts.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Request Resource
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;