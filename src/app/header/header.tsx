import Image from "next/image";
import book from "./../assets/book.svg";
import background from "./../assets/bg.jpg";

export default function Header() {
  return (
    <header
      className="flex justify-center items-center flex-wrap p-4"
    >
      <div className="flex justify-center items-center">
        {/* <Image src={mapper} alt="Logo" width={100} height={100} /> */}
        <h1 className="text-3xl font-extrabold text-center md:text-6xl">
          Mapping System for Libraries Schemas
        </h1>
      </div>
      <div className="flex p-4 ml-8">
        <Image src={book} alt="Logo" />
      </div>
    </header>
  );
}
