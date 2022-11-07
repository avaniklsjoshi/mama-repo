import "./app.scss";
import { useEffect, useReducer } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "../Components/Featurings/layout";
import MiscellaneousCoolStuff from "../Components/Featurings/MiscellaneousCoolStuff/miscellaneousCoolStuff";
import ReactAndJSLearnings from "../Components/Featurings/ReactAndJSLearnings/reactAndJSLearnings";
import UILearnings from "../Components/Featurings/UILearnings/uiLearnings";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import AdminPage from "../Components/Views/AdminPage";
import FeaturesPage from "../Components/Views/FeaturesPage";
import LandingPage from "../Components/Views/LandingPage";
import NotFoundPage from "../Components/Views/NotfoundPage";
import { ROUTES, SUB_ROUTE_NAMES } from "../Configs/Constants/const";
import GlobalStyle from "../Theme/global";
import { IPlaceThemeProvider, PlaceThemeContext } from "../Theme/themeContext";
import ThemeReducer from "../Theme/themeReducer";
import { useTheme } from "../Theme/useTheme";

function App() {
  const { theme, themeLoaded } = useTheme();
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, []);
  const themeContextProviderValue: IPlaceThemeProvider = {
    currentTheme,
    setNewTheme
  };

  useEffect(() => {
    if (theme) {
      setNewTheme(theme);
      return;
    }
  }, [theme]);

  return (
    <PlaceThemeContext.Provider value={themeContextProviderValue}>
      {themeLoaded && (
        <ThemeProvider theme={currentTheme.updatedTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <div className="App">
              <Header />
              <div className="content-section">
                <Routes>
                  <Route path={ROUTES.HOME} element={<LandingPage />} />
                  <Route path={ROUTES.FEATURES} element={<FeaturesPage />} />
                  <Route
                    path={ROUTES.UI_FEATURES}
                    element={
                      <Layout routeName={SUB_ROUTE_NAMES.UI_LEARNINGS}>
                        <UILearnings />
                      </Layout>
                    }
                  />

                  <Route
                    path={ROUTES.REACT_AND_JS_FEATURES}
                    element={
                      <Layout
                        routeName={SUB_ROUTE_NAMES.REACT_AND_JS_LEARNINGS}
                      >
                        <ReactAndJSLearnings />
                      </Layout>
                    }
                  />
                  <Route
                    path={ROUTES.MISCELLANEOUS_FEATURES}
                    element={
                      <Layout routeName={SUB_ROUTE_NAMES.MISC_LEARNINGS}>
                        <MiscellaneousCoolStuff />
                      </Layout>
                    }
                  />
                  <Route path={ROUTES.ADMIN} element={<AdminPage />} />
                  <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </PlaceThemeContext.Provider>
  );
}

export default App;
