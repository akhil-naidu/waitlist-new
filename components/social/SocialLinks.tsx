import { SOCIAL_LINKS } from '@/utils/constants';

export default function SocialLinks() {
  return (
    <div className='flex items-center gap-1'>
      {SOCIAL_LINKS.map(({ href, label }) => (
        <a
          key={href}
          className='font-medium text-orange-600 hover:underline'
          href={href}
          target='_blank'
          rel='noopener noreferrer'
        >
          {label}
        </a>
      ))}
    </div>
  );
}
