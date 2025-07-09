import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Speakers from '@/components/Speakers';
import Workshops from '@/components/Workshops';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Speakers />
        <Workshops />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
