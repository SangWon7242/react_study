"use client";

import { useState } from "react";

export default function Home() {
  const [no, setNo] = useState(0);

  return (
    <div>
      <h1>no : {no}</h1>
      <div>
        <button onClick={() => setNo(no + 1)}>증가</button>
        <button onClick={() => setNo(no - 1)}>감소</button>
      </div>
    </div>
  );
}
