import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/work/garena/banner.jpg';
import logoImg from '../assets/images/work/garena.png';
import img1 from '../assets/images/work/garena/01.jpg';
import img2 from '../assets/images/work/garena/02.jpg';
import img3 from '../assets/images/work/garena/03.jpg';
import img4 from '../assets/images/work/garena/04.jpg';
import freefire from '../assets/images/work/garena/freefire.jpg';
export default function ExperienceGarena() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryImages = [img1, img2, img3, img4];
  const galleryCaptions = [
    'Tournament Speed Drifters',
    'RoV ',
    'FIFA',
    'RoV Compitition',
  ];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl pt-20 md:text-4xl font-semibold'>
              E-Sports Event
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Developed web-based game event features and near real-time in-game
              gifting systems, supporting a large user base.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
            <div className='flex gap-6'>
              <img
                src={freefire}
                alt='Operations dashboard'
                className='rounded-xl max-h-[520px] w-auto'
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Gallery */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-12'>
        <h2 className='text-xl md:text-2xl font-semibold'>Gallery</h2>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-4'>
          {galleryImages.map((src, idx) => (
            <figure key={idx} className='group cursor-zoom-in'>
              <img
                src={src}
                alt={galleryCaptions[idx]}
                className='w-full h-40 md:h-48 object-cover rounded-lg border border-gray-200 shadow-sm group-hover:opacity-95'
                onClick={() => setLightboxIndex(idx)}
                loading='lazy'
              />
              {/* <figcaption className='mt-2 text-xs text-gray-600'>
                {galleryCaptions[idx]}
              </figcaption> */}
            </figure>
          ))}
        </div>

        {lightboxIndex !== null ? (
          <div
            className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4'
            onClick={() => setLightboxIndex(null)}>
            <div
              className='max-w-[90vw] max-h-[90vh]'
              onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[lightboxIndex]}
                alt={galleryCaptions[lightboxIndex]}
                className='max-w-full max-h-[80vh] rounded-lg shadow-2xl'
              />
              {/* <p className='mt-3 text-center text-sm text-gray-200'>
                {galleryCaptions[lightboxIndex]}
              </p> */}
              <div className='mt-4 flex justify-center'>
                <button
                  className='px-4 py-2 rounded-md bg-white text-black hover:bg-gray-100'
                  onClick={() => setLightboxIndex(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </section>

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
