import SectionTitle from '../common/SectionTitle';
import blog1 from '../../assets/images/blog/blog-1.jpg';
import blog2 from '../../assets/images/blog/blog-2.jpg';
import blog3 from '../../assets/images/blog/blog-3.jpg';

const posts = [
  {
    id: 1,
    title: 'Designing delightful microinteractions',
    image: blog1,
    excerpt: "Small details make big differences. Here's how I approach them.",
  },
  {
    id: 2,
    title: 'A practical guide to web performance',
    image: blog2,
    excerpt: 'From budgets to metrics — tips that work on real projects.',
  },
  {
    id: 3,
    title: 'Accessible UI patterns in React',
    image: blog3,
    excerpt: 'Common pitfalls and how to avoid them using modern tooling.',
  },
];

export default function Blog() {
  return (
    <section
      className='mx-auto max-w-6xl px-4 py-16'
      aria-labelledby='blog-title'>
      <SectionTitle
        id='blog-title'
        title='Latest from the blog'
        subtitle='Blog'
        align='center'
      />

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <article
            key={post.id}
            className='rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm'>
            <img
              src={post.image}
              alt={post.title}
              className='h-44 w-full object-cover'
            />
            <div className='p-4 space-y-2'>
              <h3 className='font-medium'>{post.title}</h3>
              <p className='text-sm text-gray-600'>{post.excerpt}</p>
              <a href='#' className='text-sm text-gray-900 underline'>
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
