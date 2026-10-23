import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Bakery from './components/Bakery';
import Celebrate from './components/Celebrate';
import Gallery from './components/Gallery';
import About from './components/About';
import Enquire from './components/Enquire';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Specialties />
        <Bakery />
        <Celebrate />
        <Gallery />
        <About />
        <Enquire />
      </main>
      <Footer />
    </>
  );
}

export default App;
