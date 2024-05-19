import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex p-2 items-center gap-2">
      <Image src='/logo-website-icon.svg' width={55} height={55} className="w-[55px] h-[55px]" alt="PetVibe Logo" priority/>
      <Image src='/logo-text-PetVibe.svg' width={111} height={25} className="w-[111px] h-[25px]" alt="PetVibe Logo" priority/>
    </Link>
  );
};
