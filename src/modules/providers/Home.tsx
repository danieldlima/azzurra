import React, { createContext, PropsWithChildren, useState } from 'react';

export type HomeProviderProps = PropsWithChildren;

export interface AboutCompassItem {
  isDetailsOpen: boolean;
  setIsDetailsOpen?: (make: boolean) => void;
  toggleDetails: () => void;
}

export interface HomeContextProps {
  aboutSection: {
    layout: {
      grid: string;
    };
    compassItem: AboutCompassItem;
  };
  footer?: {
    y?: {
      value: number;
      setValue: (position: number) => void;
    };
  };
}

export const HomeContext = createContext<HomeContextProps>(null!);

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [footer, setFooter] = useState(0);

  function toggleDetails() {
    setIsDetailsOpen((prevState) => !prevState);
  }

  return (
    <HomeContext.Provider
      value={{
        footer: {
          y: {
            value: footer,
            setValue: setFooter
          }
        },
        aboutSection: {
          layout: {
            grid: `grid grid-cols-about-card grid-areas-about-card gap-x-4 sm:gap-x-10`
          },
          compassItem: { isDetailsOpen, setIsDetailsOpen, toggleDetails }
        }
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
