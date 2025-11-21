import React from 'react';
import { playRandomSound } from '../utils/audio';

const Playground: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-white relative overflow-hidden select-none" onClick={() => playRandomSound()}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="bg-[#4a3030] text-white px-6 py-3 text-xl font-bold pointer-events-auto cursor-pointer hover:scale-105 transition-transform">
          Click around and listen!
        </div>
      </div>

      {/* Shapes scattered via absolute positioning to mimic the collage look */}
      
      {/* Blue Circle with Orange I */}
      <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-[#5555ff] rounded-full flex items-center justify-center cursor-pointer hover:rotate-12 transition-transform" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
         <div className="w-4 h-16 bg-[#ff5500]"></div>
      </div>

      {/* Eyes */}
      <div className="absolute top-[8%] left-[30%] flex gap-4 cursor-pointer" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
        <div className="w-24 h-24 rounded-full bg-[#4ade80] border-[6px] border-[#333] flex items-center justify-center relative overflow-hidden">
             <div className="w-12 h-12 bg-[#5555ff] rounded-full flex items-center justify-center">
                 <div className="w-6 h-6 bg-[#ff5500] rounded-full"></div>
             </div>
             <div className="absolute -top-8 left-0 w-32 h-10 bg-[#5555ff] -rotate-12"></div>
        </div>
        <div className="w-24 h-24 rounded-full bg-[#4ade80] border-[6px] border-[#333] flex items-center justify-center relative overflow-hidden">
             <div className="w-12 h-12 bg-[#5555ff] rounded-full flex items-center justify-center">
                 <div className="w-6 h-6 bg-[#ff5500] rounded-full"></div>
             </div>
             <div className="absolute -top-8 left-0 w-32 h-10 bg-[#5555ff] rotate-12"></div>
        </div>
      </div>

      {/* Star Burst */}
      <div className="absolute top-[15%] right-[30%] w-40 h-40 flex items-center justify-center cursor-pointer animate-spin-slow" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
         {[0, 45, 90, 135].map((deg) => (
             <div key={deg} className="absolute w-40 h-4 bg-gradient-to-r from-[#333] via-[#4ade80] to-[#ff5500]" style={{ transform: `rotate(${deg}deg)` }}></div>
         ))}
      </div>

      {/* Orange/Green Rect Block */}
      <div className="absolute top-[10%] right-[10%] w-24 h-24 border-2 border-[#5555ff] p-2 cursor-pointer" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
          <div className="w-16 h-16 bg-[#ff5500] absolute top-4 left-2"></div>
          <div className="w-8 h-12 bg-[#4ade80] absolute top-4 right-4"></div>
      </div>

      {/* Green Zig Zag */}
      <div className="absolute top-[40%] left-[5%] w-20 h-32 cursor-pointer" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
         <div className="w-full h-1/2 bg-[#4ade80] skew-y-12"></div>
         <div className="w-full h-1/2 bg-[#5555ff] -skew-y-12 -mt-4"></div>
      </div>

      {/* Dotted Star Circle */}
      <div className="absolute top-[40%] left-[20%] w-48 h-48 flex items-center justify-center cursor-pointer" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
          {/* Dots */}
          {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="absolute w-3 h-3 bg-[#ff5500] rounded-full" 
                   style={{ 
                       top: '50%', left: '50%', 
                       transform: `translate(-50%, -50%) rotate(${i * 30}deg) translate(80px)` 
                   }}></div>
          ))}
          {/* Star */}
           <div className="text-[#4ade80] text-9xl font-mono select-none relative" style={{ top: '-10px' }}>★</div>
      </div>

      {/* Smiley */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-48 h-48 bg-[#4ade80] rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-[#3bcf70]" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
          <div className="flex gap-8 mb-2">
              <div className="w-4 h-4 bg-[#333] rounded-full"></div>
              <div className="w-4 h-4 bg-[#333] rounded-full"></div>
          </div>
          <div className="w-8 h-8 bg-[#5555ff] rotate-45 mb-2"></div>
          <div className="w-20 h-10 border-b-8 border-[#ff5500] rounded-full"></div>
      </div>

      {/* Abstract Orange Box */}
      <div className="absolute bottom-[10%] left-[10%] w-32 h-24 bg-[#ff5500] flex items-center justify-center cursor-pointer" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
          <div className="w-12 h-12 bg-[#5555ff] rounded-full"></div>
      </div>

      {/* DNA Helix thing */}
      <div className="absolute bottom-[30%] right-[25%] w-32 h-32 cursor-pointer" onClick={(e) => {e.stopPropagation(); playRandomSound();}}>
         <div className="w-full h-2 bg-[#ff5500] rotate-45 absolute top-1/2"></div>
         <div className="w-24 h-24 border-4 border-[#4ade80] rounded-full absolute left-4 top-4 border-t-transparent border-b-transparent rotate-45"></div>
      </div>

    </section>
  );
};

export default Playground;