import { useRef, useState } from "react";
import TallContent from "./tallContent";
import "./throttling.scss";

export default function Throttling() {
  const [scrollHandleCount, setScrollHandleCount] = useState(0);
  const [scrollThrottleHandleCount, setScrollThrottleHandleCount] = useState(0); // Number of event handler calls with Throttle
  const [scrollDebounceHandleCount, setScrollDebounceHandleCount] = useState(0);

  const throttleInProgress = useRef(false);
  const timerDebounceRef = useRef(0);

  function handleScroll() {
    handleUsualScroll();
    handleThrottleScroll();
    handleDebounceScroll();
  }
  function handleUsualScroll() {
    setScrollHandleCount((prevState) => {
      return ++prevState;
    });
  }
  function handleThrottleScroll() {
    // If the state is inProgress - exit the function, skip event processing
    if (throttleInProgress.current) {
      return;
    }
    // Set inProgress to true and start the timer
    throttleInProgress.current = true;
    setTimeout(() => {
      // Increment the throttleHandleCount state by one
      setScrollThrottleHandleCount((prevState) => {
        return ++prevState;
      });
      // Set inProgress to false, which means that setTimeout will work again on the next run
      throttleInProgress.current = false;
    }, 500);
  }
  function handleDebounceScroll() {
    // If the timer ID is set, reset the timer
    if (timerDebounceRef.current) {
      clearTimeout(timerDebounceRef.current);
    }
    // We start the timer, the returned timer ID is written to timerDebounceRef
    timerDebounceRef.current = window.setTimeout(() => {
      // Increasing the counter for the number of executions of the business logic of the application with Debounce
      setScrollDebounceHandleCount((prevState) => {
        return ++prevState;
      });
    }, 500);
  }
  return (
    <div>
      <h1>Throttle & Debounce</h1>
      <span>Usual scroll handle count: {scrollHandleCount}</span>
      <br />
      <span>Throttle scroll handle count: {scrollThrottleHandleCount}</span>
      <br />
      <span>Debound scroll handle count: {scrollDebounceHandleCount}</span>
      <br />
      <div className="l-scroll" onScroll={handleScroll}>
        <div className="scroll-content">
          <TallContent />
        </div>
      </div>
    </div>
  );
}
