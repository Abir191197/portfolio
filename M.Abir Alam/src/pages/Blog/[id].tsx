import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchSingleBlog } from '../../utils/fetchBlogs';
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  topic: string;
  img: string;
  readTime: string;
  date: string;
}

const SingleBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    if (id) {
      const getBlogPost = async () => {
        try {
          const post = await fetchSingleBlog(id as string);
          setBlogPost(post);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      };
      getBlogPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping" />
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <p className="text-gray-900 mb-4">Article not found</p>
        <button
          onClick={() => router.push('/blog')}
          className="text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <ArrowLeft className="inline mr-2" size={16} />
          Back to articles
        </button>
      </div>
    );
  }

  return (
    <article className="bg-white">
      {/* Navigation */}
      <nav className="max-w-3xl mx-auto px-6 pt-8">
        <button
          onClick={() => router.push('/Blog/AllBlog')}
          className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to articles
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-block px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm mb-6">
            <Tag className="inline-block w-4 h-4 mr-2" />
            {blogPost.topic}
          </div>

          <h1 className="text-3xl font-serif mb-6 text-gray-900">
            {blogPost.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
              <time>{formatDate(blogPost.date)}</time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-indigo-600" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative">
          <img
            src={blogPost.img}
            alt={blogPost.title}
            className="w-full aspect-[16/9] object-cover rounded-lg shadow-sm mb-12"
          />
          <button
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Share article"
          >
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Article Content */}
        <div
          className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-indigo-600"
          dangerouslySetInnerHTML={{
            __html: blogPost.description,
          }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Share this article</span>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push('/Blog/AllBlog')}
            className="inline-flex items-center justify-center bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-700 transition-all duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to all Articles
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
