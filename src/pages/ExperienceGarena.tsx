import { Link } from 'react-router-dom';
import heroImg from '../assets/images/work/garena/banner.jpg';
import logoImg from '../assets/images/work/garena.png';

export default function ExperienceGarena() {
  return (
    <div>
      {/* Hero banner */}
      <section className='relative h-64 md:h-[420px] overflow-hidden'>
        <img
          src={heroImg}
          alt='Garena hero'
          className='absolute inset-0 h-full w-full object-cover object-center filter brightness-70'
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 mx-auto max-w-6xl px-6 md:px-8 h-full flex items-end pb-8'>
          <div className='text-white'>
            <img
              src={logoImg}
              alt='Garena logo'
              className='h-18 md:h-18 w-auto mb-6 rounded-xl'
            />
            <p className='text-xs uppercase tracking-wider opacity-80'>
              2018 – 2019
            </p>
            <h1 className='text-2xl md:text-4xl font-semibold mt-1'>
              Garena Online (Thailand)
            </h1>
            <p className='mt-2 max-w-2xl text-sm md:text-base opacity-90'>
              At Garena Online, I was a Full-Stack Developer building platforms
              that supported large-scale competitions and improved user
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <h2 className='text-xl md:text-2xl font-semibold'>Role</h2>
        <div className='mt-6 space-y-3 text-gray-700'>
          <ul className='list-disc pl-5 space-y-2'>
            <li>
              Delivered a website supporting E-Sport competitions and engaging a
              large user base.
            </li>
            <li>
              Implemented a gifting feature with API integration and Redis
              caching, improving user satisfaction.
            </li>
            <li>
              Collaborated with PMs and designers to turn business requirements
              into scalable solutions using React, PHP (Laravel), MongoDB and
              SQL.
            </li>
          </ul>
        </div>
      </section>

      {/* Feature section 1 */}
      {/* <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl pt-20 md:text-4xl font-semibold'>
              Operations Dashboard
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Centralized metrics, alerts, and tooling to speed up incident
              response and reduce manual tasks.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
            <div className='flex gap-6'>
              <img
                src={heroImg}
                alt='Operations dashboard'
                className='rounded-xl max-h-[520px] w-auto'
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Feature section 2 */}
      {/* <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='flex gap-6 justify-center'>
            <img
              src={heroImg}
              alt='Campaign tools'
              className='rounded-xl max-h-[520px] w-auto'
            />
          </div>
          <div>
            <h2 className='text-2xl md:text-4xl font-semibold'>
              Campaign Tools
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Built and optimized web modules for events and promotions,
              improving performance and ease-of-use.
            </p>
          </div>
        </div>
      </section> */}

      {/* Back link */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 pb-16'>
        <div className='mt-2'>
          <Link
            to='/#my-work'
            className='inline-flex items-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50'>
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
