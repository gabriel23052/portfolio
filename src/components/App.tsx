import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";

import { DarkModeContextProvider } from "../contexts/DarkModeContext";
/**
 * Componente pai da aplicação
 */
const App = () => {
  return (
    <DarkModeContextProvider>
      <Header />
      <Hero />
      <Skills />
    </DarkModeContextProvider>
  );
};

export default App;

