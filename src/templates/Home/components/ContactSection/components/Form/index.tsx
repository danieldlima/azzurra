import * as React from 'react';

import TextField from '@templates/Home/components/ContactSection/components/Form/TextField';
import TextareaField from '@templates/Home/components/ContactSection/components/Form/TextareaField';

import Button from '@components/Buttons/Button';
import Mail from '@components/Icons/Mail';
import Text from '@components/Text';

function Form() {
  return (
    <div className="w-full flex flex-col">
      <div className={'w-8 sm:w-14 lg:w-16 text-azzurra-gold mb-2 lg:mb-5'}>
        <Mail className={'w-full h-full'} />
      </div>

      <Text color="black" label={'Envie sua mensagem'} />

      <div className="flex flex-col gap-20 lg:gap-28">
        <div>
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

              <div className="pt-4 mb-6">
                <TextareaField name="message" label="Sua Mensagem" />
              </div>

              <Button type="submit" label="ENVIAR" />
            </div>
          </form>
        </div>

        <div>
          <form className={'w-full'}>
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
        </div>
      </div>
    </div>
  );
}

export default Form;
