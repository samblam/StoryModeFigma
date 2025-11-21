// Simple synth to generate sounds without external assets
let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
};

export const playSound = (type: OscillatorType = 'sine', freq: number = 440, duration: number = 0.3) => {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    // Envelope to avoid clicking
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.error("Audio play failed", e);
  }
};

export const playRandomSound = () => {
    const types: OscillatorType[] = ['sine', 'square', 'triangle', 'sawtooth'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomFreq = 200 + Math.random() * 600;
    playSound(randomType, randomFreq, 0.2);
}