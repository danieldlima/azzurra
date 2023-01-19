import * as React from 'react';
import { useState } from 'react';

import { EntryTypes, StatusType } from '@constant/api';

import { sendMail } from '@root/modules/utils/send-mail';
import { ErrorFields } from '@root/types';

import Button from '@components/Buttons/Button';
import Mail from '@components/Icons/Mail';
import Text from '@components/Text';

import TextField from './TextField';
import TextareaField from './TextareaField';

// { text: 'Email enviado com sucesso!', type: StatusType.Success }
const initialErrors: ErrorFields = {
  name: null,
  email: null,
  subject: null,
  generic: null,
  success: null
};

function ContactForm() {
  const [errors, setErrors] = useState<ErrorFields>(initialErrors);

  function handleMessage(msg: string) {
    const msgError: ErrorFields & { status: StatusType } = JSON.parse(msg);

    setErrors((prevState) => ({ ...prevState, ...msgError }));

    setTimeout(() => {
      if (msgError.status === StatusType.Success) {
        setErrors((prevState) => ({ ...prevState, success: null }));
      }
    }, 3000);
  }

  function resetError(name: keyof ErrorFields) {
    setErrors((prevState) => ({ ...prevState, [name]: null }));
  }

  return (
    <div className="w-full flex flex-col">
      <div
        className={
          'w-8 sm:w-14 lg:w-16 text-azzurra-gold mb-2 mobile-landscape:mb-4 lg:mb-5'
        }
      >
        <Mail className={'w-full h-full'} />
      </div>

      <Text color="black" label={'Envie sua mensagem'} />

      <div className="flex flex-col">
        <form id="contact_form" className={'w-full'}>
          <div className="flex flex-col gap-4">
            <TextField
              error={errors.name}
              name="name"
              type="text"
              label="Seu Nome (obrigatório)"
              classes={{
                root: 'w-full',
                field: 'form_data'
              }}
              onChange={(value) => {
                if (value) resetError(EntryTypes.Name);
              }}
              required
            />

            <TextField
              error={errors.email}
              name="email"
              type="email"
              label="Seu E-mail (obrigatório)"
              classes={{
                root: 'w-full',
                field: 'form_data'
              }}
              onChange={(value) => {
                if (value) resetError(EntryTypes.Email);
              }}
              required
            />

            <TextField
              error={errors.subject}
              name="subject"
              type="text"
              label="Assunto (obrigatório)"
              classes={{
                root: 'w-full',
                field: 'form_data'
              }}
              onChange={(value) => {
                if (value) resetError(EntryTypes.Subject);
              }}
              required
            />

            <div className="pt-4 mb-6">
              <TextareaField
                name="message"
                label="Sua Mensagem"
                classes={{ field: 'form_data' }}
              />
            </div>

            {!errors.success ? null : (
              <span
                className={
                  'text-sm py-2 px-4 border rounded border-green-200 text-green-600 bg-green-100'
                }
              >
                {errors.success?.text}
              </span>
            )}

            <Button
              id="submit"
              type="submit"
              label="ENVIAR"
              onClick={(event) => {
                event.preventDefault();
                sendMail((msg) => handleMessage(msg));
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
