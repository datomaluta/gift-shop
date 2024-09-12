"use client";
import Hero from "@/components/home/Hero";
import { decrement, increment } from "@/store/slices/exampleSlice";
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";

function Page() {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();
  return (
    <>
      <Hero />
    </>
  );
}

export default Page;
