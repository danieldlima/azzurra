import React from 'react';

import Form from '@templates/Home/components/ContactSection/components/Form';

import Container from '@components/Layout/Container';

function ContactSection() {
  return (
    <section
      id="contact-section"
      className={
        'relative min-h-[1030px] bg-contact-form bg-cover bg-bottom pt-20'
      }
    >
      <Container
        className={'px-6 xl:px-0 flex flex-col lg:flex-row justify-between'}
      >
        <div className="lg:w-4/12 mb-8 lg:mb-0">
          <h3
            className={`text-5xl sm:text-7xl mb-6 sm:mb-4 md:mb-14 text-azzurra-navy-blue`}
          >
            Fale com{' '}
            <span className="inline-block">
              a <strong>Azzurra Capital</strong>
            </span>
          </h3>

          <div className="flex flex-col gap-5">
            <div className="text-black">
              <p className="font-bold text-xl">LIGUE PARA A AZZURRA CAPITAL:</p>
              <a href="tel:+551132631089" className="block text-lg font-light">
                +55 (11) 3263-1089
              </a>
              <a href="tel:+5511944466662" className="block text-lg font-light">
                +55 (11) 94446-6662
              </a>
            </div>

            <div className="text-black normal-case">
              <p className="font-bold text-xl">OU FAÇA UMA VISITA:</p>

              <p>
                <span className="inline sm:block">
                  R. Leopoldo Couto Magalhães Júnior, 110
                </span>
                <span className={'inline sm:hidden'}>{' - '}</span>

                <span className="inline sm:block">ConJ. 81 - Edifício Jr</span>
                <span className={'inline sm:hidden'}>{' - '}</span>

                <span className="inline-block sm:block">
                  Itaim Bibi - São Paulo - SP
                </span>

                <span className="block">CEP: 04542-000</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:w-7/12">
          <div
            className={
              'absolute top-0 left-0 w-full flex bg-white p-8 rounded-lg shadow-1'
            }
          >
            <Form />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
