import Router, { Route } from "preact-router";
import { useState } from "preact/hooks";
import "./app.css";
import Landing from "./pages/Landing";
import Sent from "./components/Sent";
export function App() {
  return (
    <>
      <Landing />
      <Router>
        <Route path="/sentBox" component={Sent} />
      </Router>
    </>
  );
}
