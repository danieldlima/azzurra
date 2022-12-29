import * as React from 'react';

import Button from '@components/Buttons/Button';
import Mail from '@components/Icons/Mail';
import Text from '@components/Text';

import TextField from './TextField';
import TextareaField from './TextareaField';

function ContactForm() {
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
        <form id="form-data-contact" className={'w-full'}>
          <div className="flex flex-col gap-4">
            <TextField
              name="name"
              type="text"
              label="Seu Nome (obrigatório)"
              className={'w-full'}
              required
            />

            <TextField
              name="email"
              type="email"
              label="Seu E-mail (obrigatório)"
              className={'w-full'}
              required
            />

            <TextField
              name="subject"
              type="text"
              label="Assunto"
              className={'w-full'}
              required={false}
            />

            <div className="pt-4 mb-6">
              <TextareaField name="message" label="Sua Mensagem" />
            </div>

            <Button type="submit" label="ENVIAR" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
