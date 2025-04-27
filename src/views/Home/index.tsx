import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialSection';
import FinalCTASection from './components/FinalCTASection';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;
