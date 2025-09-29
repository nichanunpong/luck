import SectionTitle from '../common/SectionTitle';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // For now, just log. Could integrate with email provider later.
    console.log('Contact form submitted:', form);
    alert('Thanks! I will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section
      className='mx-auto max-w-6xl px-4 py-16'
      aria-labelledby='contact-title'>
      <SectionTitle
        id='contact-title'
        title='Let’s work together'
        subtitle='Contact'
        align='center'
      />

      <form
        onSubmit={handleSubmit}
        className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <label htmlFor='name' className='text-sm text-gray-600'>
            Name
          </label>
          <input
            id='name'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900'
            placeholder='Your name'
            required
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='email' className='text-sm text-gray-600'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            value={form.email}
            onChange={handleChange}
            className='w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900'
            placeholder='you@example.com'
            required
          />
        </div>
        <div className='md:col-span-2 space-y-2'>
          <label htmlFor='message' className='text-sm text-gray-600'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            value={form.message}
            onChange={handleChange}
            className='w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900'
            placeholder='Tell me about your project...'
            required
          />
        </div>
        <div>
          <button
            type='submit'
            className='inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2'>
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}
