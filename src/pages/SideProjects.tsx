import card1 from '../assets/images/portfolio-images/card-1.png';
import card2 from '../assets/images/portfolio-images/card-2.png';
import card3 from '../assets/images/portfolio-images/card-3.png';
import card4 from '../assets/images/portfolio-images/card-4.png';
import card5 from '../assets/images/portfolio-images/card-5.png';
import card6 from '../assets/images/portfolio-images/card-6.png';

export default function SideProjects() {
  return (
    <section className='mx-auto max-w-6xl px-4 py-16'>
      <header className='space-y-2'>
        <p className='text-xs uppercase tracking-wider text-gray-500'>Work</p>
        <h1 className='text-3xl md:text-4xl font-bold'>Side Projects</h1>
        <p className='text-gray-600 max-w-2xl'>
          A collection of small experiments and weekend builds exploring new
          ideas and technologies.
        </p>
      </header>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <img src={card1} className='rounded-lg shadow' />
        <img src={card2} className='rounded-lg shadow' />
        <img src={card3} className='rounded-lg shadow' />
        <img src={card4} className='rounded-lg shadow' />
        <img src={card5} className='rounded-lg shadow' />
        <img src={card6} className='rounded-lg shadow' />
      </div>
    </section>
  );
}
