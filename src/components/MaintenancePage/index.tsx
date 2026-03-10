import * as React from 'react';

import AzzurraBrand from '@components/Icons/AzzurraBrand';

type MaintenanceLanguage = 'pt' | 'en';

interface MaintenancePageProps {
  lang?: MaintenanceLanguage;
}

const contentByLanguage = {
  pt: {
    eyebrow: 'Manutenção programada',
    title: 'Voltamos em breve.',
    description:
      'Estamos atualizando o site da Azzurra Capital para publicar novas alterações com segurança. Durante esse período, o acesso público permanece temporariamente indisponível.'
  },
  en: {
    eyebrow: 'Scheduled maintenance',
    title: 'We will be back shortly.',
    description:
      'We are updating the Azzurra Capital website so the next changes can be published safely. Public access is temporarily unavailable while this work is in progress.'
  }
} as const;

const MaintenancePage = ({ lang = 'pt' }: MaintenancePageProps) => {
  const content = contentByLanguage[lang];

  return (
    <main className="min-h-screen bg-azzurra-dark-blue bg-azzurra-blue-linear text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16 sm:px-8 lg:px-12">
        <section className="w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-highlight backdrop-blur-sm">
          <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="mb-10 w-52 sm:w-64">
                <AzzurraBrand />
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-azzurra-opaque-gold">
                {content.eyebrow}
              </p>
              <h1 className="max-w-xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-azzurra-gray-20 sm:text-lg">
                {content.description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MaintenancePage;
