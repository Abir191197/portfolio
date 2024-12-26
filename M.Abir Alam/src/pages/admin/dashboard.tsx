'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  Layout,
  Home,
  FileText,
  BookOpen,
  Settings,
  LogOut,
  BarChart2,
} from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-hot-toast';
import BlogManager from './BlogManager';
import ProjectManager from './ProjectManager';

interface DashboardStats {
  totalProjects: number;
  totalBlogs: number;
  recentActivity: number;
}

const AdminDashboard: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) setToken(storedToken);
  }, []);

  const fetchStats = async () => {
    try {
      const [blogsRes, projectsRes] = await Promise.all([
        fetch('http://localhost:7000/blogs', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('http://localhost:7000/projects', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const blogsData = await blogsRes.json();
      const projectsData = await projectsRes.json();

      setBlogs(blogsData);
      setProjects(projectsData);
    } catch (error) {
      toast.error('Failed to fetch dashboard data');
    }
  };

  useEffect(() => {
    if (token) fetchStats();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  if (!token) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="w-96 rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Please log in to access the dashboard
            </p>
          </div>
          <button className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700">
            <a href="/admin/login">Login to Dashboard</a>
          </button>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Projects
                    </p>
                    <h3 className="text-2xl font-bold">{projects.length}</h3>
                  </div>
                  <div className="rounded-full bg-blue-100 p-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-blue-100">
                    <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Blogs
                    </p>
                    <h3 className="text-2xl font-bold">{blogs.length}</h3>
                  </div>
                  <div className="rounded-full bg-green-100 p-3">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-green-100">
                    <div className="h-2 w-3/4 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Activity Status
                    </p>
                    <h3 className="text-2xl font-bold">Active</h3>
                  </div>
                  <div className="rounded-full bg-purple-100 p-3">
                    <BarChart2 className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-purple-100">
                    <div className="h-2 w-5/6 rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-semibold">Recent Projects</h3>
                <div className="space-y-4">
                  {projects.slice(0, 3).map((project: any) => (
                    <div
                      key={project._id}
                      className="flex items-center gap-4 border-b pb-4"
                    >
                      <img
                        src={project.img || '/api/placeholder/100/100'}
                        alt={project.name}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{project.name}</h4>
                        <p className="text-sm text-gray-500">
                          Year: {project.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-semibold">Recent Blogs</h3>
                <div className="space-y-4">
                  {blogs.slice(0, 3).map((blog: any) => (
                    <div
                      key={blog._id}
                      className="flex items-center gap-4 border-b pb-4"
                    >
                      <img
                        src={blog.img || '/api/placeholder/100/100'}
                        alt={blog.title}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{blog.title}</h4>
                        <p className="text-sm text-gray-500">{blog.topic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return <ProjectManager token={token} />;
      case 'blogs':
        return <BlogManager token={token} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } border-r shadow-sm`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <h1 className={`font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>
            Admin Panel
          </h1>
          <button
            className="rounded-lg p-2 hover:bg-gray-100"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          {[
            { id: 'dashboard', icon: Home, label: 'Dashboard' },
            { id: 'projects', icon: FileText, label: 'Projects' },
            { id: 'blogs', icon: BookOpen, label: 'Blogs' },
          ].map((item) => (
            <button
              key={item.id}
              className={`mb-2 flex w-full items-center rounded-lg px-4 py-2 transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              } ${!isSidebarOpen && 'justify-center px-0'}`}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className="h-5 w-5" />
              {isSidebarOpen && <span className="ml-2">{item.label}</span>}
            </button>
          ))}

          <button
            className={`mt-8 flex w-full items-center rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50 ${
              !isSidebarOpen && 'justify-center px-0'
            }`}
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-2">Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <header className="border-b bg-white px-8 py-4">
          <h1 className="text-2xl font-bold">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          </h1>
        </header>

        <main className="p-8">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
