import * as React from 'react';

import TextField from '@templates/Home/components/ContactSection/components/Form/TextField';
import TextareaField from '@templates/Home/components/ContactSection/components/Form/TextareaField';

import Mail from '@components/Icons/Mail';
import Text from '@components/Text';

function Form() {
  return (
    <div className="w-full flex flex-col">
      <div className={'w-8 lg:w-16 text-azzurra-gold mb-2 lg:mb-5'}>
        <Mail className={'w-full h-full'} />
      </div>

      <Text color="black" label={'Envie sua mensagem'} />

      <form className={'w-full'}>
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

          <TextareaField name="message" label="Sua Mensagem" />
        </div>
      </form>
    </div>
  );
}

export default Form;
