import Link from "next/link";
import React from "react";
interface UserLinkModel {
  to: string;
  title: string;
}
export const UserLink: React.FC<UserLinkModel> = ({ to, title }) => {
  return (
    <Link
      href={to}
      className="font-light border-b-2 border-b-transparent hover:border-black duration-300"
    >
      {title}
    </Link>
  );
};
