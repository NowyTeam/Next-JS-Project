import Style from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={Style.Header}>
      <div className={Style.Header_Wrap}>
        <div className={Style.Logo}>
          <h1>
            N<span>w</span>
          </h1>
        </div>
        <div className={Style.Links}>
          <ul>
            <Link className={Style.link} href="/">
              Home
            </Link>
            <Link className={Style.link} href="/">
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
