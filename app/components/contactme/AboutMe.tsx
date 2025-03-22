import React, { useEffect, useRef } from 'react'
import Section from '../shared/Section'
import GithubIcon from '~/icons/GithubIcon'
import LinkedinIcon from '~/icons/LinkedinIcon'
import IconButton from '../shared/IconButton'
import { Input, Textarea } from '../shared/FormInput'
import Button from '../shared/Button'
import { Form, useActionData, useNavigation } from 'react-router'
import type { action } from '~/routes/($lang)._index'


const ContactMe = () => {
  const data = useActionData<typeof action>();
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (navigation.state === "idle") {
      formRef.current?.reset();
    }
  }, [navigation.state]);

  return (
    <Section title="Let&apos;s connect" description={
      <>
        <div className="mb-3">
          Say hello at <a href="mailto:akhilk4k@gmail.com" className="underline cursor-pointer">akhilk4k@gmail.com</a>
        </div>
        <div className="flex gap-2">
          <IconButton title="Linkedin" href="https://www.linkedin.com/in/akhiakl/" noBg>
            <LinkedinIcon />
          </IconButton>
          <IconButton title="Github" href="https://github.com/akhiakl" noBg>
            <GithubIcon />
          </IconButton>
        </div>
      </>
    }
      colType>
      <Form method="post" ref={formRef}>
        <div className="flex flex-col gap-4">
          {data?.error && <div className="text-red-500">{data.error}</div>}
          {data?.message && <div className="text-green-500">{data.message}</div>}
          <Input type="text" name="name" label="Name" required />
          <Input type="email" name="email" label="Email" required />
          <Input type="text" name="subject" label="Subject" required />
          <Textarea name="message" label="Message" required />
          <input type="text" name="honeypot" style={{ display: "none" }} autoComplete="off" />
          <Button type="submit">
            {
              navigation.state === 'submitting' ? 'Sending...' : 'Send'
            }
          </Button>
        </div>
      </Form>
    </Section>
  )
}

export default ContactMe