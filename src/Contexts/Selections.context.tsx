import { createContext, ReactNode, useState } from "react";
import Celula from "../Components/celula";
import QuantidadeJogos from "../TScripts/jogosLogic";

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
  showResults: boolean;
  setShowResults: (c: boolean) => void;
};

const initialValue = {
  jogo: 6,
  setJogo: () => {},
  quantidade: 1,
  setQuantidade: () => {},
  jogoTipo: "mega",
  setJogoTipo: () => {},
  showResults: false,
  setShowResults: () => {},
};

export const SelectContext = createContext<SelectContextType>(initialValue);

export const SelectContextProvider = ({ children }: SelectContextProps) => {
  const [jogo, setJogo] = useState(initialValue.jogo);
  const [quantidade, setQuantidade] = useState(initialValue.quantidade);
  const [jogoTipo, setJogoTipo] = useState(initialValue.jogoTipo);
  const [showResults, setShowResults] = useState(initialValue.showResults);

  return (
    <SelectContext.Provider
      value={{
        jogo,
        setJogo,
        quantidade,
        setQuantidade,
        jogoTipo,
        setJogoTipo,
        showResults,
        setShowResults,
      }}
    >
      {children}
      {showResults && (
        <div
          style={{
            borderRadius: "6px",
            boxShadow:
              "5px 5px 10px rgba(0,0,0,.2), -5px -5px 10px rgba(0,0,0,.2)",
            margin: "10px auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {QuantidadeJogos(jogoTipo, jogo, quantidade).map((games) => (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "10px auto",
                columnGap: "5px",
              }}
            >
              {games.map((game) => (
                <Celula numero={game} jogo={jogoTipo} />
              ))}
            </div>
          ))}
        </div>
      )}
    </SelectContext.Provider>
  );
};
