import { motion } from 'framer-motion';

import { getSectionAnimation } from '../animations';
import { educationSection } from '../utils/portfolio';
import EducationTablist from '../components/EducationTablist';

const Education = () => {
  const { title, education } = educationSection;

  return (
    <motion.section
      id="education"
      className="py-32 max-w-2xl mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary text-center mb-10">{title}</h2>
      <EducationTablist education={education} />
    </motion.section>
  );
};

export default Education;
