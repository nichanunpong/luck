import { Link } from 'react-router-dom';
import heroImg from '../assets/images/work/mfec/banner.jpg';
import logoImg from '../assets/images/work/mfec.png';
import aws from '../assets/images/work/mfec/aws.png';
import cloud from '../assets/images/work/mfec/cloud.jpg';
export default function ExperienceMFEC() {
  return (
    <div>
      {/* Hero banner */}
      <section className='relative h-64 md:h-[420px] overflow-hidden'>
        <img
          src={heroImg}
          alt='MFEC hero'
          className='absolute inset-0 h-full w-full object-cover object-center'
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 mx-auto max-w-6xl px-6 md:px-8 h-full flex items-end pb-8'>
          <div className='text-white'>
            <img
              src={logoImg}
              alt='MFEC logo'
              className='h-18 md:h-18 w-auto mb-6 rounded-xl'
            />
            <p className='text-xs uppercase tracking-wider opacity-80'>
              2017 – 2018
            </p>
            <h1 className='text-2xl md:text-4xl font-semibold mt-1'>
              MFEC Public Company Limited
            </h1>
            <p className='mt-2 max-w-2xl text-sm md:text-base opacity-90'>
              At MFEC, I was a Cloud Developer consulting on AWS solutions that
              streamlined project delivery.
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
              Consulted with clients and cross-functional teams to design,
              develop, and deploy solutions across on-premises and AWS cloud
              environments, improving project delivery efficiency.
            </li>
            <li>
              Built web applications using AWS serverless architecture (Lambda,
              S3, DynamoDB), reducing infrastructure costs.
            </li>
          </ul>
        </div>
      </section>

      {/* Feature section 1 */}
      <section className='mx-auto max-w-6xl px-6 md:px-8 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl pt-20 md:text-4xl font-semibold'>
              Cloud Migration
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Accelerated client migrations with repeatable patterns, reducing
              setup time and risks.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
            <div className='flex gap-6'>
              <img
                src={cloud}
                alt='Cloud toolkit'
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
              src={aws}
              alt='Dev tooling'
              className='rounded-xl max-h-[520px] w-auto border border-gray-300'
            />
          </div>
          <div>
            <h2 className='text-2xl md:text-4xl font-semibold'>
              AWS Certified Developer
            </h2>
            <p className='mt-4 text-gray-600 max-w-xl'>
              Earned the AWS Certified Developer – Associate credential,
              demonstrating expertise in building, deploying, and maintaining
              applications on AWS.
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
