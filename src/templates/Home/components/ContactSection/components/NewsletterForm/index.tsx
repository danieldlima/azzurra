import React from 'react';

import Button from '@components/Buttons/Button';
import Text from '@components/Text';

import TextField from '../ContactForm/TextField';

function NewsletterForm() {
  return (
    <form id="form-data-newsletter" className={'w-full'}>
      <Text
        className={'mb-1 sm:mb-3'}
        color="black"
        label="Assine nossa Newsletter"
      />

      <p
        className={
          'w-full pb-4 lg:pb-0 normal-case leading-none text-xl font-light ' +
          'mb-0 sm:mb-4'
        }
      >
        Inscreva o seu e-mail para receber a nossa newsletter mensal com
        notícias e recomendações do mercado.
      </p>

      <div className={'flex flex-col gap-8'}>
        <TextField
          name="newsletter"
          type="text"
          label="nome@email.com.br"
          className={'w-full'}
        />

        <Button type="submit" label="Receba nossas Newsletters" />
      </div>
    </form>
  );
}

export default NewsletterForm;
