import { useEffect, useState } from "react";
import ChatBot from "./chatBot";
import CodingArea from "./codingArea";
import Meme from "./meme";
import WelcomePage, { IWelcomePage } from "../welcomePage";

interface IMiscProps {
  activeRouteComponentDetails?: any;
}
interface INewComponent {
  [key: string]: (props: IWelcomePage) => JSX.Element;
}
export default function MiscellaneousCoolStuff(props: IMiscProps) {
  const components: INewComponent = {
    welcomePage: WelcomePage,
    chatBot: ChatBot,
    codingArea: CodingArea,
    meme: Meme
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

  return (
    <>
      {activeRouteComponentDetails &&
      activeRouteComponentDetails.componentName ? (
        <FeatureComponent />
      ) : (
        <WelcomePage welcomeMsg="Welcome to ui page!" />
      )}
    </>
  );
}
