import * as React from 'react';
import { Fragment, useContext, useMemo } from 'react';

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

export interface PhoneItem {
  label: string;
  href: string;
}

export interface ContactSectionProps {
  data: {
    title: string[];
    button: string;
    phone: {
      title: string;
      items: PhoneItem[];
    };
    address: {
      title: string;
      text: string[];
    };
  };
}

function ContactSection({ data }: ContactSectionProps) {
  const [newsletterRef, newsletterDimension] = useDimensions(options);
  const [sectionRef, sectionDimension] = useDimensions(options);

  const { footer } = useContext(HomeContext);

  const yPosition = useMemo(() => {
    return Math.abs(
      // sectionDimension.sizes.bottom - newsletterDimension.sizes.bottom + 32
      0
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsletterDimension.sizes.bottom, sectionDimension.sizes.bottom]);

  if (footer?.y) {
    footer?.y?.setValue(yPosition);
  }

  if (!data) return null;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={
        'relative lg:min-h-[560px] bg-contact-form bg-cover bg-bottom ' +
        'pt-20 pb-40 lg:pb-48 -mb-28'
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
            {data.title[0]}{' '}
            <span
              className="inline-block mobile-landscape:block"
              dangerouslySetInnerHTML={{
                __html: data.title[1]
              }}
            />
          </h3>

          <div className="flex flex-col lg:flex-row gap-10 mobile-landscape:flex-row mobile-landscape:gap-20">
            <div className="text-black">
              <p className="font-bold text-xl">{data.phone.title}</p>
              {data.phone.items.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="block text-lg font-light"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="text-black normal-case">
              <p className="font-bold text-xl">{data.address.title}</p>

              <p>
                {data.address.text.map((label, idx) => {
                  return (
                    <Fragment key={idx}>
                      <span className="inline sm:block">{label}</span>
                      {idx > 1 ? null : (
                        <span className={'inline sm:hidden'}>{' - '}</span>
                      )}
                    </Fragment>
                  );
                })}
              </p>
            </div>
          </div>
        </div>

        <div>
          <ButtonLink
            href="mailto:contato@azzurracapital.com.br"
            icon={<Mail />}
            title={data.button}
            className={'mx-0'}
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
