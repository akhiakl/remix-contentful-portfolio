import clsx from 'clsx'
import React from 'react'

type SectionProps = {
  title: string,
  description?: React.ReactNode,
  children: React.ReactNode,
  colType?: boolean
}

const Section = ({ title, children, description, colType }: SectionProps) => {
  return (
    <section>
      <div className={clsx(
        "container grid grid-cols-1 gap-8 pt-10 pb-16 md:pt-8 md:pb-20 mx-auto",
        colType && "md:grid-cols-2 justify-between"
      )}>
        <div className='flex-grow'>
          <h2 className="text-5xl md:text-7xl">
            {title}
          </h2>
          {typeof description === 'string' ?
            <p className="text-neutral-400">
              {description}
            </p>
            :
            <div className="text-neutral-400">
              {description}
            </div>
          }

        </div>
        <div className="flex flex-col">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section