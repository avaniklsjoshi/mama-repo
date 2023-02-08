import Promises from "./CallbacksPromisesAsyncAwait/promises";
import Closures from "./closures";
import DesignPatterns from "./DesignPatterns/designPatterns";
import MapFilterReduce from "./mapFilterReduce";
import RandomAjaxCall from "./randomAjaxCall";
import ReactHooks from "./ReactHooks/reactHooks";
import Suspence from "./SuspenseAndSWR/suspence";
import ThrottlingAndDebouncing from "./ThrottlingAndDebouncing/ThrottlingAndDebouncing";
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
    reactHooks: ReactHooks,
    mapFilterReduce: MapFilterReduce,
    promises: Promises,
    throttlingAndDebouncing: ThrottlingAndDebouncing,
    designPatterns: DesignPatterns,
    randomAjaxCall: RandomAjaxCall,
    closures: Closures
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
