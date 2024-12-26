import type { NextPage } from 'next';
import { SEO } from '../components';
import {
  About,
  

  
  //Experience,
  Hero,
  Layout,
  Projects,
  Skills,
  
} from '../containers';
import Blog from '../containers/Blog';

import { seoData } from '../utils/portfolio';
import Contact from '../containers/Contact';
import Education from '../containers/Education';



const Home: NextPage = () => {
  return (
    <>
      <SEO {...seoData} />
      
      <Layout>
       
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Education/>
        <Projects />
        <Blog />
        <Contact/>
      </Layout>
    </>
  );
};

export default Home;
