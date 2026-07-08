import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);

    if (data.id === "admin123" && data.password === "admin1234") {
      alert("로그인 성공!");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-5">
      <div className="w-full max-w-[420px] bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>

        <p className="text-center text-gray-500 mb-8">
          아이디와 비밀번호를 입력하세요.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold">아이디</label>

            <input
              type="text"
              placeholder="아이디 입력"
              {...register("id", {
                required: "아이디를 입력하세요.",
                minLength: {
                  value: 4,
                  message: "아이디는 4글자 이상 입력하세요.",
                },
                maxLength: {
                  value: 12,
                  message: "아이디는 12글자 이하로 입력하세요.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "아이디는 영문과 숫자만 입력 가능합니다.",
                },
              })}
              className={`
                w-full p-3 border rounded-lg outline-none
                ${errors.id ? "border-red-500" : "border-gray-300"}
              `}
            />

            {errors.id && (
              <p className="text-red-500 text-sm mt-2">
                {errors.id.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold">비밀번호</label>

            <input
              type="password"
              placeholder="비밀번호 입력"
              {...register("password", {
                required: "비밀번호를 입력하세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8글자 이상 입력하세요.",
                },
                maxLength: {
                  value: 20,
                  message: "비밀번호는 20글자 이하로 입력하세요.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/,
                  message: "비밀번호는 영문과 숫자를 포함해야 합니다.",
                },
              })}
              className={`
                w-full p-3 border rounded-lg outline-none
                ${errors.password ? "border-red-500" : "border-gray-300"}
              `}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`
              w-full py-3 rounded-lg text-white font-bold transition
              ${
                isValid
                  ? "bg-blue-500 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }
            `}
          >
            로그인
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          테스트 계정
          <br />
          ID : <strong>admin123</strong>
          <br />
          PW : <strong>admin1234</strong>
        </div>
      </div>
    </div>
  );
}

export default Login;