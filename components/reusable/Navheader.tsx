import Image from "next/image";

export default function Navheader() {
  return (
    <div className="flex h-[10vh] mx-auto justify-between">
      <div>
        <Image
          src="/imgs/logo.png"
          alt="App Logo"
          width={81}
          height={50}
        ></Image>
      </div>
      <div className="flex h-full">
        <p>pocetna</p>
        <p>lol</p>
      </div>
    </div>
  );
}
