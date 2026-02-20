import Header from "./header/Header";
import Hero from "./hero/Hero";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import Certificates from "./certificates/Certificates";

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
      <Certificates />
    </DarkModeContextProvider>
  );
};

export default App;

