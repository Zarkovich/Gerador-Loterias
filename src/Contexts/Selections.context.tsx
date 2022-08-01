import { createContext, ReactNode, useState } from "react";

type SelectContextProps = {
  children: ReactNode;
};

type SelectContextType = {
  jogo: number;
  setJogo: (c: number) => void;
  quantidade: number;
  setQuantidade: (c: number) => void;
  jogoTipo: string;
  setJogoTipo: (c: string) => void;
};

const initialValue = {
  jogo: 6,
  setJogo: () => {},
  quantidade: 1,
  setQuantidade: () => {},
  jogoTipo: "mega",
  setJogoTipo: () => {},
};

export const SelectContext = createContext<SelectContextType>(initialValue);

export const SelectContextProvider = ({ children }: SelectContextProps) => {
  const [jogo, setJogo] = useState(initialValue.jogo);
  const [quantidade, setQuantidade] = useState(initialValue.quantidade);
  const [jogoTipo, setJogoTipo] = useState(initialValue.jogoTipo);

  return (
    <SelectContext.Provider
      value={{
        jogo,
        setJogo,
        quantidade,
        setQuantidade,
        jogoTipo,
        setJogoTipo,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};
