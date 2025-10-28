let audioContext: AudioContext | null = null;
let welcomeAudio: HTMLAudioElement | null = null;
let hasRequestedAudioPermission = false;

export async function requestAudioPermission(): Promise<boolean> {
  if (hasRequestedAudioPermission) return true;
  
  try {
    // Request microphone permission (even though we won't record)
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(track => track.stop());
    hasRequestedAudioPermission = true;
    return true;
  } catch (error) {
    console.error('Audio permission denied:', error);
    return false;
  }
}

export function initializeAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  
  if (!welcomeAudio) {
    welcomeAudio = new Audio('/assets/audio/welcome.mp3');
    welcomeAudio.preload = 'auto';
  }
}

export async function playWelcomeAudio(): Promise<boolean> {
  try {
    if (!welcomeAudio) {
      initializeAudio();
    }
    
    if (audioContext?.state === 'suspended') {
      await audioContext.resume();
    }
    
    if (welcomeAudio) {
      welcomeAudio.currentTime = 0;
      await welcomeAudio.play();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to play welcome audio:', error);
    return false;
  }
}

export function preloadAudio() {
  initializeAudio();
  if (welcomeAudio) {
    welcomeAudio.load();
  }
}
