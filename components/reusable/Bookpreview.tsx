import Image from "next/image";

export default function Bookpreview() {
  return (
    <div className="w-[10vw] flex-col">
      <div className="mb-5">
        <Image src="/imgs/book.png" alt="lol" width="192" height="100"></Image>
      </div>
      <div>
        <p className="text-center text-lg">Na Drini cuprija</p>
        <p className="text-center text-sm">Ivo Andric</p>
      </div>
    </div>
  );
}
