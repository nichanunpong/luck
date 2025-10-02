import { Link } from 'react-router-dom';
import agile from '../assets/images/blog/agile.jpg';

export default function BlogAgileMethodology() {
  return (
    <article className='mx-auto max-w-3xl px-4 py-12 prose prose-gray article-content'>
      <nav className='mb-6 text-sm'>
        <Link to='/blog' className='text-gray-700 hover:text-gray-900'>
          ← Back to Blog
        </Link>
      </nav>

      <header>
        <h1>Agile: More Than a Methodology, It’s a Mindset</h1>
        <p className='text-gray-600'>
          In today’s fast-moving world, where technology evolves rapidly and
          customer expectations shift overnight, traditional project management
          methods often fall short. Enter
          <span className='font-bold text-black'> Agile</span> — not just a
          methodology, but a mindset that has transformed how teams build
          products, deliver value, and adapt to change.
        </p>
      </header>

      <img src={agile} alt='Agile collaboration' />

      <section>
        <h2>What Is Agile?</h2>
        <p>
          At its core, Agile is about
          <span className='font-bold text-black'>
            {' '}
            flexibility, collaboration, and continuous improvement
          </span>
          . Instead of locking teams into rigid, long-term plans, Agile
          emphasizes short, iterative cycles of work—often called
          <em>sprints</em>. Each cycle delivers something valuable, allowing
          teams to gather feedback, learn, and adjust quickly.
        </p>
        <p>
          The Agile Manifesto, written in 2001, outlines its guiding principles.
          It values:
        </p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>
              Individuals and interactions
            </span>
            over processes and tools
          </li>
          <li>
            <span className='font-bold text-black'>Working software</span> over
            comprehensive documentation
          </li>
          <li>
            <span className='font-bold text-black'>Customer collaboration</span>{' '}
            over contract negotiation
          </li>
          <li>
            <span className='font-bold text-black'>Responding to change</span>{' '}
            over following a plan
          </li>
        </ul>
      </section>

      <section>
        <h2>Why Agile Works</h2>
        <p>
          Agile isn’t just popular because it’s trendy; it works because it
          mirrors the real world. Business needs shift, users discover new
          problems, and technology unlocks new possibilities. Agile helps teams:
        </p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>Stay customer‑focused</span>{' '}
            – Feedback loops ensure products meet real user needs.
          </li>
          <li>
            <span className='font-bold text-black'>Deliver faster</span> –
            Small, incremental releases get value into users’ hands quickly.
          </li>
          <li>
            <span className='font-bold text-black'>Reduce risk</span> – Problems
            surface early, when they’re easier (and cheaper) to fix.
          </li>
          <li>
            <span className='font-bold text-black'>Empower teams</span> –
            Developers, designers, and product owners collaborate closely,
            fostering ownership and creativity.
          </li>
        </ul>
      </section>

      <section>
        <h2>Agile in Practice</h2>
        <p>
          Different frameworks bring Agile principles to life. The most common
          include:
        </p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>Scrum</span> – Organizes work
            into fixed-length sprints with clearly defined roles (Product Owner,
            Scrum Master, Development Team).
          </li>
          <li>
            <span className='font-bold text-black'>Kanban</span> – Visualizes
            workflow on a board, limiting work-in-progress to maximize
            efficiency.
          </li>
          <li>
            <span className='font-bold text-black'>Lean</span> – Focuses on
            eliminating waste and continuously improving.
          </li>
        </ul>
        <p>
          Most organizations adapt these frameworks to their unique
          context—Agile isn’t one-size-fits-all.
        </p>
      </section>

      <section>
        <h2>Agile Beyond Software</h2>
        <p>
          While Agile originated in software development, it has since expanded
          across industries. Marketing teams use Agile to launch campaigns
          faster. Operations teams use it to streamline workflows. Even HR
          departments adopt Agile to improve hiring and onboarding processes.
        </p>
        <p>
          The reason is simple:
          <span className='font-bold text-black'>
            Agile is about adaptability
          </span>
          . Any team facing uncertainty and rapid change can benefit from it.
        </p>
      </section>

      <section>
        <h2>Final Thoughts</h2>
        <p>
          Agile is not about stand‑up meetings, sticky notes, or trendy
          buzzwords—it’s about
          <span className='font-bold text-black'>
            delivering value continuously while embracing change
          </span>
          . Whether you’re building an app, designing a campaign, or launching a
          business initiative, Agile gives you the mindset and tools to move
          faster, learn continuously, and stay focused on what truly matters:
          your customer.
        </p>
      </section>
    </article>
  );
}
