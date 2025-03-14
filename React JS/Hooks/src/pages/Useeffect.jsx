import React, { useEffect, useState } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, []); // Run only once when the component mounts

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default Useeffect;
