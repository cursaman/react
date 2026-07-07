function MapEX() {
  const users = [
    { id: 1, name: "철수", title: "1호", url: "https://www.naver.com", coments : "잘생긴 남자"},
    { id: 2, name: "영희", title: "2호", url: "https://www.naver.com", coments : "예쁜 여자" },
    { id: 3, name: "민수", title: "3호", url: "https://www.naver.com", coments : "건강한 남자" },
    { id: 4, name: "길동", title: "4호", url: "https://www.naver.com", coments : "서자인 남자" },
    { id: 5, name: "강남", title: "5호", url: "https://www.naver.com", coments : "돈많은 남자" },
    { id: 6, name: "혁수", title: "6호", url: "https://www.naver.com", coments : "멋진 남자" }
  ];

  return (
    <div className="flex flex-col gap-5 p-10">

      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-lg rounded-xl p-5 flex justify-between items-center"
        >
          <h3 className="text-xl font-bold">
            {user.name}님
          </h3>

          <h3 className="text-xl font-bold">
            {user.title} 타이틀
          </h3>

          <h3 className="text-xl font-bold">
           설명은? {user.coments} 
          </h3>

          <button
            onClick={() => window.open(user.url, "_blank")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            보기
          </button>
        </div>
      ))}

    </div>
  );
}

export default MapEX;