import React from "react";

export const AppContext = React.createContext({
  authenticated: true,
  lang: "en",
  theme: "dark"
});

export default function ContextAPI() {
  return (
    <AppContext.Provider
      value={{
        lang: "de",
        authenticated: false,
        theme: "light"
      }}
    >
      <Header />
    </AppContext.Provider>
  );
}

const Header = () => {
  return (
    <AppContext.Consumer>
      {({ authenticated }) => {
        if (authenticated) {
          return <h1>Logged in!</h1>;
        }
        return <h1>You need to sign in</h1>;
      }}
    </AppContext.Consumer>
  );
};
