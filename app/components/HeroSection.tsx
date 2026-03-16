import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <Image src="/1_hero.png" alt="히어로 섹션" width={860} height={1000} className="w-full h-auto" />
    </section>
  );
}
