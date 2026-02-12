import Header from "./Header";

import { DarkModeContextProvider } from "../contexts/DarkModeContext";

/**
 * Componente pai da aplicação
 */
const App = () => {
  return (
    <DarkModeContextProvider>
      <Header />
    </DarkModeContextProvider>
  );
};

export default App;

