import React, { useRef } from 'react'
import ArrowUpRightIcon from '~/icons/ArrowUpRightIcon'
import Button from './Button'
import GithubIcon from '~/icons/GithubIcon'
import { optimize } from 'lib/image'
import { motion, useScroll, useTransform } from 'motion/react'
import techIcons from '~/icons/tech'
import { useTranslation } from 'react-i18next'
import type { TypeProject } from '~/contentful/types'
import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'

interface ProjectCardProps {
  project: TypeProject<'WITHOUT_UNRESOLVABLE_LINKS'>
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: project.sys.id,
  })
  const { image, title, description, githubUrl, techStack, url } = useContentfulLiveUpdates(project.fields)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const { t } = useTranslation()

  const imageUrl = (image && 'fields' in image && image?.fields?.file?.url) ? image.fields.file.url : '/placeHlderImage'
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-12 mt-4 items-center">
      <div className="bg-neutral-900 p-7 md:p-15 rounded-xl aspect-square flex justify-center items-center"
        ref={ref}
        {...inspectorProps({ fieldId: 'image' })}>
        <img
          loading="lazy"
          className="max-w-full h-auto object-contain rounded-xl"
          srcSet={optimize(imageUrl, { quality: 60 })}
          alt={title}
          width={1000}
          height={563}
          sizes="(max-width: 768px) 70vw, 33vw"
        />
      </div>
      <motion.div initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }} className='flex flex-col gap-4 mt-8 md:mt-10'>
        <h3 className="text-3xl" {...inspectorProps({ fieldId: 'title' })}>{title}</h3>
        <p className="text-neutral-300" {...inspectorProps({ fieldId: 'description' })}>{description}</p>
        <ul className="mb-4" {...inspectorProps({ fieldId: 'techStack' })}>
          <li className="py-4 border-b border-neutral-500 uppercase">
            {t('techstack')}
          </li>
          {techStack?.map((stackItem) => {
            const key = stackItem?.toLowerCase() as keyof typeof techIcons;
            const IconComponent = techIcons[key]?.icon;

            return (
              <li key={stackItem} className="py-4 border-b border-neutral-800 flex gap-3">
                {IconComponent && <IconComponent width={20} height={20} />}
                {techIcons[key]?.title}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4">
          <Button {...inspectorProps({ fieldId: 'url' })} variant="link" target="_blank" href={url} icon={<ArrowUpRightIcon />}>{t('visitsite')}</Button>
          {githubUrl && <Button {...inspectorProps({ fieldId: 'githubUrl' })} variant="link" href={githubUrl} icon={<GithubIcon />}>GITHUB</Button>}
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard