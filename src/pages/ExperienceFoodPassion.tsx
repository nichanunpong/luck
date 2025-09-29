import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/work/foodpassion/banner.jpg';
import logoImg from '../assets/images/work/foodpassion.jpg';
import flow from '../assets/images/work/foodpassion/flow.jpg';
import dashboard from '../assets/images/work/foodpassion/dashboard.jpg';
import img1 from '../assets/images/work/foodpassion/01.jpg';
import img2 from '../assets/images/work/foodpassion/02.jpg';
export default function ExperienceFoodPassion() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryImages = [img1, img2];
  const galleryCaptions = ['Activity', 'Events'];

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
          alt='Food Passion hero'
          className='absolute inset-0 h-full w-full object-cover object-center filter brightness-70'
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 mx-auto max-w-6xl px-6 md:px-8 h-full flex items-end pb-8'>
          <div className='text-white'>
            <img
              src={logoImg}
              alt='Food Passion logo'
              className='h-18 md:h-18 w-auto mb-6 rounded-xl'
            />
            <p className='text-xs uppercase tracking-wider opacity-80'>
              2013 – 2017
            </p>
            <h1 className='text-2xl md:text-4xl font-semibold mt-1'>
              Food Passion Co., Ltd.
            </h1>
            <p className='mt-2 max-w-2xl text-sm md:text-base opacity-90'>
              At Food Passion, I was an Assistant Supervisor Software Developer
              developing web systems that reduced manual processes and improved
              efficiency.
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
              Gathered requirements from stakeholders, created ERDs, designed
              databases, and developed, tested, and deployed web applications.
            </li>
            <li>
              Implemented systems such as web procurement, fixed asset
              management, and employee portals to reduce manual processes and
              improve efficiency.
            </li>
            <li>
              Created user manuals and conducted training sessions to support
              adoption of new systems by staff and end-users.
            </li>
          </ul>
        </div>
      </section>
      {/* Feature section 1 */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl pt-20 md:text-4xl font-semibold'>
              Business Productivity Systems
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Built internal systems that streamlined processes and improved
              team productivity.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
            <div className='flex gap-6'>
              <img
                src={dashboard}
                alt='Operations apps'
                className='rounded-xl max-h-[520px] w-auto'
              />
            </div>
          </div>
        </div>
      </section>
      {/* Feature section 2 */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='flex gap-6 justify-center'>
            <img
              src={flow}
              alt='Integrations'
              className='rounded-xl max-h-[520px] w-auto'
            />
          </div>
          <div>
            <h2 className='text-2xl md:text-4xl font-semibold'>
              Survey & Reporting Systems
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Delivered tools to streamline workflows and improve data accuracy
              across teams.
            </p>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-12'>
        <h2 className='text-xl md:text-2xl font-semibold'>Gallery</h2>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {galleryImages.map((src, idx) => (
            <figure key={idx} className='group cursor-zoom-in'>
              <img
                src={src}
                alt={galleryCaptions[idx]}
                className='w-full h-48 md:h-64 object-cover rounded-lg border border-gray-200 shadow-sm group-hover:opacity-95'
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
