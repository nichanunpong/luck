import SectionTitle from '../common/SectionTitle';
import { Link } from 'react-router-dom';
import agile from '../../assets/images/blog/agile.jpg';
import backlog from '../../assets/images/blog/backlog.jpg';
import qa from '../../assets/images/blog/qa.jpg';

const posts = [
  {
    id: 1,
    title: 'Agile: More Than a Methodology, It’s a Mindset',
    image: agile,
    excerpt:
      'Agile as a mindset for faster delivery, learning, and customer focus.',
    to: '/blog/agile-methodology',
  },
  {
    id: 2,
    title: 'How to Create a Product Backlog',
    image: backlog,
    excerpt:
      'A practical, value-first approach to building and refining a backlog.',
    to: '/blog/create-backlog-po',
  },
  {
    id: 3,
    title: 'Why Quality Assurance Matters',
    image: qa,
    excerpt:
      'QA enables fast, reliable delivery by protecting quality and trust.',
    to: '/blog/why-qa-matters',
  },
];

export default function Blog() {
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
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
        {sortedPosts.map((post) => (
          <article
            key={post.id}
            className='rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm flex flex-col h-full'>
            <img
              src={post.image}
              alt={post.title}
              className='h-44 w-full object-cover'
            />
            <div className='p-4 space-y-2 flex flex-col flex-1'>
              <h3 className='font-medium'>{post.title}</h3>
              <p className='text-sm text-gray-600'>{post.excerpt}</p>
              {post.to ? (
                <Link
                  to={post.to}
                  className='btn-primary font-bold inline-flex items-center gap-2 rounded-md px-4 py-2 transition shadow-sm hover:shadow mt-auto self-start'>
                  Read more
                </Link>
              ) : (
                <span className='text-sm text-gray-500'>Coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
