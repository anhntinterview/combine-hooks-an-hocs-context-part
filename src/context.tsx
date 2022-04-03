import { createContext, ReactNode, useContext, useState, useMemo } from "react";

type Context = {
  id: string;
  name: string;
  setId: (val: string) => void;
  setName: (val: string) => void;
};

const defaultValue = {
  id: "FormId",
  name: "",
  setId: () => undefined,
  setName: () => undefined
};

const FormContext = createContext<Context>(defaultValue);

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(defaultValue);

  const value = useMemo(() => {
    return {
      id: state.id,
      name: state.name,
      setId: (id: string) => setState({ ...state, id }),
      setName: (name: string) => setState({ ...state, name })
    };
  }, [state]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
