import Inputs from "./Components/Inputs";
import { SelectContextProvider } from "./Contexts/Selections.context";

function App() {
  return (
    <>
      <SelectContextProvider>
        <Inputs />
      </SelectContextProvider>
    </>
  );
}

export default App;
