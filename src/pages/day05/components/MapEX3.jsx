import { useState } from "react";
import {snsList} from "../data/data.js";

// 전체를 클릭하면 데이터 배열 전체를 반환
// 특정 탭메뉴를 클릭하면 해당 탭메뉴의 이름에 맞는 데이터를 필터링 하여 반환

function MapEX3() {
  const [category, setCategory] = useState("전체");

  const filteredList =
    category === "전체"
      ? snsList
      : snsList.filter((site) => site.category === category);

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        filter() 예제
      </h1>

      <div className="flex justify-center gap-3 mb-8">
        {["전체", "포털", "검색", "영상", "SNS", "개발", "AI"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-full font-bold transition ${
              category === item
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredList.map((site) => (
          <div key={site.id} className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">{site.icon}</div>

            <h2 className="text-2xl font-bold">{site.title}</h2>

            <p className="text-blue-500 font-semibold mt-1">
              {site.category}
            </p>

            <p className="text-gray-600 mt-3">
              {site.description}
            </p>

            <button
              onClick={() => window.open(site.url, "_blank")}
              className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              사이트 이동
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapEX3;