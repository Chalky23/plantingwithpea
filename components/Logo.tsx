import logo from "../app/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="">
      <a href="/">
        <Image src={logo} width={150} height={150} alt="logo" />
      </a>
      <div className=""></div>
    </div>
  );
}
