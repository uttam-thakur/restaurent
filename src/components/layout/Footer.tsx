'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Contact */}
          <div>
            <Image
              src="/images/logo-footer.png"
              alt="Rolanda"
              width={150}
              height={40}
              className="mb-6"
            />
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed luctus
              iquet augue. Etiam placerat lberoeq.
            </p>
            <div className="mb-4">
              <p className="font-medium mb-2">CALL +440 555 077</p>
              <p className="text-gray-400">ROLANDA@EXAMPLE.COM</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-400">14 MAIN ROAD, NEW YORK 1001</p>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-amber-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-amber-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-amber-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest" className="hover:text-amber-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12h8"/>
                  <path d="M12 8v8"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Restaurant */}
          <div>
            <h3 className="text-lg uppercase mb-6 tracking-wider">Restaurant</h3>
            <div className="space-y-4">
              <Link href="/menu" className="block text-gray-400 hover:text-amber-500 transition">MAIN DISH</Link>
              <Link href="/menu" className="block text-gray-400 hover:text-amber-500 transition">BREAKFASTS</Link>
              <Link href="/menu" className="block text-gray-400 hover:text-amber-500 transition">DINNERS</Link>
              <Link href="/menu" className="block text-gray-400 hover:text-amber-500 transition">LUNCH</Link>
            </div>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h3 className="text-lg uppercase mb-6 tracking-wider">Sign-up for our newsletter</h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="bg-black border-white focus:border-amber-500 text-white rounded-none"
              />
              <Button variant="outline" className="ml-1 border-white text-white hover:bg-white hover:text-black transition-all">
                SUBMIT
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center text-gray-500 text-xs">
          © 2025 QODE INTERACTIVE, ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
