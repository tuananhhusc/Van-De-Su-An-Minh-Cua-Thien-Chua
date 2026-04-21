'use client';

import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      id="reading-progress-bar"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-parchment-warm/50"
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--accent-red) 0%, var(--accent-gold) 60%, var(--accent-gold-muted) 100%)',
          boxShadow: '0 0 8px rgba(255, 200, 69, 0.4)',
        }}
      />
    </div>
  );
}
