import Link from 'next/link';
import { NAV_LINKS } from '@/utils/constants';

export default function NavLinks() {
  return (
    <nav className='flex justify-center'>
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
  );
}
