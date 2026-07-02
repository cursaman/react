export default function Intro({ name, age, hobby }) {


//[] : 배열  {} : 객체 () : 함수   
//export default function Intro(props) {
// 컴포넌트에 넘겨주는 변수를 props 라고 함 props는 객체로 반환함

  //console.log(props); 

  //console.log(props.name);
  //console.log(props.age);
  //console.log(props.hobby);


//최종적으로 정의한부분을 넣어버림  
//export default function Intro({name, age, hobby }) {

    return (
        <div
            style={{
                backgroundColor: "lavender",
                padding: "20px",
                margin: "20px",
                borderRadius: "15px",
                border: "2px solid #ddd"
            }}
        >
            <h2>자기소개</h2>
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
            <p>취미 : {hobby}</p>
        </div>
    );
}
