import type { Metadata } from 'next';
import { playfairDisplay, crimsonPro, inter } from './fonts';
import './globals.css';

const SITE_URL = 'https://tuananhhusc.github.io/Van-De-Su-An-Minh-Cua-Thien-Chua'; // GitHub Pages URL

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Vấn Đề Sự Ẩn Mình Của Thiên Chúa - Báo Cáo Nghiên Cứu Chuyên Sâu',
  description:
    'Báo cáo nghiên cứu chuyên sâu toàn diện về sự ẩn mình của Thiên Chúa (Divine Hiddenness), phản biện J.L. Schellenberg và phân tích chiều kích tâm linh của Thánh Gioan Thánh Giá.',
  keywords: [
    'Divine Hiddenness',
    'Sự ẩn mình của Thiên Chúa',
    'Triết học tôn giáo',
    'Thần học kinh viện',
    'Thần học thần bí',
    'Schellenberg',
    'Thomas Aquinas',
    'Blaise Pascal',
    'Đêm tối của linh hồn',
    'Đức tin Kitô giáo',
  ],
  authors: [{ name: 'An Minh Thiên Chúa', url: SITE_URL }],
  creator: 'An Minh Thiên Chúa',
  publisher: 'An Minh Thiên Chúa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vấn Đề Sự Ẩn Mình Của Thiên Chúa - Báo Cáo Nghiên Cứu Chuyên Sâu',
    description:
      'Giữa bằng chứng và hy vọng: Khảo luận sâu sắc về tình trạng vô tín không kháng cự và phương cách sư phạm mầu nhiệm của một Thiên Chúa ẩn mình.',
    url: SITE_URL,
    siteName: 'An Minh Thiên Chúa',
    images: [
      {
        url: '/Van-De-Su-An-Minh-Cua-Thien-Chua/dark_night.png', // Sử dụng ảnh tranh Lãng mạn làm ảnh chia sẻ
        width: 1200,
        height: 630,
        alt: 'Đêm Tối Của Linh Hồn - Divine Hiddenness',
      },
    ],
    locale: 'vi_VN',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00.000Z',
    authors: ['An Minh Thiên Chúa'],
    tags: ['Theology', 'Philosophy', 'Catholicism'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vấn Đề Sự Ẩn Mình Của Thiên Chúa - Báo Cáo Nghiên Cứu Chuyên Sâu',
    description: 'Tại sao một Thiên Chúa yêu thương lại im lặng? Khám phá vấn đề "Divine Hiddenness".',
    images: ['/Van-De-Su-An-Minh-Cua-Thien-Chua/dark_night.png'],
    creator: '@anminhthienchua',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfairDisplay.variable} ${crimsonPro.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
             __html: `
              try {
                let theme = localStorage.getItem('app-theme');
                if (theme === 'dark' || theme === 'sepia') {
                  document.documentElement.setAttribute('data-theme', theme);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-parchment text-ink transition-colors duration-500 ease-in-out">{children}</body>
    </html>
  );
}
