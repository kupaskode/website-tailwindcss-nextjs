import type { NextPage } from 'next';
import Layouts from '../components/Layouts';
import About from '../components/organisms/About';
import Hero from '../components/organisms/Hero';
import Portfolio from '../components/organisms/Portfolio';
import Clients from '../components/organisms/Clients';
import Blog from '../components/organisms/Blog';
import Contact from '../components/organisms/Contact';

const Home: NextPage = () => {
  return (
    <Layouts>
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Blog />
      <Contact />
    </Layouts>
  );
};

export default Home;
