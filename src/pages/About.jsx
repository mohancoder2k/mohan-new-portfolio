import { skills, experiences } from '../constants'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'

const About = () => {
  return (
    <article className="max-container">
      <section className="flex flex-col gap-4">
        <h1 className="head-text">
          <span className="blue-gradient_text font-semibold drop-shadow">
            About me
          </span>
        </h1>
        <div className="[&>p]:mb-4">
          <p className="text-slate-500 text-balance">
            I'm Erick! I've a degree in International Business and after years
            in the field I transitioned into the world of Programming. Ever
            since, I enjoy creating web experiences for the users.
          </p>
        </div>
      </section>
      <article className="py-10 flex flex-col">
        <h3 className="subhead-text">Skills</h3>
        <section className="mt-16 flex justify-center flex-wrap gap-12">
          {skills &&
            skills.map((skill) => (
              <div
                key={skill.id}
                className="block-container w-16 md:w-20 aspect-square"
              >
                <div className="btn-back rounded-xl" />
                <div
                  role="button"
                  className="btn-front rounded-xl flex justify-center items-center"
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
        </section>
      </article>
      <article className="py-16 border-b-4 border-b-slate-200">
        <h3 className="subhead-text">Tech Experience</h3>
        <section className="mt-12 flex">
          <VerticalTimeline>
            {experiences &&
              experiences.map((experience) => (
                <VerticalTimelineElement
                  key={`experience-key-${experience.company_name}`}
                  date={<span className="px-2">{experience.date}</span>}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={`Logo of ${experience.company_name}`}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ backgroundColor: experience.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </section>
      </article>
      <CTA />
    </article>
  )
}

export default About
