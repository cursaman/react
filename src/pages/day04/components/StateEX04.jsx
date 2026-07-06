import { useState } from "react";

function StateEX04() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`
        h-screen flex items-center justify-center
        transition-all duration-500
        ${dark ? "bg-gray-900" : "bg-amber-200"}
      `}
    >
      <div
        className={`
          w-96 p-8 rounded-2xl shadow-xl text-center
          transition-all duration-500
          ${dark ? "bg-gray-800 text-white" : "bg-white text-black"}
        `}
      >
        <h1 className="text-3xl font-bold mb-4">
          {dark ? "Dark Mode" : "Light Mode"}
        </h1>

        <p className="mb-6">
          버튼을 클릭하면 화면 모드가 변경됩니다.
        </p>

        <button
          onClick={() => setDark(!dark)}
          className={`
            px-6 py-3 rounded-full font-bold
            transition-all duration-300
            ${dark
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-gray-900 text-white hover:bg-gray-700"
            }
          `}
        >
          {dark ? "☀️ 라이트모드" : "🌙 다크모드"}
        </button>
      </div>
    </div>
  );
}

export default StateEX04;