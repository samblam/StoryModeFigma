import React from 'react';
import Hero from './components/Hero';
import ClientSection from './components/ClientSection';
import Playground from './components/Playground';
import About from './components/About';
import Contact from './components/Contact';
import { clients } from './constants';

const App: React.FC = () => {
  return (
    <main className="w-full bg-white text-black font-sans">
      {/* Page 1: Hero */}
      <Hero />

      {/* Pages 2-4: Clients */}
      {clients.map(client => (
        <ClientSection key={client.id} data={client} />
      ))}

      {/* Page 5: Playground */}
      <Playground />

      {/* Page 6: About */}
      <About />

      {/* Page 7: Contact */}
      <Contact />
    </main>
  );
};

export default App;