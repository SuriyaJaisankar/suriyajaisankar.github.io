import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

const siteUrl = 'https://suriyajaisankar.github.io';
const description =
  'Suriya Jaisankar — Salesforce Developer specializing in Apex, Lightning Web Components, Flows, Integrations, and Agentforce.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Suriya Jaisankar — Salesforce Developer',
    template: '%s · Suriya Jaisankar',
  },
  description,
  keywords: [
    'Salesforce Developer',
    'Agentforce',
    'Apex',
    'Lightning Web Components',
    'LWC',
    'Flows',
    'Salesforce Certified',
    'Suriya Jaisankar',
  ],
  authors: [{ name: 'Suriya Jaisankar' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Suriya Jaisankar — Salesforce Developer',
    description,
    siteName: 'Suriya Jaisankar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suriya Jaisankar — Salesforce Developer',
    description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
