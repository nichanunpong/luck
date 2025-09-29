import { Link } from 'react-router-dom';
import heroImg from '../assets/images/work/viriyah/banner.jpg';
import logoImg from '../assets/images/work/viriyah.png';
import plan from '../assets/images/work/viriyah/plan.png';

export default function ExperienceViriyah() {
  return (
    <div>
      {/* Hero banner */}
      <section className='relative h-64 md:h-[420px] overflow-hidden'>
        <img
          src={heroImg}
          alt='Viriyah Insurance hero'
          className='absolute inset-0 h-full w-full object-cover object-center filter brightness-75'
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 mx-auto max-w-6xl px-6 md:px-8 h-full flex items-end pb-8'>
          <div className='text-white'>
            <img
              src={logoImg}
              alt='Viriyah Insurance logo'
              className='h-18 md:h-18 w-auto mb-6 rounded-xl '
            />
            <p className='text-xs uppercase tracking-wider opacity-80'>
              2021 – 2023
            </p>
            <h1 className='text-2xl md:text-4xl font-semibold mt-1'>
              The Viriyah Insurance
            </h1>
            <p className='mt-2 max-w-2xl text-sm md:text-base opacity-90'>
              As a Project Manager, I led cross-functional initiatives across
              insurance products and digital services to deliver user-centric
              outcomes on schedule.
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
              Managed end-to-end delivery of IT projects, including car
              insurance initiatives,ensuring on-time and on-budget execution.
            </li>
            <li>
              Oversaw project budgets, including forecasting, expense reporting,
              risk management, and status reporting.
            </li>
            <li>
              Coordinated with stakeholders to align deliverables with insurance
              compliance and business requirements.
            </li>
            <li>
              Negotiated pricing, timelines, and services with external vendors,
              achieving cost savings.
            </li>
            <li>
              Directed and supported internal staff and contractors throughout
              the project lifecycle.
            </li>
          </ul>
        </div>
      </section>

      {/* Feature section 1 */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl pt-20 md:text-4xl font-semibold'>
              Digital Claims
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Streamlined the claims process by clarifying steps, reducing
              back-and-forth with customers and merchants, and improving
              transparency on claim status and required documentation.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
            <div className='flex gap-6'>
              <img
                src={plan}
                alt='Digital claims'
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
              alt='Agent portal'
              className='rounded-xl max-h-[520px] w-auto'
            />
          </div>
          <div>
            <h2 className='text-2xl md:text-4xl font-semibold'>
              Agent & Policy Management
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Enhanced agent workflows and policy management tools to reduce
              manual work, improve data accuracy, and accelerate quotation to
              issuance.
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
