
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Button, ProjectCard, Wrapper } from '../components';
import { PROJECTS_INITIALLY } from '../utils/config';
import { sortByYear } from '../utils/helper';
import { getSectionAnimation, projectVariants } from '../animations';
import Image from 'next/image';

// Define types for project data
interface ProjectType {
  id: string;
  name: string;
  url: string;
  repo: string;
  img: string;
  year: number;
  tags: string[];
}

interface ProjectsSectionType {
  title: string;
  projects: ProjectType[];
}

const Projects = () => {
  const [projectsSection, setProjectsSection] =
    useState<ProjectsSectionType | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Axios GET request to fetch all projects
    axios
      .get('https://portfolio-dnjj.vercel.app/projects', {
        headers: {
          email: 'ardhrubo908@gmail.com',
          password: 'abir908',
        },
      })
      .then((response) => {
        console.log('Projects fetched successfully:', response.data);

        // Assuming the API response contains a projects array
        const fetchedProjects = response.data;

        // Mapping the fetched data to match the required format
        const updatedProjectsSection: ProjectsSectionType = {
          title: 'My Projects',
          projects: fetchedProjects.map((project: any) => ({
            id: project._id,
            name: project.name,
            url: project.url,
            repo: project.repo,
            img: project.img || '', // Fallback to empty string if image is missing
            year: project.year,
            tags: project.tags,
          })),
        };

        setProjectsSection(updatedProjectsSection); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []); // Empty dependency array means this effect will run once when the component mounts

  // If the data is not yet fetched, show a loading state
  if (!projectsSection) {
    return <div>Loading projects...</div>;
  }

  const { projects, title } = projectsSection;
  const topProjects = projects.slice(0, PROJECTS_INITIALLY);
  const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper id="projects" animate={false}>
      <motion.h2
        {...getSectionAnimation}
        className="heading-secondary text-center !mb-12"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-auto-250 xs:grid-cols-auto-300 gap-6 place-items-center">
        {sortByYear(visibleProjects).map((project, i) => {
          return (
            <ProjectCard
              {...project}
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              whileInView="show"
              custom={i}
            />
          );
        })}
      </div>
      {projects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;
