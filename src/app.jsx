import Router, { Route } from "preact-router";
import { useState } from "preact/hooks";
import "./app.css";
import Landing from "./pages/Landing";
import Sent from "./components/Sent";
import Mail from './components/Mail'
export function App() {
  return (
    <>
      {/* <Landing /> */}
      <Router>
        <Route path="/" component={Landing} />
        <Route path="/sentBox" component={Sent} />
        <Route path="/mailID/:mailID" component={Mail} />
      </Router>
    </>
  );
}
