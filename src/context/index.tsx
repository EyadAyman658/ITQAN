import React from "react";
import { useState } from "react";
import Store,{initialState} from "./context";
import Props ,{State} from './index.interface';

const AppContext : React.FC<Props> = ({ children }): JSX.Element => {
  const [state, setContext] =useState<State>(initialState);
  return (
    <Store.Provider 
    value=
    {{
      state,
      // @ts-ignore
      setContext
    }}
    >
      {children}
    </Store.Provider>
  );
};

export default AppContext;