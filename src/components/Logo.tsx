import Image from "next/image";
import Link from "next/link";
type LogoType = {
  classnames?: string;
};
export const Logo: React.FC<LogoType> = ({ classnames }) => {
  return (
    <Link href={"/"} className={`flex items-center gap-2 ${classnames}`}>
      <Image
        src="/logo-website-icon.svg"
        width={55}
        height={55}
        className="w-[55px] h-[55px]"
        alt="PetVibe Logo"
        priority
      />
      <Image
        src="/logo-text-PetVibe.svg"
        width={111}
        height={25}
        className="w-[111px] h-[25px]"
        alt="PetVibe Logo"
        priority
      />
    </Link>
  );
};
