import { ThemeProvider } from "@emotion/react";
import Material from "./components/pages/material/Material";
import MaterialComponents from "./components/pages/material/MaterialComponents";
import { customTheme, customThemeDark } from "./themeConfig";
import { useState } from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeMode = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={isDark ? customThemeDark : customTheme}>
      <div>
        {/* <Material /> */}
        <MaterialComponents />

        {/* <button onClick={changeMode}>Cambiar modo</button> */}

        {isDark === true ? (
          <div onClick={changeMode}>
            <LightModeIcon />
          </div>
        ) : (
          <div onClick={changeMode}>
            <ModeNightIcon />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
