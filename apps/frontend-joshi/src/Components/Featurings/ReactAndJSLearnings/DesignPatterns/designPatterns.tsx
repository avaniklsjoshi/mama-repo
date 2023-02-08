import ContainerAndPresentational from "./containerAndPresentational";
import ContextAPI from "./contextAPI";
import ContextAPIHook from "./contextAPIHook";
import ContextAPIWithoutSettingDefaults from "./contextAPIWithoutSettingDefaults";
import HOC from "./hoc";
import Hooks from "./hooks";
import RenderProps from "./renderProps";

export default function DesignPatterns() {
  return (
    <div>
      Design Patterns!!!!
      <div>
        1. Container And Presentational:
        <ContainerAndPresentational />
      </div>
      <div>
        2. HOC:
        <HOC />
      </div>
      <div>
        3. Render Props:
        <RenderProps />
      </div>
      <div>
        4. Hooks:
        <Hooks />
      </div>
      <div>
        5.a Context API:
        <ContextAPI />
      </div>
      <div>
        5.b Context API Without Setting Defaults:
        <ContextAPIWithoutSettingDefaults />
      </div>
      <div>
        5.c Context API Hook:
        <ContextAPIHook />
      </div>
      <div>6. Redux Model</div>
    </div>
  );
}
