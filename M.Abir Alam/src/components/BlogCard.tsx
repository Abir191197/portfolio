import React from 'react';
import { useRouter } from 'next/router';

interface BlogCardProps {
  id: string; // Added id to use in the link
  title: string;
  description: string;
  topic: string;
  img: string;
  readTime: string;
  date: string;
}

// Function to truncate text while keeping HTML tags intact
const truncateText = (html: string, wordLimit: number) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  const textContent = div.innerText || div.textContent || '';
  const words = textContent.split(' ');

  // If the number of words exceeds the limit, truncate the text
  if (words.length > wordLimit) {
    const truncatedText = words.slice(0, wordLimit).join(' ') + '...';
    div.innerHTML = truncatedText; // Set the truncated content back to div
    return div.innerHTML;
  }
  return html; // Return original HTML if word count is within limit
};

const BlogCard: React.FC<BlogCardProps> = ({
  id, // Destructuring id from props
  title,
  description,
  topic,
  img,
  readTime,
  date,
}) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/Blog/${id}`); // Redirect to the single blog page
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="w-full">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {topic}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>

        {/* Description with truncation and HTML rendering */}
        <p
          className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: truncateText(description, 20), // Adjust word limit
          }}
        ></p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(date).toLocaleDateString()}
          </span>
          <button
            onClick={handleReadMore}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
