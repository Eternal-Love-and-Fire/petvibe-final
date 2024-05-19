import Link from "next/link";
import React from "react";
type ButtonType = {
  type: "button" | "link";
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
