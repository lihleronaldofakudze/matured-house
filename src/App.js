import React from "react";

//React Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
