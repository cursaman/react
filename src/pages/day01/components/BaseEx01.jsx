function BaseEx01() {

    const name = "React";
    const age = 10;

    return (
        <div>
            <h1>리액트의 시작</h1>
            <p>첫번째 JSX 문법</p>

            <div>이름 : {name}</div>
            <div>나이 : {age}</div>
        </div>
    );
}

export default BaseEx01;