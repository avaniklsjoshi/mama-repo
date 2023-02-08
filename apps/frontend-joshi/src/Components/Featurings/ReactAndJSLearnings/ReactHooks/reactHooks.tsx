import UseCallbackHook from "./useCallbackHook";
import UseContextHook from "./useContextHook";
import UseEffectHook from "./useEffectHook";
import UseMemoHook from "./useMemoHook";
import UseReducerHook from "./useReducerHook";
import UseRefHook from "./useRefHook";
import UseStateHook from "./useStateHook";

export default function ReactHooks() {
  return (
    <div>
      <div>
        1. Use State Hook:
        <UseStateHook />
      </div>
      <div>
        2. Use Effect Hook:
        <UseEffectHook />
      </div>
      <div>
        3. Use Context Hook:
        <UseContextHook />
      </div>
      <div>
        4. Use Ref Hook:
        <UseRefHook />
      </div>
      <div>
        5. Use Memo Hook:
        <UseMemoHook />
      </div>

      <div>
        6. Use Callback Hook:
        <UseCallbackHook />
      </div>
      <div>
        7. Use Reducer Hook:
        <UseReducerHook />
      </div>
    </div>
  );
}
