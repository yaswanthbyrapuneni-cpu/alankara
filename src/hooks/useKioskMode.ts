import { useState, useCallback, useEffect } from 'react';
import { playWelcomeAudio, preloadAudio, requestAudioPermission } from '@/utils/audioManager';

const KIOSK_PERMISSION_KEY = 'alankara-kiosk-permissions';

export function useKioskMode() {
  const [isKioskMode, setIsKioskMode] = useState(false);
  const [hasPlayedWelcome, setHasPlayedWelcome] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  useEffect(() => {
    // Check if permissions were previously granted
    const storedPermissions = localStorage.getItem(KIOSK_PERMISSION_KEY);
    if (storedPermissions === 'granted') {
      setPermissionsGranted(true);
      setIsKioskMode(true);
      preloadAudio();
    }
  }, []);

  const handlePermissionsGranted = useCallback(async () => {
    localStorage.setItem(KIOSK_PERMISSION_KEY, 'granted');
    await requestAudioPermission();
    preloadAudio();
    setPermissionsGranted(true);
    setIsKioskMode(true);
  }, []);

  const handleUserDetected = useCallback(async () => {
    if (isIdle && !hasPlayedWelcome) {
      const played = await playWelcomeAudio();
      if (played) {
        setHasPlayedWelcome(true);
      }
    }
    setIsIdle(false);
  }, [isIdle, hasPlayedWelcome]);

  const handleIdleStateChange = useCallback((idle: boolean) => {
    setIsIdle(idle);
    if (idle) {
      // Reset welcome flag when going idle
      setHasPlayedWelcome(false);
    }
  }, []);

  return {
    isKioskMode,
    permissionsGranted,
    isIdle,
    hasPlayedWelcome,
    handlePermissionsGranted,
    handleUserDetected,
    handleIdleStateChange,
  };
}
