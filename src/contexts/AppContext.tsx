import React, { createContext, useContext, useState } from "react";

type AppPage = "home" | "drivers" | "teams" | "races" | "car";

type AppContextStateData = [
  AppPage,
  React.Dispatch<React.SetStateAction<AppPage>>
];

interface AppProviderProps {
  children?: JSX.Element;
}

const AppStateContext = createContext<AppContextStateData | undefined>(
  undefined
);

export const useAppContext = (): AppContextStateData => {
  const appContext = useContext(AppStateContext);
  if (appContext === undefined) {
    throw new Error("useAppContext must be used within the AppProvider");
  }
  return appContext;
};

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  const contextState = useState<AppPage>("home");

  return (
    <AppStateContext.Provider value={contextState}>
      {children}
    </AppStateContext.Provider>
  );
};
