'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'sepia' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Attempt to load theme from localStorage
    const savedTheme = localStorage.getItem('app-theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
    localStorage.setItem('app-theme', newTheme);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Invisible overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-50">
        {/* Main Aa Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-10 h-10 md:w-11 md:h-11 shadow-sm border border-border-subtle rounded-[3px] flex items-center justify-center font-heading text-lg md:text-xl transition-all relative z-50 ${
            isOpen ? 'bg-dons-red text-[#FAF8F1] border-dons-red' : 'bg-parchment-warm text-ink hover:text-dons-red hover:shadow-md'
          }`}
          aria-label="Cài đặt giao diện đọc"
          title="Tùy chỉnh giao diện"
        >
          Aa
        </button>

        {/* Dropdown Panel */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-parchment-warm shadow-xl border border-border-subtle rounded-[3px] flex flex-col w-52 font-serif text-ink overflow-hidden animate-fade-in z-50 origin-top-right">
            <div className="px-4 py-2.5 border-b border-border-subtle/50 text-[0.65rem] md:text-xs uppercase tracking-[0.2em] font-sans font-bold opacity-60 bg-black/5">
              Nền trang giấy
            </div>
            
            <button 
              onClick={() => { handleThemeChange('light'); setIsOpen(false); }} 
              className={`flex items-center gap-3 px-4 py-3 hover:bg-black/5 text-left transition-colors ${theme === 'light' ? 'font-bold text-dons-red' : ''}`}
            >
              <span className="w-4 h-4 rounded-full border border-ink/20 shadow-inner flex-shrink-0" style={{backgroundColor: '#FAF8F1'}}></span>
              Bản gốc (Sáng)
            </button>
            
            <button 
               onClick={() => { handleThemeChange('sepia'); setIsOpen(false); }} 
               className={`flex items-center gap-3 px-4 py-3 border-y border-border-subtle/30 hover:bg-black/5 text-left transition-colors ${theme === 'sepia' ? 'font-bold text-dons-red' : ''}`}
            >
              <span className="w-4 h-4 rounded-full border border-ink/20 shadow-inner flex-shrink-0" style={{backgroundColor: '#EBDAC0'}}></span>
              Trang cổ (Nâu)
            </button>
            
            <button 
              onClick={() => { handleThemeChange('dark'); setIsOpen(false); }} 
              className={`flex items-center gap-3 px-4 py-3 hover:bg-black/5 text-left transition-colors ${theme === 'dark' ? 'font-bold text-dons-red' : ''}`}
            >
              <span className="w-4 h-4 rounded-full border border-ink/50 shadow-inner flex-shrink-0" style={{backgroundColor: '#0f172a'}}></span>
              Đêm tối
            </button>
          </div>
        )}
      </div>
    </>
  );
}
