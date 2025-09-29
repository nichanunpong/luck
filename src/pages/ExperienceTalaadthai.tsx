import { Link } from 'react-router-dom';
import heroImg from '../assets/images/work/talaadthai/banner.png';
import appImg from '../assets/images/work/talaadthai/app.png';
import checkoutImg from '../assets/images/work/talaadthai/checkout-discount.png';
import cmsImg from '../assets/images/work/talaadthai/cms.png';
import logoImg from '../assets/images/work/talaadthai_online.png';
export default function ExperienceTalaadthai() {
  return (
    <div>
      {/* Hero banner */}
      <section className='relative h-64 md:h-[420px] overflow-hidden'>
        <img
          src={heroImg}
          alt='Talaadthai Online hero'
          className='absolute inset-0 h-full w-full object-cover object-[50%_20%]'
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 mx-auto max-w-6xl px-6 md:px-8 h-full flex items-end pb-8'>
          <div className='text-white'>
            <img
              src={logoImg}
              alt='Talaadthai Online logo'
              className='h-18 md:h-18 w-auto mb-6 rounded-xl'
            />
            <p className='text-xs uppercase tracking-wider opacity-80'>
              2023 – 2024
            </p>
            <h1 className='text-2xl md:text-4xl font-semibold mt-1'>
              Talaadthai Online
            </h1>
            <p className='mt-2 max-w-2xl text-sm md:text-base opacity-90'>
              I was the Product Owner leading the development of an e-commerce
              platform that improved the flow of the customer journey and
              enhanced retention.
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
              Led Agile/Scrum processes for Talaadthai Online, driving product
              discovery, delivery, and bi-weekly e-commerce releases aligned
              with business goals.
            </li>
            <li>
              Created wireframes and wrote product backlogs to guide engineering
              and design, ensuring features met customer and company needs.
            </li>
            <li>
              Partnered with UX/UI teams and tested systems before delivery to
              business teams, improving user experience, retention, and
              adoption.
            </li>
            <li>
              Managed third-party vendor relationships to reduce downtime and
              streamline order fulfillment.
            </li>
          </ul>
        </div>
      </section>

      {/* Feature case study section */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl pt-20 md:text-4xl font-semibold'>
              Home Page Redesign
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              We redesigned the home page to highlight discounts, popular
              products, and a Flash Sale module with countdown timers and
              quick-add, helping users find value faster.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
            <div className='flex gap-6'>
              <img src={appImg} alt='Old design' />
            </div>
          </div>
        </div>
      </section>

      {/* Trending events style section */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='flex gap-6 justify-center'>
            <img src={checkoutImg} alt='List view' />
          </div>
          <div>
            <h2 className='text-2xl md:text-4xl font-semibold'>
              Apply Discounts Easily
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Improve checkout by letting users browse promotions and select
              discounts like free shipping, percentage off, or special event
              offers, or enter a code manually.
            </p>
          </div>
        </div>
      </section>

      {/* CMS section */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-10 items-center'>
          {/* Text block */}
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl md:text-4xl font-semibold'>Admin Panel</h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              We built an admin panel that enables the marketing team to manage
              content (banners, flash sales, discount campaigns) and supports
              order management with integrations to delivery, pick-and-pack, and
              CRM systems.
            </p>
          </div>

          {/* Image block */}
          <div className='order-1 md:order-2 flex justify-center'>
            <img
              src={cmsImg}
              alt='CMS'
              className='rounded-xl shadow-md max-h-[520px] w-auto'
            />
          </div>
        </div>
        <div className='mt-10'>
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
