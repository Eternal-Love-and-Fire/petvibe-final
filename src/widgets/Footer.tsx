import Link from "next/link";
import { BsInstagram, BsTelegram } from "react-icons/bs";

const arrow = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);
export const Footer = () => {
  return (
    <footer className="w-full p-2 pt-6 bg-sky-100 flex flex-col items-center gap-2">
      <Link
        href={`/`}
        className="flex items-center animate-pulse hover:animate-none hover:duration-300 hover:text-blue-900"
      >
        {arrow} Back to Top
      </Link>
      <div className="flex items-center text-sm">
        <address>
          <strong>Київ, проспект Миколи Бажана 12</strong>
        </address>
      
        <a href="tel:+380986531088" className="px-4 py-2 tracking-wide">
          <strong className="whitespace-nowrap">+380 98 653 10 88</strong>
        </a>
        <div className="p-1 flex gap-4 text-2xl rounded-md shadow-sm shadow-sky-400">
          <a href="" className="hover:text-black text-sky-900 duration-300">
            <BsInstagram />
          </a>
          <a href="" className="hover:text-black text-sky-900 duration-300">
            <BsTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
};
