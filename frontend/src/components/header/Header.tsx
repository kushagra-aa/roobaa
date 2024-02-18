import Image from "next/image";
import logo from "/public/images/logo.png";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Image src={logo} alt={"rooba"} fill sizes="100%" />
        </div>
        <ul>
          <li>opportunities</li>
          <li>how it works</li>
          <li>about us</li>
          <li>
            <button>sign in</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
