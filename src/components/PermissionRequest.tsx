import { useState } from 'react';
import { Camera, Mic, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

interface PermissionRequestProps {
  onPermissionsGranted: () => void;
}

export function PermissionRequest({ onPermissionsGranted }: PermissionRequestProps) {
  const [isRequesting, setIsRequesting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestPermissions = async () => {
    setIsRequesting(true);
    setError(null);

    try {
      // Request camera permission
      await navigator.mediaDevices.getUserMedia({ video: true });
      
      // Request audio permission
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioStream.getTracks().forEach(track => track.stop());
      } catch (audioError) {
        console.warn('Audio permission not granted, but continuing:', audioError);
      }

      onPermissionsGranted();
    } catch (err) {
      console.error('Permission error:', err);
      setError('Camera access is required for the virtual try-on kiosk to work.');
      setIsRequesting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Welcome to Alankara
          </h1>
          <p className="text-xl text-muted-foreground">
            Virtual Try-On Kiosk
          </p>
        </div>

        <div className="flex justify-center gap-8 py-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Camera</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Mic className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Audio</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">
            This kiosk needs camera and audio access to provide you with the best virtual try-on experience.
          </p>

          {error && (
            <div className="flex items-center gap-2 p-4 bg-destructive/10 text-destructive rounded-lg">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <Button
            size="lg"
            className="w-full"
            onClick={requestPermissions}
            disabled={isRequesting}
          >
            {isRequesting ? 'Requesting Access...' : 'Start Kiosk Mode'}
          </Button>
        </div>
      </div>
    </div>
  );
}
