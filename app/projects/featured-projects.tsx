import React from 'react'
import ProjectCard from '~/components/ProjectCard'

const FeaturedProjects = () => {
  return (
    <section>
      <div className="container flex flex-col md:flex-row gap-16 md:gap-20 justify-between items-center pt-10 pb-16 md:pt-8 md:pb-20 mx-auto">
        <div>
          <h2 className="text-5xl md:text-7xl">
            Featured Projects
          </h2>
          <p className="text-gray-400">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects