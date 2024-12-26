'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchBlogs } from '../../utils/fetchBlogs';
import BlogCard from '../../components/BlogCard';
import { Home, ArrowRight, BookOpen, Clock, ArrowLeft } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  topic: string;
  img: string;
  readTime: string;
  date: string;
}

const Blog = () => {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState('all');

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        setBlogPosts(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  const topics = ['all', ...Array.from(new Set(blogPosts.map((post) => post.topic)))];
  const filteredPosts =
    selectedTopic === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.topic === selectedTopic);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to the Home
          </button>

          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span className="font-medium text-gray-900">
              {blogPosts.length} Articles
            </span>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">
            Latest Articles
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles covering web development, design,
            and technology trends. Find insights and tips to help you grow.
          </p>
        </header>

        {/* Topic Filter */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors
                ${
                  selectedTopic === topic
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post._id}
              className="group cursor-pointer"
              onClick={() => router.push(`/Blog/${post._id}`)}
            >
              <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.img}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mb-2">
                <span className="text-sm text-indigo-600 font-medium">
                  {post.topic}
                </span>
              </div>

              <h2 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h2>

              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found for this topic.</p>
          </div>
        )}
      </section>
      
    </main>
  );
};

export default Blog;
