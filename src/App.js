import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#274666";
      showalert("sucess", "Dark mode enabled");
      document.title = "textutils dark mode";
      setTimeout(() => {
        document.title = "textutils amazing";
      }, 2000);
      setTimeout(() => {
        document.title = "textutils install it";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("sucess", "Dark mode disabled");
      document.title = "textutils light mode";
    }
  }

  function showalert(alertState, msg) {
    setAlert({
      msg: msg.substring(0, 1).toUpperCase() + msg.substring(1),
      alertState:
        alertState.substring(0, 1).toUpperCase() + alertState.substring(1),
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="textutils"
        aboutText="about us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
         {/* <Switch>
          <Route exact path="/"> */}
            <TextForm
              heading="analyse your text"
              mode={mode}
              showalert={showalert}
            />
          {/* </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App
