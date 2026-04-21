'use client';

export default function MetaBar() {
  const handleShare = async (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = 'Vấn Đề Sự Ẩn Mình Của Thiên Chúa - Báo Cáo Nghiên Cứu Chuyên Sâu';

    if (platform === 'copy') {
      await navigator.clipboard.writeText(url);
      alert('Đã sao chép liên kết bài viết!');
      return;
    }

    let shareUrl = '';
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 border-y border-border-subtle/50 text-ink-muted">
        {/* Author & Time */}
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-muted opacity-80">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-sans text-sm tracking-wide">Thời gian đọc: ~25 phút</span>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4">
          <span className="font-sans text-xs uppercase tracking-widest opacity-60 mr-2">Chia sẻ</span>
          <button onClick={() => handleShare('facebook')} className="text-ink-muted hover:text-dons-red transition-colors" aria-label="Share on Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </button>
          <button onClick={() => handleShare('twitter')} className="text-ink-muted hover:text-ink transition-colors" aria-label="Share on X">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </button>
          <button onClick={() => handleShare('copy')} className="text-ink-muted hover:text-gold-muted transition-colors" aria-label="Copy Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
