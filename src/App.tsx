import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { routes } from "./routes/routes";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route key={i} path={route.path} element={<route.component />} />
            );
          })}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
