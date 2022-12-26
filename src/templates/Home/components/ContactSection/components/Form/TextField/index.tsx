import React, { useState } from 'react';

import { addClassName } from '@root/modules/utils';

interface TextFieldProps {
  className?: string;
  name: string;
  type: 'text' | 'email';
  label: string;
  required?: boolean;
}

function TextField({ name, type, label, required, className }: TextFieldProps) {
  const [value, setValue] = useState('');

  return (
    <div className={`relative mt-6 ${addClassName(className)}`}>
      <label className="block">
        <input
          required={required}
          name={name}
          type={type}
          className={
            'w-full h-12 relative group/field form-input px-0.5 py-0 border-l-0 border-r-0 border-t-0 ' +
            'focus:ring-transparent focus:border-b focus:border-b-azzurra-gold-100 peer'
          }
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <span
          className={`absolute block peer-focus:bottom-12
               text-lg peer-focus:text-xs transition-all ${addClassName(
                 value
                   ? 'bottom-12 text-xs text-azzurra-gold-100'
                   : 'bottom-1 text-azzurra-gray-70'
               )}`}
        >
          {label}
        </span>
      </label>
    </div>
  );
}

export default TextField;
