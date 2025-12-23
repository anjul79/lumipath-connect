import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxVLbklG6I8V-vt8I0E6rTSwk6vGR21IdDLHd9tQMtjv5mPOJGW14TVDnKpC7aw8xugBA/exec';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        const data = {
          page: location.pathname,
          referrer: document.referrer || 'direct',
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
        };

        if (TRACKING_SCRIPT_URL) {
          await fetch(TRACKING_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data as any).toString(),
          });
          console.log('Page view tracked:', location.pathname);
        }
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [location.pathname]);

  return null;
};

export default PageViewTracker;
