import React, { ReactElement } from 'react';

interface AboutItemProps {
  children?: ReactElement | string | null;
  icon: JSX.Element;
  title: string;
  description: string;
}

const AboutItem = ({ title, description, icon, children }: AboutItemProps) => {
  return (
    <>
      <div className="w-full sm:max-w-6xl flex flex-row">
        <div className="w-2/12 sm:w-20 mb-4 sm:mb-5 text-azzurra-opaque-gold">
          {icon}
        </div>

        <div className="w-5/6 flex flex-col pl-4 sm:pl-6">
          <h3 className="text-2xl sm:text-5xl font-bold text-azzurra-navy-blue mb-2 sm:mb-4">
            {title}
          </h3>

          <p className="text-lg leading-6">{description}</p>
        </div>
      </div>

      {children}
    </>
  );
};

export default AboutItem;
