import { Geist, Geist_Mono } from 'next/font/google';
// import "./globals.css";
import './_styles/globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer/Footer';
import FadeInSection from './_components/FadeInSection';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});



export const metadata = {
  metadataBase: new URL('https://www.otonistephen.vercel.app'), // Replace with your live domain
  title: {
    default: 'Stephen Otoni | Frontend Developer Portfolio',
    template: '%s | Stephen Otoni',
  },
  description:
    'Frontend Developer specializing in building scalable web apps with Next.js, React, and Supabase.',
  openGraph: {
    title: 'Stephen Otoni | Frontend Developer',
    description:
      'Building the future of the web with Next.js and modern backend tools.',
    url: 'https://www.otonistephen.vercel.app',
    siteName: 'Stephen Otoni Portfolio',
    images: [
      {
        url: '/og-image.png', // Keep this 1200x630px in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        {children}
        <FadeInSection>
          {' '}
          <Footer />
        </FadeInSection>
      </body>
    </html>
  );
}
