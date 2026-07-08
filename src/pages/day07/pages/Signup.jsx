import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = (data) => {
    const userData = {
      userId: data.userId,
      password: data.password,
      name: data.name,
      email: data.email,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-5">
      <div className="w-full max-w-[460px] bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-8">회원가입</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="이름"
              {...register("name", {
                required: "이름을 입력하세요.",
              })}
              className="w-full border p-3 rounded-lg"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.name?.message}
            </p>
          </div>

          <div>
            <input
              type="text"
              placeholder="아이디"
              {...register("userId", {
                required: "아이디를 입력하세요.",
                minLength: {
                  value: 4,
                  message: "아이디는 4글자 이상입니다.",
                },
                maxLength: {
                  value: 12,
                  message: "아이디는 12글자 이하입니다.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "영문과 숫자만 입력 가능합니다.",
                },
              })}
              className="w-full border p-3 rounded-lg"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.userId?.message}
            </p>
          </div>

          <div>
            <input
              type="email"
              placeholder="이메일"
              {...register("email", {
                required: "이메일을 입력하세요.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
              })}
              className="w-full border p-3 rounded-lg"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <input
              type="password"
              placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호를 입력하세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8글자 이상입니다.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                  message: "영문과 숫자를 포함해야 합니다.",
                },
              })}
              className="w-full border p-3 rounded-lg"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.password?.message}
            </p>
          </div>

          <div>
            <input
              type="password"
              placeholder="비밀번호 확인"
              {...register("passwordCheck", {
                required: "비밀번호 확인을 입력하세요.",
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
              className="w-full border p-3 rounded-lg"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.passwordCheck?.message}
            </p>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 rounded-lg text-white font-bold ${
              isValid
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            회원가입
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          이미 계정이 있나요?{" "}
          <Link to="/" className="text-blue-500 font-bold">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;