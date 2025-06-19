import React, { useState } from 'react';
import { User, Settings, Bell, Calendar, MessageSquare, TrendingUp, Users, Briefcase, BookOpen, Award } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Profile Views', value: '1,247', change: '+12%', color: 'text-green-600' },
    { label: 'Connections', value: '89', change: '+8%', color: 'text-green-600' },
    { label: 'Messages', value: '23', change: '+3%', color: 'text-green-600' },
    { label: 'Applications', value: '5', change: '+2%', color: 'text-green-600' }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'connection',
      message: 'Sarah Johnson wants to connect',
      time: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: 2,
      type: 'message',
      message: 'New message from Alex Chen',
      time: '4 hours ago',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: 3,
      type: 'event',
      message: 'Startup Pitch Night in 2 days',
      time: '1 day ago',
      avatar: null
    },
    {
      id: 4,
      type: 'job',
      message: 'New job match: Senior Developer',
      time: '2 days ago',
      avatar: null
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Startup Pitch Night',
      date: 'Mar 15, 2024',
      time: '6:00 PM',
      location: 'TechHub SF'
    },
    {
      id: 2,
      title: 'Growth Hacking Workshop',
      date: 'Mar 20, 2024',
      time: '2:00 PM',
      location: 'Innovation Center'
    }
  ];

  const recommendations = [
    {
      id: 1,
      type: 'cofounder',
      title: 'Potential Co-founder Match',
      description: 'Emily Rodriguez - Data Scientist with AI expertise',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: 2,
      type: 'job',
      title: 'Job Opportunity',
      description: 'Senior Full-Stack Developer at TechFlow',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: 3,
      type: 'resource',
      title: 'Recommended Resource',
      description: 'The Complete Startup Playbook',
      avatar: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your startup journey.</p>
        </div>

        {/* Profile Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="h-16 w-16 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
              <p className="text-purple-600 font-medium">Founder & CEO at TechStartup</p>
              <p className="text-gray-600 text-sm">San Francisco, CA • 5 years experience</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Settings className="h-4 w-4" />
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <span className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-center space-x-3">
                    {activity.avatar ? (
                      <img
                        src={activity.avatar}
                        alt=""
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                        {activity.type === 'event' && <Calendar className="h-4 w-4 text-purple-600" />}
                        {activity.type === 'job' && <Briefcase className="h-4 w-4 text-purple-600" />}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations for You</h3>
              <div className="space-y-4">
                {recommendations.map(rec => (
                  <div key={rec.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    {rec.avatar ? (
                      <img
                        src={rec.avatar}
                        alt=""
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                        {rec.type === 'cofounder' && <Users className="h-5 w-5 text-purple-600" />}
                        {rec.type === 'job' && <Briefcase className="h-5 w-5 text-purple-600" />}
                        {rec.type === 'resource' && <BookOpen className="h-5 w-5 text-purple-600" />}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{rec.title}</p>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Find Co-founders</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Join Discussions</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Browse Events</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Access Resources</span>
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="p-3 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-600">{event.date} at {event.time}</p>
                    <p className="text-xs text-gray-500">{event.location}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-center text-purple-600 hover:text-purple-700 text-sm font-medium">
                View All Events
              </button>
            </div>

            {/* Achievement */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="h-6 w-6" />
                <h3 className="font-semibold">Achievement Unlocked!</h3>
              </div>
              <p className="text-sm text-purple-100 mb-3">
                You've made 50+ connections this month. Keep building your network!
              </p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                View All Achievements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;