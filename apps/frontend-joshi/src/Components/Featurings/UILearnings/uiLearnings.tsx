import BubbleEffect from "./bubbleEffect";
import DesignerTitle from "./designerTitle";
import Parallax from "./parallax";
import ResponsiveWOMediaQuery from "./ResponsiveWOMediaQuery/responsiveWOMediaQuery";
import { useActiveComponent } from "../../../Utils/Hooks/useActiveComponent";
import { useWelcomeMsg } from "../../../Utils/Hooks/useWelcomeMsg";
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
    designerTitle: DesignerTitle,
    responsiveWOMediaQuery: ResponsiveWOMediaQuery
  };
  const { activeRouteComponentDetails } = props;

  const welcomeMsg = useWelcomeMsg("ui");
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
