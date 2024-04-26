import { useState, useId, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Erick',
          from_email: form.email,
          to_email: 'erick17a@hotmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false)
        setForm({
          name: '',
          email: '',
          message: '',
        })
      })
      .catch((error) => {
        setIsLoading(false)
        console.error(error)
      })
  }
  const handleChange = (e) => {
    const { target } = e

    setForm({
      ...form,
      [target.name]: target.value,
    })
  }
  const handleFocus = () => {}
  const handleBlur = () => {}

  return (
    <section className="relative flex flex-col lg:flex-row max-container">
      <div className="flex flex-col flex-1 min-w-[50%]">
        <h1 className="head-text">Get in touch</h1>

        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold" htmlFor={nameId}>
            Name
            <input
              type="text"
              name="name"
              id={nameId}
              className="input"
              placeholder="Enter your name..."
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold" htmlFor={emailId}>
            Email
            <input
              type="email"
              name="email"
              id={emailId}
              className="input"
              placeholder="Enter your email..."
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold" htmlFor={messageId}>
            Your Message
            <textarea
              rows={4}
              name="message"
              id={messageId}
              className="textarea"
              placeholder="Let me know how can i help you..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
