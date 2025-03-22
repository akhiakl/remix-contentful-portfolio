import React from 'react'
import { LazyMotion, domAnimation } from "motion/react"
import * as motion from "motion/react-m"
import techIcons from '~/icons/tech'
import { useTranslation } from 'react-i18next'
import Section from '../shared/Section'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <Section title={t('skillsTitle')} description={t('skillsDescription')}>
      <LazyMotion features={domAnimation}>
        <ul className="grid grid-cols-3 sm:grid-cols-6 justify-center items-center gap-8 mx-auto">
          {Object.entries(techIcons).map(([key, { icon: Icon, title }]) => (
            <li
              key={key}
              className="flex justify-center items-center"
            >
              <motion.div
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
                className="bg-neutral-950 flex justify-center items-center p-4  hover:-translate-0.5 shadow-neutral-600"

              >
                <Icon width={48} height={48} />
              </motion.div>
            </li>
          ))}
        </ul>
      </LazyMotion>
    </Section>
  )
}

export default Skills