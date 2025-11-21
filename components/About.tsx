import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    name: "Nick",
    role: ["Co-Founder", "Sound Designer"],
    imageUrl: "https://picsum.photos/200/200?grayscale" 
  },
  {
    name: "Ben",
    role: ["Co-Founder", "Composer"],
    imageUrl: "https://picsum.photos/201/201?grayscale"
  },
  {
    name: "Sam",
    role: ["Co-Founder", "Technology Strategist"],
    imageUrl: "https://picsum.photos/202/202?grayscale"
  }
];

const About: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-white p-8 md:p-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Team */}
        <div className="space-y-12">
          {team.map((member, idx) => (
            <div key={idx} className="border-t-2 border-black pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
               <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                  <h3 className="text-3xl md:text-4xl font-bold">{member.name}</h3>
                  <ul className="space-y-1">
                     {member.role.map((r, i) => (
                        <li key={i} className="text-lg">- {r}</li>
                     ))}
                  </ul>
               </div>
               <img src={member.imageUrl} alt={member.name} className="w-24 h-24 object-cover grayscale filter" />
            </div>
          ))}
          <div className="border-t-2 border-black w-full"></div>
        </div>

        {/* Right Column: Info */}
        <div className="flex flex-col justify-start">
           <div className="mb-12">
               <h4 className="text-xl font-bold mb-2">ABOUT US</h4>
               <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">STORY MODE LLC</h2>
               
               <h3 className="text-2xl font-bold mb-4">Core Values:</h3>
               <ul className="text-xl md:text-2xl font-medium space-y-1 mb-12">
                   <li>Curiosity</li>
                   <li>Simplicity</li>
                   <li>Empathy</li>
               </ul>
           </div>

           <div className="text-xl md:text-2xl leading-relaxed font-medium space-y-8">
               <p>Nick and Ben started Story Mode at the beginning of 2024, Sam joined the following year.</p>
               <p>Story Mode is a music house that specializes in audio design for interfaces and human experiences.</p>
               <p>Our mission is simple: to shape how the relationship between humans and machines will sound for the next coming 100 years.</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;