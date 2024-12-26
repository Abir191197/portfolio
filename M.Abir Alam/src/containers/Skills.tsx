import { useContext } from 'react';
import { Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { skillsSection } from '../utils/portfolio';
import AdvancedSkillTimeline from '../components/skillTimeline';


const Skills = () => {
  const { title, skills } = skillsSection;

  return (
    <Wrapper as="section" id="skills" {...getSectionAnimation}>
      <h2 className="heading-secondary text-center mb-16 text-accent">
        {title}
      </h2>
      <AdvancedSkillTimeline skills={skills} />
    </Wrapper>
  );
};

export default Skills;
