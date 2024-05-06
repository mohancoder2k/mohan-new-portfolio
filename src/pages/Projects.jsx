import { Link } from 'react-router-dom'
import { projects } from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <article className="max-container">
      <div className="flex flex-col gap-4">
        <h1 className="head-text">
          My{' '}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </h1>
      </div>
      <article className="flex justify-center flex-wrap gap-16 py-20 border-b-4 border-b-slate-200">
        {projects.map((project) => (
          <section key={project.name} className="lg:w-[400px] w-full">
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.thumbnail}
                alt={`${project.name} mockup`}
                className="block w-full mb-4 rounded-lg shadow-md shadow-black/10 transition-all duration-300 hover:scale-[0.99]"
              />
            </Link>
            <div className="flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="flex items-center gap-2 pt-5 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 transition-all duration-150 hover:text-blue-700"
                >
                  Preview
                </Link>
                <img
                  src={arrow}
                  alt="Arrow right icon"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </section>
        ))}
      </article>
      <CTA />
    </article>
  )
}

export default Projects
