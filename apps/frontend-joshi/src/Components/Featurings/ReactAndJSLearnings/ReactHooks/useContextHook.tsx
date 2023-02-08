import React, { useContext } from "react";

export const LanguageContext = React.createContext({ lang: "en" });

export default function UseContextHook() {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <p>Your selected language: {lang}</p>
    </>
  );
}
