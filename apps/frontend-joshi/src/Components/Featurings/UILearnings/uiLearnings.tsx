import { useEffect, useState } from "react";
import BubbleEffect from "./bubbleEffect";
import DesignerTitle from "./designerTitle";
import Parallax from "./parallax";
import { IComponentDetails } from "../layout";
import WelcomePage, { IWelcomePage } from "../welcomePage";

interface IMiscProps {
  activeRouteComponentDetails?: IComponentDetails;
}
interface INewComponent {
  [key: string]: (props: IWelcomePage) => JSX.Element;
}
export default function UILearnings(props: IMiscProps) {
  const components: INewComponent = {
    welcomePage: WelcomePage,
    parallax: Parallax,
    bubbleEffect: BubbleEffect,
    designerTitle: DesignerTitle
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
    <WelcomePage welcomeMsg="Welcome to ui page!" />
  );
}
