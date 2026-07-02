//import "../../../style/style.css";

function StyleEx() {

    const w = 500;

  return (
    <>
      <div
        style={{
          width: w,
          height: w/2,
          backgroundColor: "lavender",
          padding: "20px",
          margin: "20px",
          borderRadius: "15px",
          border: "2px solid #ddd",
        }}
      >
        인라인 스타일
      </div>

      <div className="box">외부 스타일</div>
    </>
  );
}

export default StyleEx;