import {snsList} from "../data/data.js";

function MapEX() {

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-3">
        🌎 SNS & WEB SITE COLLECTION
      </h1>

      <p className="text-center text-gray-500 mb-10">
        map()을 활용한 사이트 목록 출력 예제
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {snsList.map((site) => (
          <div
            key={site.id}
            className="
              bg-white
              rounded-2xl
              shadow-lg
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="text-6xl text-center mb-4">
              {site.icon}
            </div>

            <h2 className="text-2xl font-bold text-center">
              {site.title}
            </h2>

            <p className="text-center text-blue-500 font-semibold mt-1">
              {site.category}
            </p>

            <p className="text-gray-600 text-center mt-4 h-16">
              {site.description}
            </p>

            <div className="text-center mt-3">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {site.tag}
              </span>
            </div>

            <button
              onClick={() => window.open(site.url, "_blank")}
              className="
                mt-6
                w-full
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-3
                rounded-xl
                transition
                font-bold
              "
            >
              🚀 사이트 이동
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapEX;