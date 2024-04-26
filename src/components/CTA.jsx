import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" /> Let's get
        started!
      </p>
      <Link
        to="/contact"
        className="btn sm:text-base sm:min-w-32"
        role="button"
      >
        Contact
      </Link>
    </section>
  )
}

export default CTA
