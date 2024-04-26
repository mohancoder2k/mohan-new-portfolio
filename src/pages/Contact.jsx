import { useState, useId, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'

import Loader from '../components/Loader.jsx'
import Fox from '../models/Fox.jsx'
import useAlert from '../hooks/useAlert.js'
import Alert from '../components/Alert.jsx'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert, showAlert, hideAlert } = useAlert()

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

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
        showAlert({
          show: true,
          text: 'Message sent successfully!',
          type: 'success',
        })

        setTimeout(() => {
          hideAlert()
          setCurrentAnimation('idle')
          setForm({
            name: '',
            email: '',
            message: '',
          })
        }, [3000])
      })
      .catch((error) => {
        setIsLoading(false)
        setCurrentAnimation('idle')
        console.error(error)
        showAlert({
          show: true,
          text: 'Something went wrong.',
          type: 'danger',
        })
      })
  }
  const handleChange = (e) => {
    const { target } = e

    setForm({
      ...form,
      [target.name]: target.value,
    })
  }
  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  return (
    <section className="relative flex flex-col lg:flex-row max-container">
      {alert.show && <Alert {...alert} />}
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

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
