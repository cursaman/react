function TransformEX() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-12">
        Tailwind Transform & Animation
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Scale */}
        <div className="text-center">
          <h2 className="font-bold mb-4">Scale</h2>

          <div
            className="
              w-40 h-40
              mx-auto
              bg-sky-400
              rounded-xl

              transition-all
              duration-500

              hover:scale-125
            "
          ></div>
        </div>

        {/* Rotate */}
        <div className="text-center">
          <h2 className="font-bold mb-4">Rotate</h2>

          <div
            className="
              w-40 h-40
              mx-auto
              bg-pink-400
              rounded-xl

              transition-all
              duration-500

              hover:rotate-180
            "
          ></div>
        </div>

        {/* Translate */}
        <div className="text-center">
          <h2 className="font-bold mb-4">Translate</h2>

          <div
            className="
              w-40 h-40
              mx-auto
              bg-green-400
              rounded-xl

              transition-all
              duration-500

              hover:translate-x-8
              hover:-translate-y-8
            "
          ></div>
        </div>

        {/* 종합 Transform */}
        <div className="text-center">
          <h2 className="font-bold mb-4">Transform</h2>

          <div
            className="
              w-40 h-40
              mx-auto
              bg-violet-500
              rounded-xl

              transition-all
              duration-700

              hover:scale-110
              hover:rotate-12
              hover:-translate-y-4
              hover:shadow-2xl
              hover:rounded-full
            "
          ></div>
        </div>

        {/* Bounce */}
        <div className="text-center">
          <h2 className="font-bold mb-4">Bounce</h2>

          <div
            className="
              w-32 h-32
              mx-auto
              bg-red-400
              rounded-full

              animate-bounce
            "
          ></div>
        </div>

        {/* Ping */}
        <div className="text-center">
          <h2 className="font-bold mb-4">Ping</h2>

          <div className="relative flex justify-center">
            <span
              className="
                absolute
                w-20 h-20
                rounded-full
                bg-blue-400
                animate-ping
              "
            ></span>

            <span
              className="
                relative
                w-20 h-20
                rounded-full
                bg-blue-600
              "
            ></span>
          </div>
        </div>

        {/* Pulse */}
        <div className="text-center">
          <h2 className="font-bold mb-4">Pulse</h2>

          <div
            className="
              w-32 h-32
              mx-auto
              bg-yellow-400
              rounded-xl

              animate-pulse
            "
          ></div>
        </div>

        {/* Spin */}
        <div className="text-center">
          <h2 className="font-bold mb-4">Spin</h2>

          <div
            className="
              w-32 h-32
              mx-auto
              rounded-full

              border-8
              border-gray-300
              border-t-blue-500

              animate-spin
            "
          ></div>
        </div>

      </div>
    </div>
  );
}

export default TransformEX;