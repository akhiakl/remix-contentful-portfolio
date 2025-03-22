import clsx from 'clsx';
import React, { useId } from 'react';

type FormInputProps = {
  label?: string;
  className?: string;
} & React.ComponentProps<'input'> & React.ComponentProps<'textarea'>;

const FormInput = ({ label, className, as: Component, ...props }: FormInputProps & { as: 'input' | 'textarea' }) => {
  const inputId = useId();

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="text-sm font-bold text-neutral-400 mb-2">
          {label}
        </label>
      )}
      <Component
        id={inputId}
        className={clsx(
          'w-full px-4 py-2 text-sm text-neutral-100 bg-neutral-800 rounded-md',
          className
        )}
        {...props}
      />
    </div>
  );
};

export const Input = (props: Omit<FormInputProps, 'as'>) => <FormInput as="input" {...props} />;
export const Textarea = (props: Omit<FormInputProps, 'as'>) => <FormInput as="textarea" rows={6} {...props} />;
