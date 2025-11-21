import React from 'react';
import { ClientData } from '../types';
import SoundTable from './SoundTable';

interface ClientSectionProps {
  data: ClientData;
}

const ClientSection: React.FC<ClientSectionProps> = ({ data }) => {
  return (
    <section className="min-h-screen w-full bg-white p-6 md:p-16 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 font-sans tracking-tighter">
          CLIENT: {data.name} • <span className="font-normal">{data.tagline}</span>
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Problem</h3>
          <p className="text-xl md:text-2xl leading-relaxed font-medium max-w-4xl">
            {data.problem}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Solution</h3>
          <p className="text-xl md:text-2xl leading-relaxed font-medium max-w-5xl">
            {data.solution}
          </p>
        </div>

        <SoundTable 
            sounds={data.sounds} 
            baseColor={data.themeColor}
            headerColor={data.themeColor}
        />
      </div>
    </section>
  );
};

export default ClientSection;