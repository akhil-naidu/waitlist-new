'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/theme-toggle';
import BorderedContainer from '@/components/visual/BorderedContainer';
import Logo from '@/components/visual/Logo';
import Container from '@/components/common/Container';
import { NAV_LINKS } from '@/utils/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) html.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      if (html) html.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className='absolute top-4 md:top-6 w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none'>
      <div className='px-4 sm:px-6'>
        <Container>
          <BorderedContainer className='h-12 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg px-3 shadow'>
            <div className='flex h-12 items-center justify-between gap-x-2'>
              <div className='flex-1'>
                <Link href='/'>
                  <Logo />
                </Link>
              </div>

              <nav className='hidden md:flex justify-center'>
                <ul className='flex items-center sm:gap-x-3 text-sm font-medium'>
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        className='text-gray-800 dark:text-gray-200 rounded-lg hover:bg-orange-200 dark:hover:bg-gray-800/30 py-1.5 px-3'
                        href={href}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className='flex items-center gap-x-2'>
                {/* <ThemeToggle /> */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
                >
                  <span className='sr-only'>Open main menu</span>
                  {isOpen ? (
                    <X className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Menu className='block h-6 w-6' aria-hidden='true' />
                  )}
                </button>
              </div>
            </div>
          </BorderedContainer>
        </Container>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className='md:hidden'>
          <div
            className='fixed inset-0 z-50 bg-gray-600 bg-opacity-75'
            aria-hidden='true'
          ></div>
          <nav className='fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-orange-200 dark:bg-gray-800 border-l border-orange-300 dark:border-gray-700 overflow-y-auto z-50'>
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                Menu
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className='rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              >
                <span className='sr-only'>Close menu</span>
                <X className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6'>
              <ul className='flex flex-col space-y-4'>
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className='text-base font-medium text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-white'
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
