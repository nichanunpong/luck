import SectionTitle from '../common/SectionTitle';
import person1 from '../../assets/images/person.png';
import person2 from '../../assets/images/person2.png';
import person3 from '../../assets/images/person3.png';

const testimonials = [
  {
    name: 'Jane Cooper',
    role: 'Product Manager',
    avatar: person1,
    quote:
      'Working with Luck was seamless. The attention to detail and speed were exceptional.',
  },
  {
    name: 'Jacob Jones',
    role: 'Founder, Studio',
    avatar: person2,
    quote:
      'Our site feels faster and looks better than ever. Highly recommend!',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Marketing Lead',
    avatar: person3,
    quote:
      'Reliable, creative, and communicative. A great partner for our team.',
  },
];

export default function Testimonials() {
  return (
    <section
      className='mx-auto max-w-6xl px-4 py-16'
      aria-labelledby='testimonials-title'>
      <SectionTitle
        id='testimonials-title'
        title='Happy Clients'
        subtitle='Testimonials'
        align='center'
      />

      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className='rounded-xl border border-gray-100 p-6 bg-white shadow-sm'>
            <div className='flex items-center gap-4'>
              <img
                src={t.avatar}
                alt={t.name}
                className='h-12 w-12 rounded-full object-cover'
              />
              <figcaption>
                <p className='font-medium'>{t.name}</p>
                <p className='text-sm text-gray-500'>{t.role}</p>
              </figcaption>
            </div>
            <blockquote className='mt-4 text-gray-600'>“{t.quote}”</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
