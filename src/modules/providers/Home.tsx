import React, { createContext, PropsWithChildren, useState } from 'react';

export type HomeProviderProps = PropsWithChildren;

export interface AboutCompassItem {
  isDetailsOpen?: boolean;
  setIsDetailsOpen?: (make: boolean) => void;
  toggleDetails?: () => void;
}
export interface HomeContextProps {
  aboutSection: {
    layout: {
      grid: string;
    };
    compassItem: AboutCompassItem;
  };
}

export const HomeContext = createContext<HomeContextProps>(null!);

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  function toggleDetails() {
    setIsDetailsOpen((prevState) => !prevState);
  }

  return (
    <HomeContext.Provider
      value={{
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
