import { useEffect } from 'react';

const KoFiWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof kofiWidgetOverlay !== 'undefined') {
        kofiWidgetOverlay.draw('hussgb', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Support Me',
          'floating-chat.donateButton.background-color': '#323842',
          'floating-chat.donateButton.text-color': '#fff'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default KoFiWidget;
