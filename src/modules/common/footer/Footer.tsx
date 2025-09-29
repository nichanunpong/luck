import { FiLinkedin, FiGithub, FiMail, FiYoutube } from 'react-icons/fi';
import { AiFillMediumSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-black text-gray-300'>
      <div className='mx-auto max-w-6xl px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10'>
        <div>
          <h3 className='text-white text-xl font-semibold'>
            Nichanun Pong (Luck)
          </h3>
          <div className='mt-4 flex items-center gap-4 text-lg'>
            <a
              href='https://www.linkedin.com/in/nichanun-pong/'
              aria-label='LinkedIn'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'>
              <FiLinkedin />
            </a>
            <a
              href='https://github.com/nichanunpong'
              aria-label='GitHub'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'>
              <FiGithub />
            </a>
            <a
              href='https://lucknicha.medium.com/'
              aria-label='Medium'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'>
              <AiFillMediumSquare />
            </a>
            <a
              href='mailto:nichanun.luck@gmail.com'
              aria-label='Email'
              className='hover:text-white'>
              <FiMail />
            </a>
            <a
              href='https://www.youtube.com/@lucknicha'
              aria-label='YouTube'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'>
              <FiYoutube />
            </a>
          </div>
        </div>

        <div>
          <p className='text-white font-medium'>My Work</p>
          <ul className='mt-3 space-y-2'>
            <li>
              <Link
                to='/experience/talaadthai-online'
                className='hover:text-white underline underline-offset-4'>
                Talaadthai Online
              </Link>
            </li>
            <li>
              <Link
                to='/experience/viriyah'
                className='hover:text-white underline underline-offset-4'>
                Viriyah Insurance
              </Link>
            </li>
            <li>
              <Link
                to='/experience/shareinvestor'
                className='hover:text-white underline underline-offset-4'>
                ShareInvestor
              </Link>
            </li>
            <li>
              <Link
                to='/experience/garena'
                className='hover:text-white underline underline-offset-4'>
                Garena Online
              </Link>
            </li>
            <li>
              <Link
                to='/experience/mfec'
                className='hover:text-white underline underline-offset-4'>
                MFEC
              </Link>
            </li>
            <li>
              <Link
                to='/experience/food-passion'
                className='hover:text-white underline underline-offset-4'>
                Food Passion
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-white font-medium'>Projects</p>
          <ul className='mt-3 space-y-2'>
            <li>
              <a
                href='https://public.tableau.com/views/Assign1_Nichanun_Pon_300402500/Story?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white underline underline-offset-4'>
                Supper Store Dashboard
              </a>
            </li>
            <li>
              <a
                href='https://flashcard-frontend-beta.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white underline underline-offset-4'>
                Flashcard
              </a>
            </li>
            <li>
              <a
                href='https://nichanunpong.github.io/buildingpermits/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white underline underline-offset-4'>
                Building Permits
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className='text-white font-medium'>Contact</p>
          <ul className='mt-3 space-y-2'>
            <li>
              <a
                href='mailto:nichanun.luck@gmail.com'
                className='hover:text-white underline underline-offset-4'>
                Email
              </a>
            </li>
            {/* <li>
              <a
                href='/Nichanun_Luck.pdf'
                target='_blank'
                className='hover:text-white underline underline-offset-4'>
                Resume
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className='border-t border-white/10'>
        <div className='mx-auto max-w-6xl px-4 py-6 text-sm text-gray-400 flex items-center justify-between'>
          <p>© {new Date().getFullYear()} Luck. All rights reserved.</p>
          <a href='mailto:nichanun.luck@gmail.com' className='hover:text-white'>
            nichanun.luck@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
