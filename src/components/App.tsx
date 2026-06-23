import Header from "./header/Header";
import Hero from "./hero/Hero";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import Certificates from "./certificates/Certificates";
import Contacts from "./contacts/Contacts";

import { DarkModeContextProvider } from "../contexts/DarkModeContext";
import QuickLook from "./QuickLook";

/**
 * Componente pai da aplicação
 */
const App = () => {
  return (
    <DarkModeContextProvider>
      <Header />
      <Hero />
      <Skills />
      <QuickLook />
      <Projects />
      <Certificates />
      <Contacts />
    </DarkModeContextProvider>
  );
};

export default App;
