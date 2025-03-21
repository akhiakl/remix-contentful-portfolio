import React from 'react'
import { useTranslation } from 'react-i18next'
import HamburgerIcon from '~/icons/HamburgerIcon'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <header className="container-full py-4 md:py-6 sticky top-0 z-10 bg-neutral-950 border-b border-neutral-900 flex justify-between items-center overflow-visible">
      <a href="/">
        <span className="font-bebas-neue text-3xl">AKL</span>
      </a>
      <nav>
        <input id="menu-toggle" type="checkbox" className="hidden peer" />
        <label htmlFor="menu-toggle" className="text-white cursor-pointer block md:hidden" >
          <HamburgerIcon className="w-11 h-11" />
        </label>
        <ul className="container-full py-6 flex flex-col md:flex-row gap-8 absolute md:static bottom-0 left-0 translate-y-full md:translate-0 -z-10 peer-checked:z-10 bg-neutral-950 w-full md:w-auto h-0 md md:h-auto peer-checked:h-mobile-screen invisible md:visible peer-checked:visible duration-200 ease-in">
          <li>
            <a href="#about" className="text-neutral-400 hover:text-primary">{t('about')}</a>
          </li>
          <li>
            <a href="#projects" className="text-neutral-400 hover:text-primary">{t('projects')}</a>
          </li>
          <li>
            <a href="#contact" className="text-neutral-400 hover:text-primary">{t('contact')}</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar