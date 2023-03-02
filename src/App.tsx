import React from "react";
import { Layout } from "./components/layout";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Proyects } from "./pages/Proyects";
import { Resume } from "./pages/Resume";
function App() {
  return (
    <Layout>
      <Home />
      <AboutMe />
      <Proyects />
      <Resume />
      <Contact />
    </Layout>
  );
}

export default App;
