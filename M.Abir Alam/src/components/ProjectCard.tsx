import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
  name,
  description,
  url,
  repo,
  year,
  img,
  tags = [],
  ...motionProps
}) => {
  const handleProjectClick = (e) => {
    const isLink = e.target.closest('a');
    if (!isLink && url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <motion.div className="w-full max-w-sm" {...motionProps}>
      <div
        className="group overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col"
        onClick={handleProjectClick}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={img || '/api/placeholder/400/225'}
            alt={`${name} project thumbnail`}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-2">
              {repo && (
                <a
                  href={repo}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit live project"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {description && (
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto p-4 pt-0">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
