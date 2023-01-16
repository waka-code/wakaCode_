import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterNav from "./components/routes/RouterNav";
import RoutePages from "./components/routes/RoutePage";
import { useState } from "react";
import { useEffect } from "react";

//IMG
import loading from "./img/astronaut.gif";

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
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <BrowserRouter>
          <div className="App">
            <RouterNav t={t} handleChangeLng={handleChangeLng}/>
            <RoutePages t={t}/>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
