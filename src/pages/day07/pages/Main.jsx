import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">메인 페이지</h1>

        <p className="mb-6">
          {user?.name}님 환영합니다.
        </p>

        <button
          onClick={logoutHandler}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default Main;