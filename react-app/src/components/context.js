import React from 'react';

const defaultGlobalState = {
  lang: 'RUS-HU',
  lim: 5,
};

const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(null);

export const useGlobState = () => [React.useContext(globalStateContext), React.useContext(dispatchStateContext)];

export const GlobState = ({ children }) => {
  const [state, dispatch] = React.useReducer((state, newVal) => ({ ...state, ...newVal }), defaultGlobalState);
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>{children}</dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};
