// import Testimonials from '../modules/testimonial/Testimonials';
// import Blog from '../modules/blog/Blog';
// import ContactForm from '../modules/contact/ContactForm';
// import WorkTogether from '../modules/workTogether/WorkTogether';
import heroImg from '../assets/nichanun.jpg';
import card1 from '../assets/images/work/talaadthai_online.jpg';
import card2 from '../assets/images/work/viriyah.jpg';
import card3 from '../assets/images/work/shareinvestor.jpg';
import card4 from '../assets/images/work/garena.png';
import card5 from '../assets/images/work/mfec.jpg';
import card6 from '../assets/images/work/foodpassion.jpg';
import flashcard from '../assets/images/side-projects/flashcard.jpg';
import building from '../assets/images/projects/building.jpg';
import aboutImg from '../assets/nichanun2.jpg';
import volunteerFrontend from '../assets/images/volunteer/frontend.jpg';
import tableau from '../assets/images/projects/tableau.jpg';
import { FiArrowRight } from 'react-icons/fi';

import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import Reveal from '../modules/common/Reveal';
import { AiFillMediumSquare } from 'react-icons/ai';
import SectionTitle from '../modules/common/SectionTitle';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <section id='hero'>
        <Reveal durationMs={900} blurPx={2}>
          <div className='mx-auto max-w-6xl px-8 md:px-10 pt-10 lg:pt-32 pb-16 grid lg:grid-cols-2 gap-10 items-center'>
            <div className='order-2 lg:order-2 -mt-2 md:-mt-4 lg:-mt-38'>
              <p className='text-2xl sm:text-2xl xl:text-3xl font-semibold'>
                👋 I’m Luck , a Product Owner and Project Manager with a tech
                background, driven by design, user experience, and impact
              </p>
              <p className='text-sm sm:text-base lg:text-[18px] my-6'>
                Experience across
                <span className='bg-highlight'>
                  e-commerce, gaming, insurance, and IT
                </span>
                , I specialize in
                <span className='bg-highlight'>Agile leadership</span>,
                data-driven decision making, and stakeholder management to
                deliver products that achieve measurable business results
              </p>
              <div className='mt-6 flex flex-wrap items-center gap-4'>
                <div className='flex items-center gap-3'>
                  <a
                    href='https://www.linkedin.com/in/nichanun-pong/'
                    aria-label='LinkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-md border border-gray-200 hover:bg-gray-50'>
                    <FiLinkedin />
                  </a>
                  <a
                    href='https://github.com/nichanunpong'
                    aria-label='GitHub'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-md border border-gray-200 hover:bg-gray-50'>
                    <FiGithub />
                  </a>
                  <a
                    href='https://lucknicha.medium.com/'
                    aria-label='Medium'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-md border border-gray-200 hover:bg-gray-50'>
                    <AiFillMediumSquare />
                  </a>
                  <a
                    href='mailto:nichanun.luck@gmail.com?subject=Hello%20Luck&body=Hi%20Luck,%20I%27d%20love%20to%20discuss%20a%20project.'
                    aria-label='Email'
                    className='p-2 rounded-md border border-gray-200 hover:bg-gray-50'
                    title='Email: nichanun.luck@gmail.com'>
                    <FiMail />
                  </a>
                  <a
                    href='tel:+16726991228'
                    aria-label='Phone'
                    className='p-2 rounded-md border border-gray-200 hover:bg-gray-50'>
                    <FiPhone />
                  </a>
                </div>
              </div>
            </div>
            <div className='order-1 lg:order-1 w-full max-w-[420px] sm:max-w-[536px] mx-auto lg:mx-0 px-8 sm:px-0'>
              <img
                src={heroImg}
                alt='Portrait'
                className='shadow-lg sm:shadow-2xl shadow-gray-200 w-full h-auto object-cover bg-white rounded-2xl sm:rounded-3xl border border-gray-200'
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Skills (compact) */}
      <section id='skills' className='bg-neutral-300'>
        <Reveal durationMs={900} blurPx={2}>
          <div className='mx-auto max-w-6xl px-8 md:px-10 py-12'>
            <SectionTitle title='Skills' align='left' />
            <div className='mt-6 grid md:grid-cols-1 lg:grid-cols-3 gap-4'>
              <div className='rounded-lg bg-white p-4 lg:col-span-3 space-y-1'>
                <p>
                  <span className='font-semibold text-gray-900'>
                    Agile &amp; Product Management:
                  </span>
                  <span className='text-sm text-gray-700'>
                    {' '}
                    Product Backlog Management, User Stories &amp; Acceptance
                    Criteria, Roadmap Planning, Sprint Leadership
                    (Scrum/Kanban), Software Development Life Cycle (SDLC),
                    Waterfall
                  </span>
                </p>

                <p>
                  <span className='font-semibold text-gray-900'>
                    QA & Testing:
                  </span>
                  <span className='text-sm text-gray-700'>
                    {' '}
                    Manual Testing, Regression Testing, Functional Testing,
                    Black-box & White-box Testing, Bug Reporting, Acceptance
                    Criteria, Test Case Design
                  </span>
                </p>
                <p>
                  <span className='font-semibold text-gray-900'>
                    Project Management Tools:
                  </span>
                  <span className='text-sm text-gray-700'>
                    {' '}
                    Jira, Confluence, Microsoft Project, Smartsheet, Asana,
                    Trello
                  </span>
                </p>
                <p>
                  <span className='font-semibold text-gray-900'>
                    Analytics &amp; Data:
                  </span>{' '}
                  <span className='text-sm text-gray-700'>
                    SQL, Google Analytics, Tableau/Power BI, A/B Testing,
                    AppsFlyer, KPI Tracking, Machine Learning
                  </span>
                </p>

                <p>
                  <span className='font-semibold text-gray-900'>
                    Design &amp; Prototyping:
                  </span>{' '}
                  <span className='text-sm text-gray-700'>
                    Figma, Miro, Wireframing, User Journey Mapping
                  </span>
                </p>

                <p>
                  <span className='font-semibold text-gray-900'>
                    Technical Skills:
                  </span>{' '}
                  <span className='text-sm text-gray-700'>
                    JavaScript (React, Node.js), Python, SQL, PHP (Laravel), C#;
                    MySQL, PostgreSQL, MongoDB; AWS, Docker, REST APIs; GitHub,
                    Postman
                  </span>
                </p>

                <p>
                  <span className='font-semibold text-gray-900'>
                    Soft Skills:
                  </span>{' '}
                  <span className='text-sm text-gray-700'>
                    Leadership, Communication, Stakeholder Management,
                    Prioritization, Problem-Solving
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* About Me */}
      <section id='about' className='bg-neutral-50'>
        <Reveal durationMs={900} blurPx={2}>
          <div className='mx-auto max-w-6xl px-8 md:px-10 grid md:grid-cols-2 gap-10 items-start'>
            <div>
              <h2 className='text-4xl md:text-6xl pt-16 font-semibold tracking-tight'>
                About me
              </h2>
              <div className='mt-6 space-y-4 text-gray-700 leading-relaxed'>
                <p>
                  Hi, I’m
                  <span className='font-semibold'>
                    {' '}
                    Luck (Nichanun Pong)
                  </span> —{' '}
                  <span className='bg-highlight'>
                    a Product Owner and Project Manager
                  </span>
                  with 5+ years of experience, plus 5+ years as a
                  <span className='bg-highlight'>Software Developer</span> in
                  e-commerce, insurance, gaming, and IT services, working with
                  cross-functional teams to turn complex ideas into scalable,
                  user-centric solutions.
                </p>
                <p>
                  I specialize in
                  <span className='bg-highlight'>Agile leadership</span>,
                  data-driven decision making, and stakeholder management, with
                  a track record of boosting user retention. My foundation in
                  software development (React, Node.js, PHP, SQL, AWS, Docker)
                  allows me to bridge business goals with engineering execution,
                  ensuring both strategic vision and technical feasibility.
                </p>
                <p>
                  Beyond work, I’ve volunteered as a Full-Stack Developer at AI
                  Summit Vancouver, building event features and check-in systems
                  for 500+ participants. I’m{' '}
                  <span className='bg-highlight'>
                    passionate about creating products
                  </span>
                  that truly impact people’s lives.
                  {/* while continuing to grow into a Product Manager role. */}
                </p>
              </div>
            </div>

            <div className='flex justify-center md:justify-end'>
              <img
                src={aboutImg}
                alt='About illustration'
                className='max-w-full h-auto'
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Canadian Experience */}
      <section id='canadian-experience' className='bg-neutral-100'>
        <Reveal durationMs={900} blurPx={2}>
          <div className='mx-auto max-w-6xl px-8 md:px-10 py-10'>
            <SectionTitle title='Canadian Experience' align='left' />
            <div className='mt-6 grid md:grid-cols-2 gap-6 items-center'>
              <img
                src={volunteerFrontend}
                alt='AI Summit Vancouver frontend'
                loading='lazy'
              />
              {/* Text (right) */}
              <div className='pl-4'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-base text-xl font-semibold text-gray-900'>
                    AI Summit Vancouver | Full Stack Developer (Volunteer)
                  </h3>
                </div>
                <p className='mt-2 text-xs '>Jun 2025 – Present</p>
                <p className='mt-3 text-gray-700'>
                  I developed event website features, including a QR code
                  check-in system for 500+ participants. I collaborated with
                  cross-functional teams to deliver under tight deadlines while
                  contributing 10+ hours weekly using AI tools to support
                  community engagement and event operations.
                </p>
                <div className='mt-4'>
                  <a
                    href='https://vanaisummit.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-primary font-bold group inline-flex items-center gap-2 rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow'>
                    <span>View Website</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* My Work */}
      <section id='my-work' className='bg-neutral-900 text-gray-300'>
        <Reveal durationMs={900} blurPx={2}>
          <div className='mx-auto max-w-6xl px-8 md:px-10 py-16'>
            <h2 className='text-3xl md:text-5xl font-semibold text-white'>
              My Work
            </h2>

            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
              <div className='bg-neutral-800 p-3 border border-gray-700 shadow-sm transition-colors duration-200 hover:bg-neutral-900 hover:border-gray-500 hover:shadow-md flex flex-col h-full'>
                <h3 className='text-xl text-white mb-4'>Talaadthai Online</h3>
                <img
                  src={card1}
                  alt='Talaadthai Online'
                  loading='lazy'
                  className='w-full h-44 object-cover rounded-md bg-white'
                />
                <p className='mt-2 text-xs text-gray-400'>2023 – 2024</p>
                <p className='mt-4 text-sm text-gray-300'>
                  At Talaadthai Online, I was the Product Owner leading the
                  development of an e-commerce platform that improved the flow
                  of the customer journey.
                </p>
                <div className='mt-auto pt-5'>
                  <Link
                    to='/experience/talaadthai-online'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View Projects</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </div>

              <div className='bg-neutral-800 p-3 border border-gray-700 shadow-sm transition-colors duration-200 hover:bg-neutral-900 hover:border-gray-500 hover:shadow-md flex flex-col h-full'>
                <h3 className='text-xl text-white mb-4'>Viriyah Insurance</h3>
                <img
                  src={card2}
                  alt='Viriyah Insurance'
                  loading='lazy'
                  className='w-full h-44 object-cover rounded-md bg-white'
                />
                <p className='mt-2 text-xs text-gray-400'>2021 – 2023</p>
                <p className='mt-4 text-sm text-gray-300'>
                  At Viriyah Insurance, I was the Project Manager leading
                  technology projects that improved operations and delivery
                  across departments.
                </p>
                <div className='mt-auto pt-5'>
                  <Link
                    to='/experience/viriyah'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View Projects</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </div>

              <div className='bg-neutral-800 p-3 border border-gray-700 shadow-sm transition-colors duration-200 hover:bg-neutral-900 hover:border-gray-500 hover:shadow-md flex flex-col h-full'>
                <h3 className='text-xl text-white mb-4'>ShareInvestor</h3>
                <img
                  src={card3}
                  alt='ShareInvestor'
                  loading='lazy'
                  className='w-full h-44 object-cover rounded-md bg-white'
                />
                <p className='mt-2 text-xs text-gray-400'>2019 – 2021</p>
                <p className='mt-4 text-sm text-gray-300'>
                  At ShareInvestor, I was the Project Manager driving
                  Agile/Scrum projects that streamlined processes and delivered
                  quality results.
                </p>
                <div className='mt-auto pt-5'>
                  <Link
                    to='/experience/shareinvestor'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View Projects</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </div>

              <div className='bg-neutral-800 p-3 border border-gray-700 shadow-sm transition-colors duration-200 hover:bg-neutral-900 hover:border-gray-500 hover:shadow-md flex flex-col h-full'>
                <h3 className='text-xl text-white mb-4'>Garena Online</h3>
                <img
                  src={card4}
                  alt='Garena Online'
                  loading='lazy'
                  className='w-full h-44 object-cover rounded-md bg-white'
                />
                <p className='mt-2 text-xs text-gray-400'>2018 – 2019</p>
                <p className='mt-4 text-sm text-gray-300'>
                  At Garena Online, I was a Full-Stack Developer building
                  platforms that supported large-scale competitions and improved
                  user satisfaction.
                </p>
                <div className='mt-auto pt-5'>
                  <Link
                    to='/experience/garena'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View Projects</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </div>

              <div className='bg-neutral-800 p-3 border border-gray-700 shadow-sm transition-colors duration-200 hover:bg-neutral-900 hover:border-gray-500 hover:shadow-md flex flex-col h-full'>
                <h3 className='text-xl text-white mb-4'>MFEC</h3>
                <img
                  src={card5}
                  alt='MFEC'
                  loading='lazy'
                  className='w-full h-44 object-cover rounded-md bg-white'
                />
                <p className='mt-2 text-xs text-gray-400'>2017 – 2018</p>
                <p className='mt-4 text-sm text-gray-300'>
                  At MFEC, I was a Cloud Developer consulting on AWS solutions
                  that streamlined project delivery.
                </p>
                <div className='mt-auto pt-5'>
                  <Link
                    to='/experience/mfec'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View Projects</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </div>

              <div className='bg-neutral-800 p-3 border border-gray-700 shadow-sm transition-colors duration-200 hover:bg-neutral-900 hover:border-gray-500 hover:shadow-md flex flex-col h-full'>
                <h3 className='text-xl text-white mb-4'>Food Passion</h3>
                <img
                  src={card6}
                  alt='Food Passion'
                  loading='lazy'
                  className='w-full h-44 object-cover rounded-md bg-white'
                />
                <p className='mt-2 text-xs text-gray-400'>2013 – 2017</p>
                <p className='mt-4 text-sm text-gray-300'>
                  At Food Passion, I was an Assistant Supervisor Software
                  Developer developing web systems that reduced manual processes
                  and improved efficiency.
                </p>
                <div className='mt-auto pt-5'>
                  <Link
                    to='/experience/food-passion'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View Projects</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id='projects' className='bg-neutral-100'>
        <Reveal durationMs={900} blurPx={2}>
          <div className='mx-auto max-w-6xl px-8 md:px-10 py-16'>
            <h2 className='text-3xl md:text-5xl font-semibold'>Projects</h2>
            <div className='mt-10 grid md:grid-cols-3 gap-10 items-start'>
              <div>
                <h3 className='text-2xl md:text-2xl font-semibold'>
                  Supper Store Dashboard
                </h3>
                <div className='mt-6 rounded-2xl overflow-hidden shadow-lg bg-black'>
                  <img
                    src={tableau}
                    alt='Supper Store Dashboard (Tableau)'
                    className='w-full h-64 object-cover'
                  />
                </div>
                <p className='mt-2 text-xs uppercase tracking-wide text-gray-500'>
                  [tableau]
                </p>
                <p className='mt-2 text-gray-700'>
                  The Support Store dashboard visualizes the annual sales
                  report, helping the owner understand their customers and
                  increase sales.
                </p>
                <div className='mt-4'>
                  <a
                    href='https://public.tableau.com/views/Assign1_Nichanun_Pon_300402500/Story?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-2xl md:text-2xl font-semibold'>
                  Flashcard
                </h3>
                <div className='mt-6 rounded-2xl overflow-hidden shadow-lg bg-black'>
                  <img
                    src={flashcard}
                    alt='Flashcard App'
                    className='w-full h-64 object-cover'
                  />
                </div>
                <p className='mt-2 text-xs uppercase tracking-wide text-gray-500'>
                  [react, typescript]
                </p>
                <p className='mt-2 text-gray-700'>
                  A fast and lightweight flashcard web app with spaced
                  repetition. Create your own cards, play interactive games, and
                  tap to hear audio pronunciations.
                </p>
                <div className='mt-4'>
                  <a
                    href='https://flashcard-frontend-beta.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-2xl md:text-2xl font-semibold'>
                  Building Permits
                </h3>
                <div className='mt-6 rounded-2xl overflow-hidden shadow-lg bg-black'>
                  <img
                    src={building}
                    alt='Building Permits Visualization'
                    className='w-full h-64 object-cover'
                  />
                </div>
                <p className='mt-2 text-xs uppercase tracking-wide text-gray-500'>
                  [javascript, d3.js]
                </p>
                <p className='mt-2 text-gray-700'>
                  An interactive dashboard visualizing building permits issued
                  by the City of Vancouver. Explore annual permit trends, and
                  project values through dynamic charts and filters.
                </p>
                <div className='mt-4'>
                  <a
                    href='https://nichanunpong.github.io/buildingpermits/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-primary font-bold group inline-flex items-center justify-center w-full rounded-md text-black px-4 py-2 hover:bg-gray-100 transition shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 gap-2'>
                    <span>View</span>
                    <FiArrowRight
                      size={16}
                      aria-hidden='true'
                      className='transition-transform group-hover:translate-x-1'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      {/* <section id='portfolio' className='intro-hero-bg'>
        <div className='mx-auto max-w-6xl px-2 md:px-4 py-16'>
          <h2 className='text-2xl md:text-3xl font-semibold'>
            Selected Projects
          </h2>
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <img src={card1} className='rounded-lg shadow' />
            <img src={card2} className='rounded-lg shadow' />
            <img src={card3} className='rounded-lg shadow' />
          </div>
          <div className='mt-10 flex justify-center'>
            <a
              href='#portfolio'
              className='inline-flex items-center rounded-md bg-violet-600 px-6 py-3 text-white shadow hover:bg-violet-500'>
              More Project
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <Blog />
      <WorkTogether /> */}
    </div>
  );
}
