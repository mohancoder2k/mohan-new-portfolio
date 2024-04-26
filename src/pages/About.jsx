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
      <h1 className="head-text">
        Hello, I'm{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Erick García
        </span>
      </h1>
      <section className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptate nisi repellat. Fugiat veniam ipsam quae labore dolorum
          architecto consequuntur?
        </p>
      </section>
      <article className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <section className="mt-16 flex flex-wrap gap-12">
          {skills &&
            skills.map((skill) => (
              <div key={skill.id} className="block-container w-20 h-20">
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
        <h3 className="subhead-text">Work Experience</h3>
        <section className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            voluptate nisi repellat. Fugiat veniam ipsam quae labore dolorum
            architecto consequuntur?
          </p>
        </section>
        <section className="mt-12 flex">
          <VerticalTimeline>
            {experiences &&
              experiences.map((experience) => (
                <VerticalTimelineElement
                  key={`experience-key-${experience.company_name}`}
                  date={experience.date}
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
