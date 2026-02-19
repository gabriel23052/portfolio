import Header from "./header/Header";
import Hero from "./hero/Hero";
import Skills from "./Skills";
import Projects from "./projects/Projects";

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
      <Projects />
    </DarkModeContextProvider>
  );
};

export default App;

