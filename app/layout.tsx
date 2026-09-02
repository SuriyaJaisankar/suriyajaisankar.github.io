import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Suriya Jaisankar — Salesforce Developer',
  description:
    'Portfolio of Suriya Jaisankar — Salesforce Developer specializing in Apex, LWC, Flows, Integrations, and Agentforce.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
