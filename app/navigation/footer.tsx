import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '~/components/LanguageSwitcher'

const Footer = () => {

    const { t } = useTranslation()
    return (
        <footer className="container-full flex flex-wrap justify-between items-center pb-8 md:pb-0">
            <p className="text-sm text-neutral-400 py-4">
                © 2025 Akhil K
            </p>
            <p className="text-sm text-neutral-400 py-4">
                {t('built using {{techStack}}', {
                    techStack: 'Remix/ React Router 7',
                    interpolation: { escapeValue: false }
                })}<br />
                KERALA, IN
            </p>
            <LanguageSwitcher className="basis-full md:basis-auto" />
        </footer>
    )
}

export default Footer