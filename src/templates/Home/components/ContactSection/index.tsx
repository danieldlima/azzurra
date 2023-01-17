import * as React from 'react';
import { useContext, useEffect, useMemo } from 'react';

import { useDimensions } from '@root/modules/hooks';
import { HomeContext } from '@root/modules/providers';

import ContactForm from '@templates/Home/components/ContactSection/components/ContactForm';
import NewsletterForm from '@templates/Home/components/ContactSection/components/NewsletterForm';

import ButtonLink from '@components/Buttons/ButtonLink';
import Mail from '@components/Icons/Mail';
import Container from '@components/Layout/Container';

const options = {
  wait: 250,
  optimizedType: 'throttle'
} as never;

function ContactSection() {
  const [newsletterRef, newsletterDimension] = useDimensions(options);
  const [sectionRef, sectionDimension] = useDimensions(options);

  const { footer } = useContext(HomeContext);

  const yPosition = useMemo(() => {
    return Math.abs(
      // sectionDimension.sizes.bottom - newsletterDimension.sizes.bottom + 32
      0
    );
  }, [newsletterDimension.sizes.bottom, sectionDimension.sizes.bottom]);

  useEffect(() => {
    if (footer?.y) footer?.y?.setValue(yPosition);

    // eslint-disable-next-line
  }, [yPosition]);

  if (footer?.y) {
    footer?.y?.setValue(yPosition);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={
        'relative lg:min-h-[560px] bg-contact-form bg-cover bg-bottom ' +
        'pt-20 pb-40 lg:pb-48 mb-14 -mb-28'
      }
    >
      <Container
        className={
          'px-6 xl:px-0 flex flex-col lg:flex-col justify-between gap-10'
        }
      >
        <div className="lg:w-full mb-8 lg:mb-0">
          <h3
            className={`lg:w-6/12 text-5xl sm:text-7xl mb-6 mobile-landscape:mb-4 sm:mb-4 md:mb-14 text-azzurra-navy-blue`}
          >
            Fale com{' '}
            <span className="inline-block mobile-landscape:block">
              a <strong>Azzurra Capital</strong>
            </span>
          </h3>

          <div className="flex flex-col lg:flex-row gap-10 mobile-landscape:flex-row mobile-landscape:gap-20">
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

        <div className="">
          <ButtonLink
            href="mailto:contato@azzurracapital.com.br"
            icon={<Mail />}
            title="Envie sua mensagem"
          />
        </div>

        <div className="hidden relative w-full lg:w-7/12">
          <div
            className={
              'absolute top-0 left-0 w-full flex flex-col bg-white px-8 ' +
              'pt-16 pb-24 mobile-landscape:pt-12 rounded-lg shadow-1 z-20 gap-20 lg:gap-28'
            }
          >
            <ContactForm />

            <div ref={newsletterRef}>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
