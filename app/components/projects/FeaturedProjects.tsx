import React, { use } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from '~/components/shared/ProjectCard'
import type { TypeProject } from '~/contentful/types'
import Section from '../shared/Section'

type FeaturedProjectsProps = {
  dataLoader: Promise<TypeProject<'WITHOUT_UNRESOLVABLE_LINKS'>[]>
}

const FeaturedProjects = ({ dataLoader }: FeaturedProjectsProps) => {
  const projects = use(dataLoader)
  const { t } = useTranslation()
  return (
    <Section title={t('featuredProjectsTitle')} description={t('featuredProjectsDescription')}>
      <div className="flex flex-col gap-20">
        {projects.map((project) => (<ProjectCard key={project.sys?.id} project={project} />))}
      </div>
    </Section>
  )
}

export default FeaturedProjects