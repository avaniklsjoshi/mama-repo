import Promises from "./CallbacksPromisesAsyncAwait/promises";
import MapFilterReduce from "./mapFilterReduce";
import Suspence from "./suspence";
import ThrottlingAndDebouncing from "./ThrottlingAndDebouncing/ThrottlingAndDebouncing";
import Transition from "./transition";
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
export default function ReactAndJSLearnings(props: IMiscProps) {
  const components: INewComponent = {
    welcomePage: WelcomePage,
    suspence: Suspence,
    transition: Transition,
    mapFilterReduce: MapFilterReduce,
    promises: Promises,
    throttlingAndDebouncing: ThrottlingAndDebouncing
  };
  const { activeRouteComponentDetails } = props;

  const welcomeMsg = useWelcomeMsg("reactAndJs");
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
