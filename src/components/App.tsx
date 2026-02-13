import Header from "./Header";
import Hero from "./Hero";

import { DarkModeContextProvider } from "../contexts/DarkModeContext";

/**
 * Componente pai da aplicação
 */
const App = () => {
  return (
    <DarkModeContextProvider>
      <Header />
      <Hero />
    </DarkModeContextProvider>
  );
};

export default App;

