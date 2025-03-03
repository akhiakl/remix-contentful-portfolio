import React from 'react'
import ArrowUpRightIcon from '~/icons/ArrowUpRightIcon'
import Button from './Button'
import GithubIcon from '~/icons/GithubIcon'

interface ProjectCardProps {
  imageUrl: string
  title: string
  description: string,
  tags: string[]
  siteUrl?: string
  githubUrl?: string
}

const ProjectCard = ({ githubUrl, siteUrl }: ProjectCardProps) => {
  return (
    <div className="">
      <div className='flex gap-4 items-center mt-8 md:mt-10'>
        <Button variant="link" href={siteUrl} icon={<ArrowUpRightIcon />}>VISIT</Button>
        <Button variant="link" href={githubUrl} icon={<GithubIcon />}>GITHUB</Button>
      </div>
    </div>
  )
}

export default ProjectCard