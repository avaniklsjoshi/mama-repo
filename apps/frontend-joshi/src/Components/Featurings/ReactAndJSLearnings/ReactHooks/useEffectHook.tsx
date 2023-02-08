//TODO: also check  useLayoutEffect and useMutationEffect

import { useEffect } from "react";

export default function UseEffectHook() {
  const name = "Hooks!";

  useEffect(() => {
    document.title = `Hello ${name}`;
  }, [name]);

  useEffect(() => {
    const handler = () => {
      document.title = (window as any).innerWidth;
    };
    window.addEventListener("resize", handler);

    // ✅  compiles
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return <>Check doc Title, </>;
}
