import { Link } from 'react-router-dom'
import { projects } from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <article className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <section className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptate nisi repellat. Fugiat veniam ipsam quae labore dolorum
          architecto consequuntur, Fugiat veniam ipsam quae labore dolorum
          architecto consequuntur.
        </p>
      </section>
      <section className="flex flex-wrap gap-16 py-20 border-b-4 border-b-slate-200">
        {projects.map((project) => (
          <div key={project.name} className="lg:w-[400px] w-full">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div
                role="button"
                className="btn-front rounded-xl flex justify-center items-center"
              >
                <img
                  src={project.iconUrl}
                  alt="Project icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <section className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="flex items-center gap-2 mt-5 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Preview
                </Link>
                <img
                  src={arrow}
                  alt="Arrow right icon"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </section>
          </div>
        ))}
      </section>
      <CTA />
    </article>
  )
}

export default Projects
