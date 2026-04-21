'use client';

import { useState, useEffect, useCallback } from 'react';
import { tocSections, type TOCItem } from '@/data/tableOfContents';

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Flatten section IDs for IntersectionObserver
  const getAllIds = useCallback((): string[] => {
    const ids: string[] = [];
    tocSections.forEach((section) => {
      ids.push(section.id);
      section.children?.forEach((child) => ids.push(child.id));
    });
    return ids;
  }, []);

  useEffect(() => {
    const ids = getAllIds();
    const observerMap = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          observerMap.set(entry.target.id, entry);
        });

        // Find the topmost visible section
        const visibleEntries = Array.from(observerMap.values())
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [getAllIds]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const renderLink = (item: TOCItem, isChild = false) => {
    const isActive = activeId === item.id;
    return (
      <button
        key={item.id}
        onClick={() => scrollTo(item.id)}
        className={`toc-link ${isChild ? 'toc-link-child' : ''} ${isActive ? 'active' : ''} w-full text-left cursor-pointer`}
      >
        {item.number && (
          <span className="inline-block w-6 mr-1 text-right opacity-50 font-mono text-[0.7rem]">
            {item.number}
          </span>
        )}
        {item.title}
      </button>
    );
  };

  const tocContent = (
    <nav aria-label="Mục lục bài viết">
      <div className="mb-4 pb-3 border-b-2 border-dons-red/20">
        <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-dons-red">
          Mục Lục
        </h2>
      </div>
      <div className="space-y-0.5">
        {tocSections.map((section) => (
          <div key={section.id}>
            {renderLink(section)}
            {section.children?.map((child) => renderLink(child, true))}
          </div>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        id="toc-sidebar"
        className="hidden lg:block sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 py-4 scrollbar-thin"
        style={{ scrollbarWidth: 'thin' }}
      >
        {tocContent}
      </aside>

      {/* Mobile floating button */}
      <button
        id="toc-mobile-button"
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-dons-red text-[#FAF8F1] shadow-lg flex items-center justify-center hover:bg-dons-red-dark transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Mở mục lục"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="15" y2="12" />
          <line x1="3" y1="18" x2="9" y2="18" />
        </svg>
      </button>

      {/* Mobile overlay */}
      <div
        className={`toc-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div className={`toc-drawer ${mobileOpen ? 'open' : ''} p-6 pt-8`}>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-parchment-warm transition-colors cursor-pointer text-ink-muted hover:text-ink"
          aria-label="Đóng mục lục"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {tocContent}
      </div>
    </>
  );
}
