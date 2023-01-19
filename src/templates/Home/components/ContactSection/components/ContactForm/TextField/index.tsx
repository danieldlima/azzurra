import React, { ChangeEvent, useState } from 'react';

import { addClassName } from '@root/modules/utils';

import { StatusType } from '@templates/Home/components/ContactSection/components/ContactForm';

interface TextFieldProps {
  classes?: {
    root?: string;
    field?: string;
  };
  name: string;
  type: 'text' | 'email';
  label: string;
  error?: {
    text?: string;
    type?: StatusType;
  } | null;
  required?: boolean;
  onChange?: (value: string) => void;
}

function TextField({
  name,
  type,
  label,
  required,
  classes,
  error,
  onChange
}: TextFieldProps) {
  const [value, setValue] = useState('');
  const colorLabel = {
    error: 'border-red-100 text-red-400 bg-red-50',
    warn: 'border-orange-100 text-orange-400 bg-orange-50'
  };
  const borderColor = {
    error: 'bg-red-600 peer-focus:bg-red-600',
    warn: 'bg-orange-300 peer-focus:bg-orange-300'
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);

    if (onChange) {
      onChange(e.target.value);
    }
  }

  return (
    <>
      <div className={`relative mt-6${addClassName(classes?.root)}`}>
        <label className="block">
          <input
            required={required}
            name={name}
            type={type}
            className={
              'w-full h-12 relative group/field form-input px-0.5 py-0 border-l-0 border-r-0 border-t-0 ' +
              `focus:ring-transparent focus:border-b focus:border-b-azzurra-gold-100 peer${addClassName(
                classes?.field
              )}`
            }
            onChange={handleChange}
          />

          <span
            className={`absolute block peer-focus:bottom-12 peer-focus:text-azzurra-gold-100
               text-lg peer-focus:text-xs transition-all ${addClassName(
                 value
                   ? 'bottom-12 text-xs text-azzurra-gold-100'
                   : 'bottom-1 text-azzurra-gray-70'
               )}`}
          >
            {label}
          </span>

          <span
            className={`absolute w-full h-px bottom-0 peer-focus:h-0.5 block
              ${addClassName(
                value
                  ? 'bg-azzurra-gray-70 peer-focus:bg-azzurra-gold-100'
                  : error?.type && required
                  ? addClassName(
                      error
                        ? borderColor[error?.type as never]
                        : 'bg-azzurra-gray-70 peer-focus:bg-azzurra-gold-100'
                    )
                  : ''
              )}`}
          />
        </label>
      </div>

      {!error || !required ? null : (
        <span
          className={`text-sm py-2 px-4 border rounded${
            error?.type && required
              ? addClassName(colorLabel[error?.type as never])
              : ''
          }`}
        >
          {error?.text}
        </span>
      )}
    </>
  );
}

export default TextField;
