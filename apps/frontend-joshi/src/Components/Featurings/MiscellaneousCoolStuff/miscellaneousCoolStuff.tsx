import ChatBot from "./chatBot";
import CodingArea from "./codingArea";
import CountryCapitalGame from "./countryCapitalGame";
import LongestPalindrome from "./Leetcode/longestPalindrome";
import Meme from "./meme";
import { useActiveComponent } from "../../../Utils/Hooks/useActiveComponent";
import { useWelcomeMsg } from "../../../Utils/Hooks/useWelcomeMsg";
import { IComponentDetails } from "../layout";
import WelcomePage, { IWelcomePage } from "../welcomePage";

interface IMiscProps {
  activeRouteComponentDetails?: IComponentDetails;
}
export interface INewComponent {
  [key: string]: (props: IWelcomePage) => JSX.Element;
}
export default function MiscellaneousCoolStuff(props: IMiscProps) {
  const { activeRouteComponentDetails } = props;
  const components: INewComponent = {
    welcomePage: WelcomePage,
    chatBot: ChatBot,
    longestPalindrome: LongestPalindrome,
    codingArea: CodingArea,
    meme: Meme,
    countryCapitalGame: CountryCapitalGame
  };

  const welcomeMsg = useWelcomeMsg("misc");
  const RenderComp = useActiveComponent(
    activeRouteComponentDetails?.componentName
  );

  let FeatureComponent = components[RenderComp] as React.ElementType;

  if (RenderComp) {
    FeatureComponent = components[RenderComp] as React.ElementType;
  }

  return activeRouteComponentDetails &&
    activeRouteComponentDetails.componentName ? (
    <FeatureComponent />
  ) : (
    <WelcomePage welcomeMsg={welcomeMsg} />
  );
}
