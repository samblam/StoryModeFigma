export interface SoundItem {
  name: string;
  type: string;
  function: string;
  previewNote?: string; // Frequency or note identifier for the synth
  waveType?: OscillatorType;
}

export interface ClientData {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  themeColor: string; // Tailwind class or hex
  sounds: SoundItem[];
}

export interface TeamMember {
  name: string;
  role: string[];
  imageUrl: string;
}