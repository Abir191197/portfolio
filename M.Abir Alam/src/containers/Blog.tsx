'use client';

import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../utils/fetchBlogs'; // Assuming this function fetches the blogs
import BlogCard from '../components/BlogCard';

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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await fetchBlogs();
      setBlogPosts(blogs);
      setLoading(false);
    };
    getBlogs();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <span className="text-lg font-medium">Loading blog posts...</span>
      </div>
    );
  }

  return (
    <section id="Blog" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover professional insights, tutorials, and personal projects
            related to web development and design.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post._id}
              id={post._id}

              title={post.title}
              description={post.description}
              topic={post.topic}
              img={post.img}
              readTime={post.readTime}
              date={post.date}            />
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          {/* Assuming '/blog' is a page showing all blog posts */}
          <a
            href="/Blog/AllBlog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-blue-500/25"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
