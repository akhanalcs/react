// Shows usage of useRef and useState hook
import { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState<null | number>(null);
  const [now, setNow] = useState<null | number>(null);
  const intervalIdRef = useRef<null | NodeJS.Timeout>(null);

  function startTimer() {
    setStartTime(Date.now());
    setNow(Date.now());

    // If someone clicks the Start button many times, we want to clear all before the current one
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }

    // When you use setInterval(), you are asking the JavaScript engine to repeatedly execute a
    // specified function every certain period of time (the interval), until you tell it to stop
    // by using clearInterval(). The ID returned by setInterval() is essentially a handle or reference
    // to that repeating task.
    intervalIdRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000); // Call setNow(Date.now()) every 10 ms so that 'now' increases over time

    // When 'StartTimer()' is called, we get some intervalIdRef. For eg: 1
    // If you call StartTimer() again by clicking the button, it would increase to 2
    console.log("intervalIdRef inside StartTimer:" + intervalIdRef.current);
  }

  function stopTimer() {
    console.log("intervalIdRef inside StopTimer:" + intervalIdRef.current);
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time Passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}
