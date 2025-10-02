import { Link } from 'react-router-dom';
import backlog from '../assets/images/blog/backlog.jpg';

export default function BlogCreateBacklogPO() {
  return (
    <article className='mx-auto max-w-3xl px-4 py-12 prose prose-gray article-content'>
      <header>
        <h1>How to Create a Product Backlog</h1>
        <p className='text-gray-600'>
          A strong backlog is more than a task list—it's the{' '}
          <span className='font-bold text-black'>single source of truth</span>{' '}
          for what the team builds next and why. The Product Owner curates,
          prioritizes, and refines work so the team delivers{' '}
          <span className='font-bold text-black'>maximum value</span> with
          minimum waste.
        </p>
      </header>

      <img src={backlog} alt='Backlog refinement board with priorities' />

      <section>
        <h2>What Is a Product Backlog?</h2>
        <p>
          The backlog is an{' '}
          <span className='font-bold text-black'>ordered list</span> of outcomes
          the team may deliver—features, fixes, improvements, and research. It
          evolves with market signals, user feedback, and technical insights.
        </p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>Dynamic</span> — changes as
            learning occurs.
          </li>
          <li>
            <span className='font-bold text-black'>Transparent</span> —
            priorities and intent are visible.
          </li>
          <li>
            <span className='font-bold text-black'>Value-ordered</span> —
            highest impact items appear at the top.
          </li>
        </ul>
      </section>

      <section>
        <h2>1) Start With a Clear Vision</h2>
        <p>
          A clear product vision anchors every decision and should answer:{' '}
          <em>Who is this for?</em> <em>What problem is being solved?</em>{' '}
          <em>How will success be measured?</em>
        </p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            Define <span className='font-bold text-black'>target users</span>{' '}
            and core problems.
          </li>
          <li>
            Set <span className='font-bold text-black'>north-star metrics</span>{' '}
            (e.g., activation, retention, NPS).
          </li>
          <li>
            Map <span className='font-bold text-black'>value streams</span> from
            idea to user outcome.
          </li>
        </ul>
      </section>

      <section>
        <h2>2) Collect Inputs From Multiple Sources</h2>
        <p>High-quality backlogs reflect diverse perspectives:</p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>Customers &amp; users</span>{' '}
            — interviews, support tickets, analytics.
          </li>
          <li>
            <span className='font-bold text-black'>Stakeholders</span> — sales,
            marketing, finance, legal.
          </li>
          <li>
            <span className='font-bold text-black'>
              Market &amp; competitors
            </span>{' '}
            — trends, gaps, benchmarks.
          </li>
          <li>
            <span className='font-bold text-black'>Engineering</span> — tech
            debt, performance, security, scalability.
          </li>
        </ul>
      </section>

      <section>
        <h2>3) Write User Stories That Express Value</h2>
        <p>Use a concise template to keep outcomes front-and-center:</p>
        <blockquote>
          <em>As a [user], I want [capability] so that [benefit].</em>
        </blockquote>
        <p>
          Pair each story with{' '}
          <span className='font-bold text-black'>acceptance criteria</span> to
          clarify scope:
        </p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>Given [context], when [action], then [observable result].</li>
          <li>
            Include edge cases and non-functional needs (performance, security,
            UX).
          </li>
        </ul>
      </section>

      <section>
        <h2>4) Slice Work Small (Epics → Stories → Tasks)</h2>
        <p>
          Break epics into thin vertical slices that deliver user-visible value.
          Avoid “front-end sprint / back-end sprint” anti-patterns.
        </p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>Vertical slices</span> —
            small end-to-end increments.
          </li>
          <li>
            Aim for <span className='font-bold text-black'>1–3 days</span> of
            work per story to improve flow.
          </li>
        </ul>
      </section>

      <section>
        <h2>5) Prioritize Ruthlessly</h2>
        <p>Consistent prioritization keeps focus on impact:</p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>MoSCoW</span> — Must / Should
            / Could / Won’t (now).
          </li>
          <li>
            <span className='font-bold text-black'>WSJF</span> — Cost of delay ÷
            job size to surface quick wins.
          </li>
          <li>
            <span className='font-bold text-black'>Value vs. Effort</span> —
            matrix for stakeholder alignment.
          </li>
        </ul>
        <p>
          Keep the top of the backlog{' '}
          <span className='font-bold text-black'>small and crystal-clear</span>{' '}
          — the next increments.
        </p>
      </section>

      <section>
        <h2>6) Define Ready &amp; Done</h2>
        <p>Team agreements reduce churn and ambiguity:</p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>
              Definition of Ready (DoR)
            </span>{' '}
            — story has value, ACs, test notes, and size.
          </li>
          <li>
            <span className='font-bold text-black'>
              Definition of Done (DoD)
            </span>{' '}
            — coded, tested, reviewed, documented, deployed.
          </li>
        </ul>
      </section>

      <section>
        <h2>7) Run Regular Backlog Refinement</h2>
        <p>Refinement sessions create clarity and flow:</p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>Split large items, remove stale ones, and merge duplicates.</li>
          <li>Discuss risks, dependencies, and testability with the team.</li>
          <li>
            Size stories (t-shirt sizes or story points) to improve forecasting.
          </li>
        </ul>
      </section>

      <section>
        <h2>8) Balance Short-Term Value with Long-Term Health</h2>
        <p>
          Ensure sustainability alongside delivery by reserving capacity for:
        </p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>
              Tech debt &amp; quality
            </span>{' '}
            — refactors, tests, performance work.
          </li>
          <li>
            <span className='font-bold text-black'>Discovery</span> — spikes,
            prototypes, usability tests.
          </li>
          <li>
            <span className='font-bold text-black'>Strategic bets</span> —
            experiments with potential outsized value.
          </li>
        </ul>
      </section>

      <section>
        <h2>Common Pitfalls to Avoid</h2>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>
            <span className='font-bold text-black'>
              Feature-factory mindset
            </span>{' '}
            — shipping output instead of outcomes.
          </li>
          <li>
            <span className='font-bold text-black'>Overstuffed top-10</span> —
            too many “#1 priorities” create thrash.
          </li>
          <li>
            <span className='font-bold text-black'>Vague stories</span> —
            missing acceptance criteria leads to rework.
          </li>
          <li>
            <span className='font-bold text-black'>Neglecting tech debt</span> —
            quality declines and velocity drops.
          </li>
        </ul>
      </section>

      <section>
        <h2>Tools &amp; Artifacts</h2>
        <p>Clarity and visibility benefit from familiar tools and artifacts:</p>
        <ul className='list-disc pl-6 md:pl-8 space-y-2'>
          <li>Jira / Azure Boards / Trello for backlog and sprint planning.</li>
          <li>Figma / Miro for flows, wireframes, and discovery.</li>
          <li>Confluence / Notion for product docs and decisions.</li>
          <li>
            Dashboards for metrics such as activation, retention, conversion,
            and NPS.
          </li>
        </ul>
      </section>

      <section>
        <h2>Final Thoughts</h2>
        <p>
          Building a high-quality backlog is an ongoing craft. Keep it{' '}
          <span className='font-bold text-black'>
            user-centric, value-ordered, and lightweight
          </span>
          . When uncertainty remains, ask:{' '}
          <em>What outcome is delivered, and how will it be known?</em>
          If clarity is lacking, refine until clear—or remove the item.
        </p>
      </section>

      <div className='mt-10'>
        <Link
          to='/blog'
          className='inline-flex items-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50'>
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
