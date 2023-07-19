import Link from "next/link";
import Image from "next/image";
import home from "./../assets/home.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-9 flex-wrap bg-white p-6">
      <Link href="/guide">
        <div className="shadow-lg bg-blue-400 rounded-md p-2 w-40 text-center text-white font-semibold active:shadow-inner">
          How to use
        </div>
      </Link>
      <Link href="/about">
        <div className="shadow-lg bg-blue-400  rounded-md p-2 w-40 text-center text-white font-semibold active:shadow-inner">
          About
        </div>
      </Link>
      <Link href="/contact">
        <div className="shadow-lg bg-blue-400  rounded-md p-2 w-40 text-center text-white font-semibold active:shadow-inner">
          Contact
        </div>
      </Link>
      <Link href="/"><Image
        src={home}
        alt="Logo"
        className="ml-8"/></Link>
    </nav>
  );
};

export default Navbar;
