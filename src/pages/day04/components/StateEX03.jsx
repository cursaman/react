import { useState } from "react";

function StateEX03() {
  const [like, setLike] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center">

        <button
          onClick={() => setLike(!like)}
          className="text-7xl transition-all duration-300 hover:scale-125"
        >
          {like ? "❤️" : "🤍"}
        </button>

        <p className="mt-5 text-2xl font-bold">
          {like ? "좋아요!" : "좋아요를 눌러주세요."}
        </p>

      </div>
    </div>
  );
}

export default StateEX03;