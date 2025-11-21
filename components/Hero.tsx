import React from 'react';

const ArrowGraphic: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => {
  const isLeft = direction === 'left';
  return (
    <div className={`hidden md:flex flex-col items-center justify-center gap-2 ${isLeft ? 'mr-8' : 'ml-8'}`}>
      {/* Abstract representation of the speaker/arrow graphic from the PDF */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Orange Lines */}
        <div className={`absolute w-8 h-1 bg-[#ff5500] top-0 ${isLeft ? 'left-0 -rotate-45' : 'right-0 rotate-45'}`}></div>
        <div className={`absolute w-8 h-1 bg-[#ff5500] ${isLeft ? 'left-[-10px]' : 'right-[-10px]'}`}></div>
        <div className={`absolute w-8 h-1 bg-[#ff5500] bottom-0 ${isLeft ? 'left-0 rotate-45' : 'right-0 -rotate-45'}`}></div>
        
        {/* Triangle Stack */}
        <div className={`w-0 h-0 border-y-[30px] border-y-transparent ${isLeft ? 'border-r-[40px] border-r-[#5555ff]' : 'border-l-[40px] border-l-[#5555ff]'}`}></div>
        <div className={`w-0 h-0 border-y-[40px] border-y-transparent ${isLeft ? 'border-r-[50px] border-r-[#332222] -ml-6' : 'border-l-[50px] border-l-[#332222] -mr-6'}`}></div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-4 right-4 flex gap-1">
             <div className="w-4 h-4 bg-[#333]"></div>
             <div className="w-4 h-4 bg-[#4ade80]"></div>
             <div className="w-4 h-4 bg-[#5555ff]"></div>
             <div className="w-4 h-4 bg-[#ff5500]"></div>
        </div>

      <ArrowGraphic direction="left" />
      
      <div className="bg-[#4ade80] w-full max-w-2xl p-12 md:p-16 relative">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black font-sans tracking-tight mb-8">
          Welcome to STORY MODE, an audio branding studio that makes sound for people.
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 font-medium">
          UX and Product Sound
        </p>

        <div className="text-lg md:text-xl font-bold">
          <p className="mb-4">Sections:</p>
          <ul className="space-y-1">
            <li>- Work</li>
            <li>- About</li>
            <li>- Fun</li>
            <li>- Contact</li>
          </ul>
        </div>
      </div>

      <ArrowGraphic direction="right" />
    </section>
  );
};

export default Hero;