import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Suspence from "./suspence";
import Transition from "./transition";
import { IComponentDetails } from "../layout";
import WelcomePage, { IWelcomePage } from "../welcomePage";

interface IMiscProps {
  activeRouteComponentDetails?: IComponentDetails;
}
interface INewComponent {
  [key: string]: (props: IWelcomePage) => JSX.Element;
}
export default function ReactAndJSLearnings(props: IMiscProps) {
  const { t } = useTranslation();
  const welcomeMsg: any = t("welcomeMsgSubRoutePage", {
    returnObjects: true
  });
  const components: INewComponent = {
    welcomePage: WelcomePage,
    suspence: Suspence,
    transition: Transition
  };
  const { activeRouteComponentDetails } = props;
  const [RenderComp, setRenderComp] = useState("welcomePage");

  let FeatureComponent = components[RenderComp] as React.ElementType;

  useEffect(() => {
    if (activeRouteComponentDetails) {
      setRenderComp(activeRouteComponentDetails.componentName);
    }
  }, [activeRouteComponentDetails]);

  if (RenderComp) {
    FeatureComponent = components[RenderComp] as React.ElementType;
  }

  return activeRouteComponentDetails &&
    activeRouteComponentDetails.componentName ? (
    <FeatureComponent />
  ) : (
    <WelcomePage welcomeMsg={welcomeMsg.reactAndJs} />
  );
}
