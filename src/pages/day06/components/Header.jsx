import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <div>
        <Link to="/">HOME</Link>
        <br />

        <Link to="/sub01">Sub01</Link>
        <br />

        <Link to="/sub02">Sub02</Link>
        <br />

        <Link to="/sub03">Sub03</Link>
        </div>
    </header>
  );
}

export default Header;