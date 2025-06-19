import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink, Filter, Bookmark, Share2 } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Networking', 'Pitch Competition', 'Workshop', 'Conference', 'Meetup'];

  const events = [
    {
      id: 1,
      title: 'Startup Pitch Night',
      description: 'Join us for an evening of innovative startup pitches. Network with investors, entrepreneurs, and industry experts.',
      date: '2024-03-15',
      time: '6:00 PM - 9:00 PM',
      location: 'TechHub San Francisco',
      address: '123 Market Street, San Francisco, CA',
      category: 'Pitch Competition',
      attendees: 150,
      maxAttendees: 200,
      price: 'Free',
      organizer: 'SF Startup Community',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      featured: true,
      tags: ['Networking', 'Pitching', 'Investors']
    },
    {
      id: 2,
      title: 'Growth Hacking Workshop',
      description: 'Learn proven strategies to grow your startup from 0 to 100k users. Hands-on workshop with real case studies.',
      date: '2024-03-20',
      time: '2:00 PM - 6:00 PM',
      location: 'Innovation Center',
      address: '456 Tech Avenue, Palo Alto, CA',
      category: 'Workshop',
      attendees: 45,
      maxAttendees: 50,
      price: '$89',
      organizer: 'Growth Academy',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      featured: false,
      tags: ['Growth', 'Marketing', 'Strategy']
    },
    {
      id: 3,
      title: 'Female Founders Meetup',
      description: 'Monthly gathering for female entrepreneurs to connect, share experiences, and support each other.',
      date: '2024-03-25',
      time: '7:00 PM - 9:00 PM',
      location: 'WeWork Downtown',
      address: '789 Main Street, San Francisco, CA',
      category: 'Meetup',
      attendees: 35,
      maxAttendees: 40,
      price: 'Free',
      organizer: 'Women in Tech SF',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      featured: false,
      tags: ['Women', 'Networking', 'Support']
    },
    {
      id: 4,
      title: 'TechCrunch Startup Conference',
      description: 'The premier startup conference featuring industry leaders, investors, and breakthrough companies.',
      date: '2024-04-10',
      time: '9:00 AM - 6:00 PM',
      location: 'Moscone Center',
      address: '747 Howard Street, San Francisco, CA',
      category: 'Conference',
      attendees: 2500,
      maxAttendees: 3000,
      price: '$499',
      organizer: 'TechCrunch',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      featured: true,
      tags: ['Conference', 'Industry Leaders', 'Innovation']
    },
    {
      id: 5,
      title: 'Fundraising Masterclass',
      description: 'Learn from VCs and successful founders how to raise your next round. Interactive Q&A session included.',
      date: '2024-04-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Stanford University',
      address: '450 Serra Mall, Stanford, CA',
      category: 'Workshop',
      attendees: 80,
      maxAttendees: 100,
      price: '$149',
      organizer: 'Stanford Entrepreneurs',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      featured: false,
      tags: ['Fundraising', 'VCs', 'Investment']
    },
    {
      id: 6,
      title: 'AI & Startups Networking Event',
      description: 'Connect with founders building AI-powered startups. Demo sessions and expert panels.',
      date: '2024-04-20',
      time: '5:00 PM - 8:00 PM',
      location: 'Google Campus',
      address: '1600 Amphitheatre Parkway, Mountain View, CA',
      category: 'Networking',
      attendees: 120,
      maxAttendees: 150,
      price: '$25',
      organizer: 'AI Founders Club',
      image: 'https://images.pexels.com/photos/3184386/pexels-photo-3184386.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      featured: false,
      tags: ['AI', 'Machine Learning', 'Tech']
    }
  ];

  const filteredEvents = events.filter(event => {
    return selectedCategory === 'all' || event.category === selectedCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Startup Events</h1>
          <p className="text-lg text-gray-600">
            Discover networking events, workshops, and conferences to grow your startup and connect with the community
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-100 text-purple-800 border border-purple-200'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Events' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        {filteredEvents.some(event => event.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredEvents.filter(event => event.featured).map(event => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                        <Bookmark className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                        <Share2 className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        {event.category}
                      </span>
                      <span className="text-sm text-gray-500">by {event.organizer}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}/{event.maxAttendees} attendees</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-2xl font-bold text-purple-600">{event.price}</span>
                      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Events */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Events</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.filter(event => !event.featured).map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <Bookmark className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {event.category}
                  </span>
                  <span className="text-xs text-gray-500">by {event.organizer}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} going</span>
                    </div>
                    <div className="font-medium text-purple-600">{event.price}</div>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Host Your Own Event</h2>
          <p className="text-purple-100 mb-6">
            Organize a meetup, workshop, or conference and connect with the startup community.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;