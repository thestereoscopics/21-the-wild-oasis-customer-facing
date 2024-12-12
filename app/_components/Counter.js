"use client";
import { useState } from "react";

export default function Counter({ counts }) {
  const [count, setCount] = useState(counts);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
