import { useReducer } from "react";
interface Istate {
  count: number;
  showText: boolean;
}

// An interface for our actions
interface CountAction {
  type: string;
  payload?: number | boolean;
}
const initialState: Istate = { count: 0, showText: true };
const reducer = (state: Istate, action: CountAction) => {
  switch (action.type) {
    case "INC_COUNT":
      return {
        ...state,
        count: state.count + 1
      };
    case "TOGGLE_SHOW_TEXT":
      return {
        ...state,
        showText: !state.showText
      };
    default:
      return state;
  }
};
export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = () => {
    dispatch({ type: "INC_COUNT" });
    dispatch({ type: "TOGGLE_SHOW_TEXT" });
  };
  return (
    <div>
      <div>{state.count}</div>
      <div>
        <button onClick={clickHandler}>Click Me!</button>
      </div>
      <div>{state.showText && "Avani"}</div>
    </div>
  );
}
