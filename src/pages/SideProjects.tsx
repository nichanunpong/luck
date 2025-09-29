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

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'></div>
    </section>
  );
}
