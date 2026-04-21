import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Hours from './components/Hours';
import Gallery from './components/Gallery';
import Notifications from './components/Notifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Hours />
        <Gallery />
        <Notifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
