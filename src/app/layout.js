'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('ready');
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
