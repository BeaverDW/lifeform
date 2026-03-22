import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B1033]">
      <div className="flex h-14 items-center justify-center px-4">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt={"생활폼 로고"}
            width={120}
            height={36}
            className="block border-none shadow-none outline-none"
          />
        </Link>
      </div>
    </header>
  );
}
