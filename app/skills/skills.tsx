import React from 'react'
import { LazyMotion, domAnimation } from "motion/react"
import * as motion from "motion/react-m"
import techIcons from '~/icons/tech'

const Skills = () => {
  return (
    <section>
      <div className="container flex flex-col gap-8 pt-10 pb-16 md:pt-8 md:pb-20 mx-auto">
        <div>
          <h2 className="text-5xl md:text-7xl">
            SKILLS
          </h2>
          <p className="text-neutral-400">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
        </div>
        <LazyMotion features={domAnimation}>
          <ul className="flex flex-wrap justify-center items-center gap-8">
            {Object.entries(techIcons).map(([key, { icon: Icon, title }]) => (
              <motion.li
                key={key}
                title={title}
                whileInView={{
                  scale: [0.75, 0.75, 1, 1],
                  rotate: [0, 180, 180, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 0.8, 1],
                  repeatDelay: 1,
                }}
                className="bg-neutral-950 flex justify-center items-center p-4 rounded-full shadow-sm hover:shadow-md hover:-translate-0.5 shadow-neutral-600">
                <Icon width={48} height={48} />
              </motion.li>
            ))}
          </ul>
        </LazyMotion>
      </div>
    </section>
  )
}

export default Skills