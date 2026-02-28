let audioCtx: AudioContext | null = null;
let muted = false;

export function isMuted() {
  return muted;
}

export function setMuted(value: boolean) {
  muted = value;
}

async function getCtx(): Promise<AudioContext> {
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === "suspended") await audioCtx.resume();
  return audioCtx;
}

function tone(
  ctx: AudioContext,
  type: OscillatorType,
  freqStart: number,
  freqEnd: number,
  duration: number,
  gainPeak: number,
  startTime = ctx.currentTime,
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = type;
  osc.frequency.setValueAtTime(freqStart, startTime);
  osc.frequency.linearRampToValueAtTime(freqEnd, startTime + duration);

  gain.gain.setValueAtTime(gainPeak, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

export async function synthJump() {
  if (muted) return;
  const ctx = await getCtx();
  tone(ctx, "square", 180, 340, 0.12, 0.06);
}

export async function synthDoubleJump() {
  if (muted) return;
  const ctx = await getCtx();
  tone(ctx, "square", 300, 540, 0.1, 0.05);
}

export async function synthUnmute() {
  const ctx = await getCtx();
  const t = ctx.currentTime;
  tone(ctx, "sine", 440, 440, 0.08, 0.04, t);
  tone(ctx, "sine", 660, 660, 0.1, 0.04, t + 0.09);
}

export async function synthDeath() {
  if (muted) return;
  const ctx = await getCtx();
  const t = ctx.currentTime;
  tone(ctx, "sawtooth", 320, 55, 0.45, 0.08, t);
  tone(ctx, "square", 160, 35, 0.3, 0.04, t + 0.05);
}
