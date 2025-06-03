import Header from '../components/Header';
import HiveHero from '../components/HiveHero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Career from '../components/Career';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HiveLandingPage = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <HiveHero />
      <Services />
      <AboutUs />
      <Testimonials />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
};

export default HiveLandingPage;