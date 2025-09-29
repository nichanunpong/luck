import card1 from '../assets/images/portfolio-images/card-1.png';
import card2 from '../assets/images/portfolio-images/card-2.png';

export default function CaseStudies() {
  return (
    <section className='mx-auto max-w-6xl px-4 py-16'>
      <header className='space-y-2'>
        <p className='text-xs uppercase tracking-wider text-gray-500'>Work</p>
        <h1 className='text-3xl md:text-4xl font-bold'>Case Studies</h1>
        <p className='text-gray-600 max-w-2xl'>
          Deep dives into selected projects — goals, constraints, process, and
          outcomes.
        </p>
      </header>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <article className='rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm'>
          <img src={card1} className='h-56 w-full object-cover' />
          <div className='p-4 space-y-2'>
            <h3 className='font-medium'>E‑commerce redesign</h3>
            <p className='text-sm text-gray-600'>
              Increasing conversion while improving performance and
              accessibility.
            </p>
            <a href='#' className='text-sm text-gray-900 underline'>
              Read case
            </a>
          </div>
        </article>
        <article className='rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm'>
          <img src={card2} className='h-56 w-full object-cover' />
          <div className='p-4 space-y-2'>
            <h3 className='font-medium'>SaaS onboarding</h3>
            <p className='text-sm text-gray-600'>
              Reducing time-to-value with a guided experience and clear UX.
            </p>
            <a href='#' className='text-sm text-gray-900 underline'>
              Read case
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
