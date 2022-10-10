import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addAction, minusAction } from "../../redux/action/counter.action";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  return (
    <div className="counter">
      <button
        onClick={() => {
          dispatch(addAction());
        }}
      >
        +
      </button>
      <label>{count}</label>
      <button
        onClick={() => {
          dispatch(minusAction());
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
