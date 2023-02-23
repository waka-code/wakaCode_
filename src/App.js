import "./App.css";
import "./components/styles/responsive.css";
import { HashRouter } from "react-router-dom";
import RouterNav from "./components/routes/RouterNav";
import RoutePages from "./components/routes/RoutePage";
import { useState } from "react";
import { useEffect } from "react";

//i18next translate
import { useTranslation } from "react-i18next";

function App() {
  const [Loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loadingCss">
          <img
            src="https://i.postimg.cc/BZrLq9hw/astronaut.gif"
            border="0"
            alt="loading"
          />
        </div>
      ) : (
        <HashRouter>
          <div className="App">
            <RouterNav t={t} handleChangeLng={handleChangeLng} />
            <RoutePages t={t} />
          </div>
        </HashRouter>
      )}
    </>
  );
}

export default App;
