import { useTranslation } from "react-i18next";

export function useWelcomeMsg(msgKey: string) {
  const { t } = useTranslation();
  const welcomeMsg: any = t("welcomeMsgSubRoutePage", {
    returnObjects: true
  });
  return welcomeMsg[msgKey];
}
