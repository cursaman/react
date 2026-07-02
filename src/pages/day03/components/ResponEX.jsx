function ResponsiveEX() {
  return (
    <div className="min-h-screen bg-gray-100 p-5 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Tailwind 반응형 예제
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">Card 1</h2>
          <p className="text-gray-600">
            모바일에서는 1개씩, 태블릿에서는 2개씩, PC에서는 3개씩 보입니다.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">Card 2</h2>
          <p className="text-gray-600">
            화면 크기에 따라 grid 컬럼 개수가 달라집니다.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">Card 3</h2>
          <p className="text-gray-600">
            Tailwind는 `md:`, `lg:` 같은 접두어로 반응형을 만듭니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveEX;