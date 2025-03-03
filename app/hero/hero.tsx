import React from 'react';
import Button from '~/components/Button';
import IconButton from '~/components/IconButton';
import ArrowUpRightIcon from '~/icons/ArrowUpRightIcon';
import GithubIcon from '~/icons/GithubIcon';
import LinkedinIcon from '~/icons/LinkedinIcon';
import { optimize } from 'lib/image';
import Typewriter from '~/components/Typewriter';

export function Hero() {
  return (
    <section className="md:h-desktop-screen flex justify-center">
      <div className="container flex flex-col md:flex-row gap-16 md:gap-20 justify-between items-center pt-10 pb-16 md:pt-8 md:pb-20 mx-auto">
        <div>
          <h1 className="text-6xl md:text-8xl">
            <span className="text-5xl md:text-7xl">Hi, i am</span><br />
            Akhil K.
          </h1>
          <Typewriter className="text-gray-400 uppercase relative" texts={['SENIOR FRONT END DEVELOPER', 'SENIOR FULL-STACK DEVELOPER']} />
          <div className='flex gap-4 items-center mt-8 md:mt-10'>
            <Button icon={<ArrowUpRightIcon />}>Contact Me</Button>
            <IconButton title="Linkedin" href="https://www.linkedin.com/in/akhiakl/">
              <LinkedinIcon />
            </IconButton>
            <IconButton title="Github" href="https://github.com/akhiakl">
              <GithubIcon />
            </IconButton>
          </div>
        </div>
        <div className="mix-blend-luminosity relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-gray-300 flex aspect-1/1 w-full max-h-full rounded-xl" />
          <img srcSet={optimize("/akl1.png")} alt='Profile' className="aspect-6/7 object-contain w-100" />
        </div>
      </div>
    </section>
  );
}
