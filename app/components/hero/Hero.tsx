import React from 'react';
import Button from '~/components/shared/Button';
import IconButton from '~/components/shared/IconButton';
import ArrowUpRightIcon from '~/icons/ArrowUpRightIcon';
import GithubIcon from '~/icons/GithubIcon';
import LinkedinIcon from '~/icons/LinkedinIcon';
import { optimize } from 'lib/image';
import Typewriter from '~/components/shared/Typewriter';
import { Trans, useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="md:h-desktop-screen flex justify-center">
      <div className="container flex flex-col md:flex-row gap-16 md:gap-20 justify-between items-center pt-10 pb-16 md:pt-8 md:pb-20 mx-auto">
        <div>
          <h1 className="text-5xl md:text-7xl ">
            <Trans i18nKey="heroTitle" values={{ name: "Akhil K." }}>
              Hi, i am<span className="text-6xl md:text-8xl block">Akhil K</span>
            </Trans>
          </h1>
          <Typewriter className="text-neutral-400 uppercase relative" texts={t('roles', { returnObjects: true }) as string[]} />
          <div className='flex gap-4 items-center mt-8 md:mt-10'>
            <Button icon={<ArrowUpRightIcon />}>{t('contactMe')}</Button>
            <IconButton title="Linkedin" href="https://www.linkedin.com/in/akhiakl/">
              <LinkedinIcon />
            </IconButton>
            <IconButton title="Github" href="https://github.com/akhiakl">
              <GithubIcon />
            </IconButton>
          </div>
        </div>
        <div className="mix-blend-luminosity relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-neutral-300 flex aspect-1/1 w-full max-h-full rounded-xl" />
          <img
            loading="eager"
            srcSet={optimize("/akl1.png")}
            sizes="(max-width: 768px) 50vw, 33vw"
            alt='Profile' className="aspect-6/7 object-contain w-100" />
        </div>
      </div>
    </section>
  );
}
