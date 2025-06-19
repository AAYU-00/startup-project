import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Reply, Users, TrendingUp, Clock, Pin } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: 'How to validate your MVP before building it?',
      content: 'I have an idea for a SaaS product but want to validate it first. What are the best methods to test demand without actually building the product?',
      author: {
        name: 'Alex Chen',
        avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        title: 'First-time Founder'
      },
      timestamp: '2 hours ago',
      replies: 23,
      likes: 45,
      tags: ['MVP', 'Validation', 'SaaS'],
      isPinned: false
    },
    {
      id: 2,
      title: 'Equity split with co-founder - need advice',
      content: 'My co-founder and I are discussing equity split. I came up with the idea and will be CEO, but they bring technical expertise. What\'s fair?',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        title: 'Startup Founder'
      },
      timestamp: '4 hours ago',
      replies: 31,
      likes: 67,
      tags: ['Equity', 'Co-founder', 'Legal'],
      isPinned: true
    },
    {
      id: 3,
      title: 'Best tools for remote team collaboration?',
      content: 'We\'re a fully remote startup with team members across different time zones. Looking for recommendations on tools that work well for async collaboration.',
      author: {
        name: 'Mike Rodriguez',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        title: 'Tech Entrepreneur'
      },
      timestamp: '6 hours ago',
      replies: 18,
      likes: 32,
      tags: ['Remote Work', 'Tools', 'Productivity'],
      isPinned: false
    },
    {
      id: 4,
      title: 'Fundraising in 2024 - what investors want to see',
      content: 'Just went through a Series A round. Happy to share insights on what investors are looking for this year and how the landscape has changed.',
      author: {
        name: 'Emily Davis',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        title: 'Serial Entrepreneur'
      },
      timestamp: '1 day ago',
      replies: 89,
      likes: 156,
      tags: ['Fundraising', 'Series A', 'Investors'],
      isPinned: false
    }
  ];

  const groups = [
    {
      id: 1,
      name: 'SaaS Founders',
      description: 'Community for Software as a Service entrepreneurs',
      members: 2847,
      posts: 156,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
    },
    {
      id: 2,
      name: 'First-Time Founders',
      description: 'Support group for new entrepreneurs',
      members: 1923,
      posts: 89,
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
    },
    {
      id: 3,
      name: 'Female Entrepreneurs',
      description: 'Empowering women in business',
      members: 1456,
      posts: 234,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
    },
    {
      id: 4,
      name: 'FinTech Innovators',
      description: 'Financial technology entrepreneurs',
      members: 892,
      posts: 67,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
    }
  ];

  const trendingTopics = [
    { tag: 'AI Startups', posts: 234 },
    { tag: 'Remote Work', posts: 189 },
    { tag: 'Fundraising', posts: 156 },
    { tag: 'MVP Development', posts: 143 },
    { tag: 'Co-founder Search', posts: 128 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-lg text-gray-600">
            Connect with fellow entrepreneurs, share experiences, and learn from the community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab('discussions')}
                    className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'discussions'
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Discussions
                  </button>
                  <button
                    onClick={() => setActiveTab('groups')}
                    className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'groups'
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Groups
                  </button>
                </nav>
              </div>
            </div>

            {/* Create Post */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex space-x-4">
                <img
                  src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                  alt="You"
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex-1">
                  <textarea
                    placeholder="Share your thoughts, ask questions, or start a discussion..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                  />
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Add Tags</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                {discussions.map(discussion => (
                  <div key={discussion.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={discussion.author.avatar}
                        alt={discussion.author.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {discussion.isPinned && (
                            <Pin className="h-4 w-4 text-purple-600" />
                          )}
                          <h3 className="text-lg font-semibold text-gray-900">{discussion.title}</h3>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                          <span className="font-medium text-gray-700">{discussion.author.name}</span>
                          <span>•</span>
                          <span>{discussion.author.title}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{discussion.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{discussion.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {discussion.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-purple-600 transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{discussion.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-purple-600 transition-colors">
                            <Reply className="h-4 w-4" />
                            <span>{discussion.replies} replies</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-purple-600 transition-colors">
                            <MessageSquare className="h-4 w-4" />
                            <span>Comment</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'groups' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groups.map(group => (
                  <div key={group.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                      <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{group.members.toLocaleString()} members</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{group.posts} posts</span>
                        </div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                        Join Group
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">#{topic.tag}</span>
                    <span className="text-xs text-gray-500">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Members</span>
                  <span className="text-sm font-medium text-gray-900">12,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Posts This Week</span>
                  <span className="text-sm font-medium text-gray-900">456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">New Members</span>
                  <span className="text-sm font-medium text-gray-900">89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;