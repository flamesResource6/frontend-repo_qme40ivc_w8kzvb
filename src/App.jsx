import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Playground from './components/Playground';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-inter">
      <Header />
      <main>
        <Hero />
        <Features />
        <Playground />
      </main>
      <Footer />
    </div>
  );
}

export default App;
