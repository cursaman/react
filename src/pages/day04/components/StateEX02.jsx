import { useState } from "react";

function StateEX02() {
  const [count, setCount] = useState(0);     //리엑트 상태관리를 해줌, state는 컴포넌트 내부에서 관리하는 값 

  return (
    <div className="h-screen flex items-center justify-center bg-amber-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center gap-5">

        <h1 className="text-3xl font-bold">Testing</h1>

        <div className="text-6xl font-bold text-blue-500">
          {count}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="w-16 h-16 rounded-full bg-blue-500 text-white text-3xl hover:bg-blue-600 transition"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="w-16 h-16 rounded-full bg-red-500 text-white text-3xl hover:bg-red-600 transition"
          >
            -
          </button>
        </div>

      </div>
    </div>
  );
}

export default StateEX02;