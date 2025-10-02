import { Link } from 'react-router-dom';
import qa from '../assets/images/blog/qa.jpg';

export default function BlogWhyQAMatters() {
  return (
    <article className='mx-auto max-w-3xl px-4 py-12 prose prose-gray article-content'>
      <nav className='mb-6 text-sm'>
        <Link to='/blog' className='text-gray-700 hover:text-gray-900'>
          ← Back to Blog
        </Link>
      </nav>

      <header>
        <h1>Why Quality Assurance Matters</h1>
        <p className='text-gray-600'>
          In software development, speed often takes center stage. Yet speed
          without stability is risky.{' '}
          <span className='font-bold text-black'>Quality Assurance (QA)</span>{' '}
          ensures products are not only shipped quickly, but with reliability,
          security, and confidence.
        </p>
      </header>

      <img src={qa} alt='QA engineer reviewing test results' />

      <section>
        <h2>Building Confidence</h2>
        <p>
          At its core, QA protects trust. Smooth, predictable experiences
          strengthen confidence in a product, while defects erode it. By
          catching flaws early and validating expected behavior, QA keeps
          confidence intact release after release.
        </p>
      </section>

      <section>
        <h2>Reducing Hidden Costs</h2>
        <p>
          Defects found in production create expensive emergencies, from
          firefighting to brand damage. Effective QA surfaces issues during
          development, when fixes are faster and less disruptive, preventing
          costly incidents before they grow.
        </p>
      </section>

      <section>
        <h2>Supporting Reliable Performance</h2>
        <p>
          Modern platforms carry significant operational load. QA expands beyond
          functional checks to assess performance, scalability, and resilience
          under realistic conditions, helping systems withstand peak traffic and
          unexpected scenarios.
        </p>
      </section>

      <section>
        <h2>Enabling Continuous Delivery</h2>
        <p>
          Agile and DevOps practices thrive on frequent, incremental releases.
          Without a strong quality foundation, rapid delivery invites
          instability. Automated testing, regression suites, and continuous
          validation make fast iteration sustainable rather than risky.
        </p>
      </section>

      <section>
        <h2>Fostering Collaboration</h2>
        <p>
          Quality is a shared responsibility. QA collaborates with engineering,
          design, and product management to clarify requirements, define
          testable acceptance criteria, and shorten feedback loops—turning
          quality into a habit, not a gate.
        </p>
      </section>

      <section>
        <h2>Keeping the User in Focus</h2>
        <p>
          Beyond technical correctness, QA represents real-world usage.
          Usability studies, exploratory testing, and scenario validation ensure
          features feel intuitive and meaningful for end users, not just
          theoretically correct.
        </p>
      </section>

      <section>
        <h2>Final Thoughts</h2>
        <p>
          QA is more than a final checkpoint; it is a mindset woven throughout
          delivery. By safeguarding reliability and reinforcing trust, QA
          enables teams to move quickly with assurance—protecting both product
          reputation and long-term value.
        </p>
      </section>
    </article>
  );
}
