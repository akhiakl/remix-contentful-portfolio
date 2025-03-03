import React from 'react'
import { LazyMotion, domAnimation } from "motion/react"
import * as motion from "motion/react-m"
import AlokaiIcon from '~/icons/tech/AlokaiIcon'
import AlpineJsIcon from '~/icons/tech/AlpineJsIcon'
import AngularIcon from '~/icons/tech/AngularIcon'
import CSSIcon from '~/icons/tech/CSSIcon'
import ExpressJsIcon from '~/icons/tech/ExpressJsIcon'
import HtmlIcon from '~/icons/tech/HtmlIcon'
import JestIcon from '~/icons/tech/JestIcon'
import JiraIcon from '~/icons/tech/JiraIcon'
import MongoDBIcon from '~/icons/tech/MongoDBIcon'
import NestJsIcon from '~/icons/tech/NestJsIcon'
import NextJsIcon from '~/icons/tech/NextJsIcon'
import NodeJsIcon from '~/icons/tech/NodeJsIcon'
import PostgresIcon from '~/icons/tech/PostgresIcon'
import ReactJsIcon from '~/icons/tech/ReactJsIcon'
import RemixIcon from '~/icons/tech/RemixIcon'
import TailwindIcon from '~/icons/tech/TailwindIcon'
import TypeScriptIcon from '~/icons/tech/TypeScriptIcon'

const icons = [
  {
    icon: TypeScriptIcon,
    title: 'TypeScript'
  },
  {
    icon: ReactJsIcon,
    title: 'React JS'
  },
  {
    icon: NextJsIcon,
    title: 'Next JS'
  },
  {
    icon: AngularIcon,
    title: 'Angular'
  },
  {
    icon: HtmlIcon,
    title: 'HTML'
  },
  {
    icon: CSSIcon,
    title: 'CSS'
  },
  {
    icon: TailwindIcon,
    title: 'Tailwind'
  },
  {
    icon: NodeJsIcon,
    title: 'Node JS'
  },
  {
    icon: ExpressJsIcon,
    title: 'Express JS'
  },
  {
    icon: NestJsIcon,
    title: 'Nest JS'
  },
  {
    icon: MongoDBIcon,
    title: 'MongoDB'
  },
  {
    icon: PostgresIcon,
    title: 'Postgres'
  },
  {
    icon: JestIcon,
    title: 'Jest'
  },
  {
    icon: AlpineJsIcon,
    title: 'Alpine JS'
  },
  {
    icon: RemixIcon,
    title: 'Remix'
  },
  {
    icon: AlokaiIcon,
    title: 'Alokai / Vue Storefront'
  },
  {
    icon: JiraIcon,
    title: 'Jira'
  },
]

const Skills = () => {
  return (
    <section>
      <div className="container flex flex-col gap-8 pt-10 pb-16 md:pt-8 md:pb-20 mx-auto">
        <div>
          <h2 className="text-5xl md:text-7xl">
            SKILLS
          </h2>
          <p className="text-gray-400">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
        </div>
        <LazyMotion features={domAnimation}>
          <ul className="flex flex-wrap justify-center items-center gap-8">
            {icons.map(({ icon: Icon, title }) => (
              <motion.li
                key={title}
                title={title}
                whileInView={{
                  scale: [1, 1.15, 1.15, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "100%", "0%", "0%", "100%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeatDelay: 1,
                }}
                className="bg-gray-950 flex justify-center items-center p-4 rounded-full shadow-sm hover:shadow-md hover:-translate-0.5 shadow-gray-600">
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