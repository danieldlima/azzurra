import React, { useState } from 'react';

import { addClassName } from '@root/modules/utils';

interface TextareaField {
  className?: string;
  label: string;
  name: string;
  required?: boolean;
}

function TextareaField({ className, required, name, label }: TextareaField) {
  const [value, setValue] = useState('');
  const [focussed, setFocussed] = useState(false);

  function handleFocussed() {
    setFocussed((prevState) => !prevState);
  }

  console.log('focussed ->', focussed);

  return (
    <div className={`relative mb-6 ${addClassName(className)}`}>
      <label className="block relative">
        <textarea
          required={required}
          name={name}
          rows={6}
          spellCheck={false}
          autoFocus
          className={
            'w-full min-h-48 relative top-6 group/field form-input px-0.5 py-0 border-l-0 border-r-0 border-t-0 ' +
            'focus:ring-transparent focus:border-b focus:border-b-azzurra-gold-100 peer'
          }
          onFocus={handleFocussed}
          onBlur={handleFocussed}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <span
          className={
            'absolute top-0 left-0 block peer-focus:text-azzurra-gold-100 ' +
            `peer-focus:bottom-10 text-lg peer-focus:text-xs transition-all ${addClassName(
              value ? 'text-xs text-azzurra-gold-100' : 'text-azzurra-gray-70'
            )}`
          }
        >
          {label}
        </span>

        <span
          className={
            'absolute w-full h-px -bottom-[17px] left-0 peer-focus:h-0.5 block ' +
            `peer-focus:bg-azzurra-gold-100 bg-azzurra-gray-70`
          }
        />
      </label>
    </div>
  );
}

export default TextareaField;
