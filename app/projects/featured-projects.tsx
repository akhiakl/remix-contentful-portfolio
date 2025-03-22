/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { use } from 'react'
import ProjectCard from '~/components/ProjectCard'
import type { TypeProject } from '~/contentful/types'

type FeaturedProjectsProps = {
  dataLoader: Promise<TypeProject<'WITHOUT_UNRESOLVABLE_LINKS'>[]>
}

const FeaturedProjects = ({ dataLoader }: FeaturedProjectsProps) => {
  const projects = use(dataLoader)
  return (
    <section>
      <div className="container flex flex-col pt-10 pb-16 md:pt-8 md:pb-20 mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl">
            Featured Projects
          </h2>
          <p className="text-neutral-400">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
        </div>
        <div className="flex flex-col gap-20">
          {projects.map((project) => (<ProjectCard key={project.sys?.id} project={project} />))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects