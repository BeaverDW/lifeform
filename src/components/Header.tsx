import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav aria-label="메인 내비게이션" className="flex h-14 items-center justify-center px-4">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"생활폼 홈으로 이동"}
            width={120}
            height={36}
            className="block border-none shadow-none outline-none"
          />
        </Link>
      </nav>
    </header>
  );
}
