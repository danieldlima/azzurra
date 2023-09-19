import React, { createContext, ReactNode, useState } from 'react';

export interface HomeProviderProps {
  children: ReactNode;
}

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
  investmentPolicySection: {
    mandalaId: number | null;
    setMandalaId: (make: number | null) => void;
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
  const [mandalaId, setMandalaId] = useState<number | null>(null);
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
        investmentPolicySection: { mandalaId, setMandalaId },
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
