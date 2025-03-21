/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { use } from 'react'
import ProjectCard from '~/components/ProjectCard'

const FeaturedProjects = ({ dataLoader }: { dataLoader: Promise<any> }) => {
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
          {projects.map((project: any) => (<ProjectCard key={project.id} {...project} />))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects