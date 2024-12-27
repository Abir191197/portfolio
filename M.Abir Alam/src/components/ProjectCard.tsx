import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags = [],
  ...motionProps
}) => {
  const [imageError, setImageError] = useState(false);

  const handleClick = (e) => {
    const isLink = e.target.closest('a');
    if (!isLink && url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <motion.div
      className="w-full h-[450px]" // Fixed height for consistency
      {...motionProps}
    >
      <div
        className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col overflow-hidden"
        onClick={handleClick}
      >
        {/* Image container with fixed height */}
        <div className="relative h-[200px] w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
          <Image
            src={img}
            alt={`${name} project thumbnail`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        {/* Content container with flex-grow */}
        <div className="flex flex-col flex-grow p-6">
          {/* Header section */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center gap-3 ml-2">
              {repo && (
                <a
                  href={repo}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {url && (
                <a
                  href={url}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit live project"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Tags section with scrolling if needed */}
          <div className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer section */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
