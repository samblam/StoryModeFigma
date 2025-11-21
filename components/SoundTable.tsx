import React from 'react';
import { SoundItem } from '../types';
import { playSound } from '../utils/audio';

interface SoundTableProps {
  sounds: SoundItem[];
  baseColor: string;
  headerColor: string;
}

const SoundTable: React.FC<SoundTableProps> = ({ sounds, baseColor, headerColor }) => {
  return (
    <div className={`w-full p-4 ${baseColor} text-white mt-12`}>
      <div className="flex items-center mb-2">
        <span className="font-bold text-lg">[click to play sounds]</span>
      </div>
      
      <div className="border-2 border-white">
        {/* Table Header */}
        <div className="grid grid-cols-12 border-b-2 border-white font-bold text-center bg-white/10">
            <div className="col-span-1 border-r-2 border-white p-2"></div>
            <div className="col-span-3 border-r-2 border-white p-2">Sound</div>
            <div className="col-span-2 border-r-2 border-white p-2">Type</div>
            <div className="col-span-6 p-2">Function</div>
        </div>

        {/* Rows */}
        {sounds.map((sound, idx) => (
          <div 
            key={idx} 
            className="grid grid-cols-12 border-b-2 border-white last:border-b-0 hover:bg-white/20 transition-colors cursor-pointer group"
            onClick={() => playSound(sound.waveType, parseInt(sound.previewNote || '440'), 0.4)}
          >
            <div className="col-span-1 border-r-2 border-white p-2 flex items-center justify-center font-bold">
              &gt;
            </div>
            <div className="col-span-3 border-r-2 border-white p-2 flex items-center justify-center text-center text-sm md:text-base">
              {sound.name}
            </div>
            <div className="col-span-2 border-r-2 border-white p-2 flex items-center justify-center text-center text-sm md:text-base">
              {sound.type}
            </div>
            <div className="col-span-6 p-2 flex items-center text-sm md:text-base pl-4">
              {sound.function}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoundTable;