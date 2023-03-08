//TODO: also check useLayoutEffect and useMutationEffect
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function UseEffectHook() {
  const name = "Hooks!";
  const { t } = useTranslation();
  const docTitleName: any = t("docTitleName", {
    returnObjects: true
  });

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
      document.title = docTitleName["features"];
    };
  }, [docTitleName]);

  return <>Check doc Title, </>;
}
