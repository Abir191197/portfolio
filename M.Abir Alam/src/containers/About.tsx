import { useEffect, useState } from 'react';
import { getSectionAnimation } from '../animations';
import { HeroImage, Link, ListItem, Wrapper } from '../components';
import { getId } from '../utils/helper';
import { aboutSection, author } from '../utils/portfolio';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hello! I'm M. Abir Alam, a passionate Full Stack Developer with a
            Bachelor's degree in Computer Science and Engineering from United
            International University. I specialize in building responsive web
            applications that combine modern front-end interfaces with scalable
            back-end solutions.
          </p>
          <p>
            My journey in software development has been marked by successful
            projects like UniVerseHub, an educational platform where I
            implemented comprehensive study planning features and group
            collaboration tools. I've also developed innovative solutions for
            e-commerce platforms and service-based applications, focusing on
            user experience and technical excellence.
          </p>
          <p>
            I'm particularly proud of receiving recognition as 1st Runner-Up in
            multiple UIU CSE Project Shows, which reflects my commitment to
            delivering high-quality software solutions. Currently, I'm focused
            on expanding my expertise in modern web technologies like
            TypeScript, React.js, and Node.js while building efficient,
            user-centered applications that solve real-world problems.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
