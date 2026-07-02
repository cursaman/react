import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function Day02() {
  return (
    <div>
      <Header />
      <hr />
      <Section1 />
      <br />
      <Section2 />
      <hr />
      <Footer />
      <hr />

      <Intro name="홍길동1" age="22" hobby="골프"/>
      <hr />
      <Intro name="홍길동2" age="24" hobby="축구"/>
      <hr />
      <Intro name="홍길동3" age="26" hobby="농구"/>
      
      
    </div>
  );
}

export default Day02;