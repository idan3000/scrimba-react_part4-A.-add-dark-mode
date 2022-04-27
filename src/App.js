import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  const [darkModeState, setDarkModeState] = useState(true);

  const changeMode = () => setDarkModeState(!darkModeState);

  return (
    <div className="container">
      <Navbar darkMode={darkModeState} toggleDarkMode={changeMode} />
      <Main darkMode={darkModeState} />
    </div>
  );
};

export default App;
