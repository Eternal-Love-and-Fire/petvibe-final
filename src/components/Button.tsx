import Link from "next/link";
import React from "react";
type ButtonType = {
  type: "button" | "link" | "yellowlink";
  text: string;
  to?: string;
  classnames?: string;
  onClick?: () => void;
};
export const Button: React.FC<ButtonType> = ({
  type,
  text,
  to = "/",
  classnames,
  onClick,
}) => {
  if (type === "button") {
    return (
      <>
        <button
          className={`h-[37px] flex items-center justify-center text-sm text-black border border-black rounded-[10px] bg-[#FDFF89] hover:opacity-60 active:opacity-80 duration-300 ${classnames}`}
          onClick={onClick}
        >
          {text}
        </button>
      </>
    );
  }
  if (type === "yellowlink") {
    return (
      <Link
        href={to}
        onClick={onClick}
        className="px-8 py-2 w-[160px] sm:w-auto border border-black bg-transparent text-black  dark:border-white relative group transition duration-200"
      >
        <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
        <span className="relative">{text}</span>
      </Link>
    );
  }
  return (
    <>
      <Link
        href={to}
        className={`h-[37px] flex items-center justify-center text-sm text-black border border-black rounded-[10px] bg-[#FDFF89] hover:opacity-60 active:opacity-80 duration-300 ${classnames}`}
      >
        {text}
      </Link>
    </>
  );
  return <div>Btn</div>;
};
