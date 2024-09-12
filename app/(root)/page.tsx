"use client";
import { decrement, increment } from "@/store/slices/exampleSlice";
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";

function Page() {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Page;
