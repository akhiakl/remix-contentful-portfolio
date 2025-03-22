import React from 'react'
import Section from '../shared/Section'
import Button from '../shared/Button'
import ArrowUpRightIcon from '~/icons/ArrowUpRightIcon'

const AboutMe = () => {
  return (
    <Section title="About Me" colType>
      <p className="text-neutral-400 mb-4">
        A Senior <strong className='underline'>Front End / Full Stack Developer</strong> from Kerala, India, with 7+ years of experience building scalable, high-performance web applications. I specialize in React.js, Next.js, TypeScript, and Node.js, delivering seamless digital experiences.
        Currently at Corra (Publicis Sapient), I work on e-commerce and content-driven platforms, optimizing performance and usability. Passionate about clean code, agile development, and modern web technologies.
        Beyond coding, I enjoy gaming, movies, motorcycles, books and <a className="text-primary underline cursor-pointer" href="https://www.artstation.com/akhiakl">art</a>.
      </p>
      <div>
        <Button variant="link" type="submit" icon={<ArrowUpRightIcon />} target="_blank" href="/resume.pdf">Checkout my resume</Button>
      </div>
    </Section>
  )
}

export default AboutMe