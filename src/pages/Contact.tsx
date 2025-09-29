import ContactForm from '../modules/contact/ContactForm';

export default function Contact() {
  return (
    <section className='mx-auto max-w-6xl px-4 py-16'>
      <header className='space-y-2'>
        <p className='text-xs uppercase tracking-wider text-gray-500'>
          Contact
        </p>
        <h1 className='text-3xl md:text-4xl font-bold'>Get in touch</h1>
        <p className='text-gray-600 max-w-2xl'>
          Tell me about your project, timeline, and budget. I’ll get back within
          1–2 business days.
        </p>
      </header>

      <ContactForm />
    </section>
  );
}
