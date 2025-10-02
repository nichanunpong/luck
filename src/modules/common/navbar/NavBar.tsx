import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100'>
      <div className='mx-auto max-w-6xl px-4 py-4 flex items-center justify-between'>
        <Link to='/' className='flex items-center gap-3'>
          {/* <img src='/logo.svg' alt='Luck' className='h-8 w-8' /> */}
          <span className='font-semibold text-base sm:text-2xl'>
            Nichanun Pong (Luck)
          </span>
        </Link>
        <nav className='hidden md:flex items-center gap-6 text-sm text-gray-600'>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              isActive ? 'text-gray-900 font-medium' : 'hover:text-gray-900'
            }>
            Home
          </NavLink>

          <NavLink
            to='/blog'
            className={({ isActive }) =>
              isActive ? 'text-gray-900 font-medium' : 'hover:text-gray-900'
            }>
            Blog
          </NavLink>

          {/* My Work dropdown */}
          <div className='relative group'>
            <button className='hover:text-gray-900'>My Work</button>
            <div className='absolute left-0 top-full w-56 rounded-md bg-white border border-gray-100 shadow-lg invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition'>
              <ul className='py-2 text-gray-700'>
                <li>
                  <Link
                    to='/experience/talaadthai-online'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Talaadthai Online
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/viriyah'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Viriyah Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/shareinvestor'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    ShareInvestor
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/garena'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Garena Online
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/mfec'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    MFEC
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/food-passion'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Food Passion
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Projects dropdown */}
          <div className='relative group'>
            <button className='hover:text-gray-900'>Projects</button>
            <div className='absolute left-0 top-full w-56 rounded-md bg-white border border-gray-100 shadow-lg invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition'>
              <ul className='py-2 text-gray-700'>
                <li>
                  <a
                    href='https://public.tableau.com/views/Assign1_Nichanun_Pon_300402500/Story?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Supper Store Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='https://flashcard-frontend-beta.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Flashcard
                  </a>
                </li>
                <li>
                  <a
                    href='https://nichanunpong.github.io/buildingpermits/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Building Permits
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact dropdown */}
          <div className='relative group'>
            <button className='hover:text-gray-900'>Contact</button>
            <div className='absolute left-0 top-full w-56 rounded-md bg-white border border-gray-100 shadow-lg invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition'>
              <ul className='py-2 text-gray-700'>
                <li>
                  <a
                    href='mailto:nichanun.luck@gmail.com'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Email
                  </a>
                </li>
                {/* <li>
                  <a
                    href='/Nichanun_Luck.pdf'
                    target='_blank'
                    className='block px-4 py-2 hover:bg-gray-50'>
                    Resume
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <button
          className='md:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-50'
          onClick={() => setOpen((v) => !v)}
          aria-label='Toggle menu'
          aria-expanded={open}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open ? (
        <div className='md:hidden border-t border-gray-100 bg-white/95 backdrop-blur'>
          <div className='mx-auto max-w-6xl px-4 py-3 flex flex-col gap-4 text-gray-700'>
            <NavLink
              to='/'
              end
              onClick={close}
              className={({ isActive }) =>
                isActive ? 'text-gray-900 font-medium' : 'hover:text-gray-900'
              }>
              Home
            </NavLink>

            <NavLink
              to='/blog'
              onClick={close}
              className={({ isActive }) =>
                isActive ? 'text-gray-900 font-medium' : 'hover:text-gray-900'
              }>
              Blog
            </NavLink>

            {/* My Work (mobile) */}
            <div>
              <p className='text-gray-900 font-medium'>My Work</p>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>
                  <Link
                    to='/experience/talaadthai-online'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Talaadthai Online
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/viriyah'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Viriyah Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/shareinvestor'
                    onClick={close}
                    className='hover:text-gray-900'>
                    ShareInvestor
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/garena'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Garena Online
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/mfec'
                    onClick={close}
                    className='hover:text-gray-900'>
                    MFEC
                  </Link>
                </li>
                <li>
                  <Link
                    to='/experience/food-passion'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Food Passion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Projects (mobile) */}
            <div>
              <p className='text-gray-900 font-medium'>Projects</p>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>
                  <a
                    href='https://public.tableau.com/views/Assign1_Nichanun_Pon_300402500/Story?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Supper Store Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='https://flashcard-frontend-beta.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Flashcard
                  </a>
                </li>
                <li>
                  <a
                    href='https://nichanunpong.github.io/buildingpermits/'
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Building Permits
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact (mobile) */}
            <div>
              <p className='text-gray-900 font-medium'>Contact</p>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>
                  <a
                    href='mailto:nichanun.luck@gmail.com'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href='/Nichanun_Luck.pdf'
                    target='_blank'
                    onClick={close}
                    className='hover:text-gray-900'>
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
