import { Link } from 'react-router-dom';
import heroImg from '../assets/images/work/foodpassion/banner.png';
import logoImg from '../assets/images/work/foodpassion.png';

export default function ExperienceFoodPassion() {
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
              Developed and maintained internal apps for operations and finance.
            </li>
            <li>
              Collaborated with stakeholders to clarify requirements and iterate
              quickly on features.
            </li>
            <li>
              Improved reliability and support processes for legacy systems.
            </li>
          </ul>
        </div>
      </section>

      {/* Feature section 1 */}
      {/* <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl pt-20 md:text-4xl font-semibold'>
              Operations Applications
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Delivered tools to streamline workflows and improve data accuracy
              across teams.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
            <div className='flex gap-6'>
              <img
                src={heroImg}
                alt='Operations apps'
                className='rounded-xl max-h-[520px] w-auto'
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Feature section 2
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='flex gap-6 justify-center'>
            <img
              src={heroImg}
              alt='Integrations'
              className='rounded-xl max-h-[520px] w-auto'
            />
          </div>
          <div>
            <h2 className='text-2xl md:text-4xl font-semibold'>Integrations</h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Built integrations with internal systems to reduce duplication and
              manual work.
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
