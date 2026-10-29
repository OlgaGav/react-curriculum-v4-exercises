// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/**
 * StrictMode help to catch any issues and side effect on early stage of development.
 * It's technocally validate the clean up when component upmount. So it runs mount>unmount>mount
 * In this particluar case, it was clear that issue that clean up is happening not as expected.
 * As result - the same instance of timer was used. Issue is fixed with proper clean up component as it intended to run only on component mount stage.
 */
