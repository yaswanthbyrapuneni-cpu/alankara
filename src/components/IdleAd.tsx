import { useState, useEffect, useRef } from 'react';
import { loadDetector, runDetection } from '../detectors/DetectorManager';
import { FaceLandmarkerResult } from '@mediapipe/tasks-vision';
import clsx from 'clsx';

// Default ad images with their paths
const DEFAULT_ADS = [
  '/public/assets/products/f5575d8f5c5073585466226b821f83044ac2feb2.png',
  '/public/assets/products/placeholder_2.png',
  '/public/assets/products/placeholder_3.png',
  '/public/assets/products/placeholder_4.png',
  '/public/assets/products/placeholder_5.png'
];

interface IdleAdProps {
  /**
   * Array of image URLs to display in the slideshow
   * @default DEFAULT_ADS
   */
  images?: string[];
  
  /**
   * Time in milliseconds before showing ads when no person is detected
   * @default 30000 (30 seconds)
   */
  inactivityTimeout?: number;
  
  /**
   * Time in milliseconds between image transitions
   * @default 5000 (5 seconds)
   */
  slideInterval?: number;
  
  /**
   * CSS transition duration for image fades
   * @default "500ms"
   */
  transitionDuration?: string;
  
  /**
   * Callback when user is detected after being idle
   */
  onUserDetected?: () => void;
  
  /**
   * Callback when idle state changes
   */
  onIdleStateChange?: (isIdle: boolean) => void;
}

export function IdleAd({
  images = DEFAULT_ADS,
  inactivityTimeout = 30000,
  slideInterval = 5000,
  transitionDuration = "500ms",
  onUserDetected,
  onIdleStateChange
}: IdleAdProps) {
  const [isAdVisible, setIsAdVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDetectorReady, setIsDetectorReady] = useState(false);
  const [cameraError, setCameraError] = useState<string>("");
  const [wasIdle, setWasIdle] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const detectionRef = useRef<number>(0);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef(true);
  
  // Initialize face detection and camera
  useEffect(() => {
    // Load the face detector
    loadDetector('face')
      .then(() => {
        if (mountedRef.current) {
          setIsDetectorReady(true);
          initCamera();
        }
      })
      .catch(error => {
        if (mountedRef.current) {
          console.error('Failed to initialize face detector:', error);
          setCameraError(`Failed to load face detection: ${error.message}`);
        }
      });

    return () => {
      mountedRef.current = false;
      cleanup();
    };
  }, []);

  // Handle slideshow when ad is visible
  useEffect(() => {
    if (isAdVisible) {
      // Start slideshow timer
      slideTimerRef.current = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, slideInterval);

      // Hide cursor
      document.body.style.cursor = 'none';

      return () => {
        if (slideTimerRef.current) {
          clearInterval(slideTimerRef.current);
        }
        document.body.style.cursor = '';
      };
    }
  }, [isAdVisible, images.length, slideInterval]);

  // Initialize camera
  const initCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
          frameRate: { ideal: 30 }
        }
      });

      if (!mountedRef.current) {
        stream.getTracks().forEach(track => track.stop());
        return;
      }

      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        
        // Wait for video to be ready before starting detection
        if (videoRef.current.readyState >= 2) {
          startDetection();
        } else {
          videoRef.current.onloadeddata = () => startDetection();
        }
      }
    } catch (err) {
      if (mountedRef.current) {
        console.error('Camera initialization failed:', err);
        setCameraError(err instanceof Error ? err.message : "Failed to access camera");
      }
    }
  };

  // Start person detection loop
  const startDetection = () => {
    if (!videoRef.current) return;

    const detectPerson = async () => {
      if (!videoRef.current || !mountedRef.current) return;

      try {
        const results = runDetection('face', videoRef.current) as FaceLandmarkerResult;
        
        if (results?.faceLandmarks?.length > 0) {
          // Person detected
          const currentlyIdle = isAdVisible || wasIdle;
          
          // If transitioning from idle to active, trigger callback
          if (currentlyIdle && onUserDetected) {
            onUserDetected();
          }
          
          // Hide ads and reset states
          setIsAdVisible(false);
          setWasIdle(false);
          document.body.style.cursor = '';
          
          if (inactivityTimerRef.current) {
            clearTimeout(inactivityTimerRef.current);
            inactivityTimerRef.current = null;
          }
          
          if (onIdleStateChange) {
            onIdleStateChange(false);
          }
        } else {
          // No person detected - start inactivity timer if not already running
          if (!inactivityTimerRef.current && !isAdVisible) {
            inactivityTimerRef.current = setTimeout(() => {
              if (mountedRef.current) {
                setIsAdVisible(true);
                setWasIdle(true);
                if (onIdleStateChange) {
                  onIdleStateChange(true);
                }
              }
            }, inactivityTimeout);
          }
        }
      } catch (error) {
        console.error('[IdleAd] Error in detection loop:', error);
      }

      // Schedule next frame if still mounted
      if (mountedRef.current) {
        detectionRef.current = requestAnimationFrame(detectPerson);
      }
    };

    detectPerson();
  };

  // Cleanup resources
  const cleanup = () => {
    if (detectionRef.current) {
      cancelAnimationFrame(detectionRef.current);
    }
    
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    document.body.style.cursor = '';
  };

  // Render camera error if any
  if (cameraError) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <h3 className="text-white text-xl font-semibold mb-2">Camera Access Error</h3>
          <p className="text-white/80">
            {cameraError}
          </p>
          {/* Display a fallback image */}
          <img 
            src={images[0]} 
            alt="Advertisement" 
            className="mt-6 max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hidden video element for detection */}
      <video 
        ref={videoRef}
        className="hidden"
        playsInline 
        muted
      />
      
      {/* Advertisement Overlay */}
      <div 
        className={clsx(
          // Changed z-index to be higher than other elements
          "fixed inset-0 bg-black z-[9999]",
          "transition-all duration-500 ease-in-out",
          isAdVisible 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none invisible"
        )}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh'
        }}
      >
        {/* Image container with centered content */}
        <div className="absolute inset-0 flex items-center justify-center size-full">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Advertisement ${index + 1}`}
              className={clsx(
                "absolute w-screen h-screen",
                "object-cover transition-opacity",
                { 
                  "opacity-100": index === currentImageIndex,
                  "opacity-0": index !== currentImageIndex
                }
              )}
              style={{ transitionDuration }}
            />
          ))}
        </div>

        {/* Debug information */}
        <div className="absolute top-4 right-4 bg-black/50 text-white text-sm p-2 rounded">
          Ad {currentImageIndex + 1} of {images.length}
        </div>
      </div>
    </>
  );
}