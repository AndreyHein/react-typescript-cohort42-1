import { useState } from "react";

import Button from "components/Button/Button";

import "./styles.css";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const onPlus = () => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onMinus = () => {
    setCount((prevValue: number) => {
      return prevValue - 1;
    });
  };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
