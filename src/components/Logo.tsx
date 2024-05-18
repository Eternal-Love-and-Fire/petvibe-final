import petVibeLogo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex p-2 items-center gap-2">
      <Image src={petVibeLogo} alt="PetVibe Logo" priority/>
    </Link>
  );
};
