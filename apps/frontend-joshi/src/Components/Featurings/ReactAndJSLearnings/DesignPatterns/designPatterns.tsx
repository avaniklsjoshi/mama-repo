import ContainerAndPresentational from "./containerAndPresentational";
import HOC from "./hoc";
import Hooks from "./hooks";
import RenderProps from "./renderProps";

export default function DesignPatterns() {
  return (
    <div>
      Design Patterns!!!!
      <div>
        ContainerAndPresentational:
        <ContainerAndPresentational />
      </div>
      <div>
        HOC:
        <HOC />
      </div>
      <div>
        Render Props:
        <RenderProps />
      </div>
      <div>
        Hooks:
        <Hooks />
      </div>
    </div>
  );
}
