import Image from "next/image";
import book from "./../assets/book.svg";

export default function Header() {
  return (
    <header
      className="flex justify-center items-center flex-wrap p-4"
    >
      <div className="flex flex-col gap-9 justify-center items-center">
        <h1 className="text-3xl font-extrabold text-center md:text-6xl">
          Mapping System for Libraries Schemas
        </h1>
        <h2 className="text-xl font-extrabold text-center md:text-xl">
          Create mapping and save it to JSON file
        </h2>
      </div>
      <div className="flex p-4 ml-8">
        <Image src={book} alt="Logo" />
      </div>
    </header>
  );
}
