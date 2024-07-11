import React, { createContext, useContext, useState } from "react";

type LoadingContextStateData = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

interface LoadingProviderProps {
  children?: JSX.Element;
}

const LoadingStateContext = createContext<LoadingContextStateData | undefined>(
  undefined
);

export const useLoadingContext = (): LoadingContextStateData => {
  const loadingStateContext = useContext(LoadingStateContext);
  if (loadingStateContext === undefined) {
    throw new Error(
      "useLoadingContext must be used within the LoadingProvider"
    );
  }
  return loadingStateContext;
};

export const LoadingProvider = (props: LoadingProviderProps) => {
  const { children } = props;
  const contextState = useState<boolean>(false);

  return (
    <LoadingStateContext.Provider value={contextState}>
      {children}
    </LoadingStateContext.Provider>
  );
};
