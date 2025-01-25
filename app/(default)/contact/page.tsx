export const metadata = {
  title: 'Contact Us - NextGen Forex',
  description:
    'Get in touch with our team for questions about our forex trading platform, account types, and trading conditions.',
};

import PageHeader from '@/components/page-header';

export default function Contact() {
  return (
    <section>
      <div className='pt-32 pb-12 md:pt-44 md:pb-20'>
        <div className='px-4 sm:px-6'>
          <PageHeader
            className='mb-12 md:mb-20'
            title='Get in Touch'
            description='Have questions? Our expert team is here to help 24/5. Reach out through any of our contact channels for prompt assistance with your trading needs.'
          >
            24/7 Support
          </PageHeader>

          {/* Company Information */}
          <div className='max-w-3xl mx-auto mb-16'>
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Office Information */}
              <div className='flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-6'>
                <div className='mb-4'>
                  <h3 className='font-inter-tight font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2'>
                    Registered Office
                  </h3>
                  <div className='space-y-1 text-gray-600 dark:text-gray-400'>
                    <p>Ground floor, The Sotheby building,</p>
                    <p>Rodney village, Rodney bay,</p>
                    <p>Gross-Islet, Saint Lucia</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className='flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-6'>
                <div className='mb-4'>
                  <h3 className='font-inter-tight font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2'>
                    Contact Details
                  </h3>
                  <div className='space-y-3 text-gray-600 dark:text-gray-400'>
                    <div className='flex items-center'>
                      <svg
                        className='w-5 h-5 fill-amber-500 mr-3'
                        viewBox='0 0 20 20'
                      >
                        <path d='M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305l-.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5 2.526 1.12 2.526 2.5-1.132 2.5-2.526 2.5zM19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6z' />
                      </svg>
                      <a
                        href='mailto:support@preferredlimited.com'
                        className='hover:text-amber-500 transition-colors'
                      >
                        support@preferredlimited.com
                      </a>
                    </div>
                    <div className='flex items-center'>
                      <svg
                        className='w-5 h-5 fill-amber-500 mr-3'
                        viewBox='0 0 20 20'
                      >
                        <path d='M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305l-.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5 2.526 1.12 2.526 2.5-1.132 2.5-2.526 2.5zM19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6z' />
                      </svg>
                      <a
                        href='https://wa.me/447452329003'
                        className='hover:text-amber-500 transition-colors'
                      >
                        WhatsApp: +44 7452 329003
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className='relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.amber.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.amber.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.amber.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.amber.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-16 pb-3'>
            <div className='w-full max-w-2xl mx-auto shrink-0'>
              <form className='relative'>
                <div
                  className='absolute -inset-3 bg-amber-500/15 dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.amber.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.amber.500/.56)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.amber.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.amber.500/.56)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]'
                  aria-hidden='true'
                />
                <div className='space-y-5'>
                  <div className='space-y-3'>
                    <div>
                      <label className='sr-only' htmlFor='name'>
                        Name
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none'>
                          <svg
                            className='fill-current'
                            xmlns='http://www.w3.org/2000/svg'
                            width={16}
                            height={16}
                          >
                            <path d='M14.9 0c-.3 0-8.4.8-11.6 4-2.8 2.8-2.2 6.5-1.2 8.5L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.9.4 2.2.8 3.6.8 1.6 0 3.3-.5 4.9-2 3.4-3.4 4-11.3 4-11.6 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3Z' />
                          </svg>
                        </div>
                        <input
                          id='name'
                          className='form-input text-sm w-full pl-10 pr-4'
                          type='text'
                          placeholder='Your name...'
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className='sr-only' htmlFor='email'>
                        Email
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none'>
                          <svg
                            className='fill-current'
                            xmlns='http://www.w3.org/2000/svg'
                            width={16}
                            height={14}
                          >
                            <path d='M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z' />
                          </svg>
                        </div>
                        <input
                          id='email'
                          className='form-input text-sm w-full pl-10 pr-4'
                          type='email'
                          placeholder='Your email...'
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className='sr-only' htmlFor='trading-experience'>
                        Trading Experience
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none'>
                          <svg
                            className='fill-current'
                            xmlns='http://www.w3.org/2000/svg'
                            width={16}
                            height={16}
                          >
                            <path d='m5.2.02 10 2A1 1 0 0 1 16 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3V1A1 1 0 0 1 5.2.02ZM2 12v2h4v-2H2Zm0-4v2h4V8H2Zm6 6h6V3.82l-8-1.6V6h1a1 1 0 0 1 1 1v7Zm2-8h2v6h-2V6Z' />
                          </svg>
                        </div>
                        <select
                          id='trading-experience'
                          className='form-select text-sm w-full pl-10'
                          defaultValue=''
                          required
                        >
                          <option value='' disabled>
                            Trading Experience
                          </option>
                          <option value='beginner'>Beginner (0-1 year)</option>
                          <option value='intermediate'>
                            Intermediate (1-3 years)
                          </option>
                          <option value='advanced'>Advanced (3+ years)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className='sr-only' htmlFor='message'>
                        Message
                      </label>
                      <textarea
                        id='message'
                        className='form-textarea text-sm w-full resize-none'
                        placeholder='Your message..'
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className='flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='text-sm text-gray-500 ml-2'>
                          I'd like to receive trading insights & platform
                          updates.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <button className='btn text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Cards */}
          <div className='max-w-xs md:max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3'>
              {/* Card */}
              <div className='flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5'>
                <div className='grow mb-3'>
                  <div className='font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1'>
                    24/7 Support
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-500'>
                    Get assistance from our professional support team anytime,
                    anywhere.
                  </p>
                </div>
                <div className='flex items-center space-x-2.5'>
                  <svg
                    className='shrink-0 fill-amber-500/80'
                    width={16}
                    height={16}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 0a8 8 0 1 0 3.2 15.335l.916-.4-.8-1.833-.916.4A6 6 0 1 1 14 8v1a1 1 0 1 1-2 0V8a4.033 4.033 0 1 0-1.286 2.92A2.987 2.987 0 0 0 16 9V8a8.009 8.009 0 0 0-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z' />
                  </svg>
                  <div className='text-sm text-gray-800 dark:text-gray-200'>
                    support@preferredlimited.com
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className='flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5'>
                <div className='grow mb-3'>
                  <div className='font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1'>
                    Global Access
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-500'>
                    Trade from anywhere with our mobile and desktop platforms.
                  </p>
                </div>
                <div className='flex items-center space-x-2.5'>
                  <svg
                    className='shrink-0 fill-amber-500/80'
                    width={12}
                    height={16}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 13V3h8v10H2Z' />
                  </svg>
                  <div className='text-sm text-gray-800 dark:text-gray-200'>
                    MT5 & MT4 Available
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className='flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5'>
                <div className='grow mb-3'>
                  <div className='font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1'>
                    Secure Trading
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-500'>
                    Trade with confidence knowing your funds are secure and
                    protected.
                  </p>
                </div>
                <div className='flex items-center space-x-2.5'>
                  <svg
                    className='shrink-0 fill-amber-500/80'
                    width={14}
                    height={16}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M5.591 15.069c.404.358.684.606.709.631.4.4 1 .4 1.4.1.05-.05 1.075-.975 2.1-1.9 1.025-.925 2.05-1.85 2.1-1.9 1.4-1.3 2.1-3.1 2.1-5 0-3.9-3.1-7-7-7S0 3.1 0 7c0 1.9.7 3.7 2.1 4.9 0 .075 2.293 2.107 3.491 3.169Z' />
                  </svg>
                  <div className='text-sm text-gray-800 dark:text-gray-200'>
                    Bank-Grade Security
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
