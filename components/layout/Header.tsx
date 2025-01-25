import Link from 'next/link';
import ThemeToggle from '@/components/ui/theme-toggle';
import BorderedContainer from '@/components/visual/BorderedContainer';
import Logo from '@/components/visual/Logo';
import Container from '@/components/common/Container';
import { NAV_LINKS } from '@/utils/constants';

export default function Header() {
  return (
    <header className='absolute top-4 md:top-6 w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.amber.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.amber.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none'>
      <div className='px-4 sm:px-6'>
        <Container>
          <BorderedContainer className='h-12 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg px-3 shadow'>
            <div className='flex h-12 items-center justify-between gap-x-2'>
              <div className='flex-1'>
                <Link href='/'>
                  <Logo />
                </Link>
              </div>

              <nav className='flex justify-center'>
                <ul className='flex items-center sm:gap-x-3 text-sm font-medium'>
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        className='text-gray-800 dark:text-gray-200 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-800/30 py-1.5 px-3'
                        href={href}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <ThemeToggle />
            </div>
          </BorderedContainer>
        </Container>
      </div>
    </header>
  );
}
