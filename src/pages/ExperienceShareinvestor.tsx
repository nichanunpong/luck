import { Link } from 'react-router-dom';
import heroImg from '../assets/images/work/shareinvestor/banner.jpg';
import logoImg from '../assets/images/work/shareinvestor.png';
import web from '../assets/images/work/shareinvestor/web.png';

export default function ExperienceShareinvestor() {
  return (
    <div>
      {/* Hero banner */}
      <section className='relative h-64 md:h-[420px] overflow-hidden'>
        <img
          src={heroImg}
          alt='Shareinvestor hero'
          className='absolute inset-0 h-full w-full object-cover object-center filter brightness-50'
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 mx-auto max-w-6xl px-6 md:px-8 h-full flex items-end pb-8'>
          <div className='text-white'>
            <img
              src={logoImg}
              alt='Shareinvestor logo'
              className='h-18 md:h-18 w-auto mb-6 rounded-xl'
            />
            <p className='text-xs uppercase tracking-wider opacity-80'>
              2019 – 2021
            </p>
            <h1 className='text-2xl md:text-4xl font-semibold mt-1'>
              Shareinvestor (Thailand)
            </h1>
            <p className='mt-2 max-w-2xl text-sm md:text-base opacity-90'>
              At ShareInvestor, I was the Project Manager driving Agile/Scrum
              projects that streamlined processes and delivered quality results.
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
              Created and executed project plans, ensuring deliverables
              consistently met standards and deadlines while supporting investor
              relations initiatives.
            </li>
            <li>
              Led sprint planning, daily scrums, reviews, and retrospectives,
              coaching teams to improve collaboration and achieve goals.
            </li>
            <li>
              Partnered with stakeholders on investor relations initiatives to
              improve communication and alignment on project outcomes.
            </li>
          </ul>
        </div>
      </section>

      {/* Feature section 1 */}
      {/* <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl pt-20 md:text-4xl font-semibold'>
              Market Data Platform
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Improved data freshness, error handling, and user messaging to
              build trust with investors and reduce support tickets.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
            <div className='flex gap-6'>
              <img
                src={web}
                alt='Market data'
                className='rounded-xl max-h-[520px] w-auto'
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Feature section 2 */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='flex gap-6 justify-center'>
            <img
              src={web}
              alt='Trading tools'
              className='rounded-xl max-h-[520px] w-auto'
            />
          </div>
          <div>
            <h2 className='text-2xl md:text-4xl font-semibold'>
              Investor Relations Website
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Delivered a high-quality investor relations website that provides
              customers with an accessible platform to showcase company
              information, updates, and financial reports to investors,
              enhancing transparency and stakeholder engagement.
            </p>
          </div>
        </div>
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
