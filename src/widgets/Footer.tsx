import Link from "next/link";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="contacts" className="xl:w-1/2 w-screen opacity-50 p-4 mx-auto flex gap-6 flex-col md:flex-row justify-around items-center text-base tracking-wide font-serif border-t-2 border-black mt-6">
      <div className="w-full flex flex-col">
        <address className="not-italic">
            <Link
            className="flex gap-1 hover:text-blue-900"
              target="_blank"
              href="https://maps.app.goo.gl/Hd5ERvv4RnHETKPe6"
            >
              <FaMapMarkerAlt />
              просп. Миколи Бажана 12
            </Link>
          <p>Київ</p>
        </address>
        <time className="flex gap-1">
          <p>Пн-Нд: 10:00 до 20:00</p>
        </time>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex gap-3 text-xl">
          <a
            target="_blank"
            href="https://www.instagram.com/petvibe_ua?igsh=MWx4dG5yOW56b21vbg%3D%3D&utm_source=qr"
            className="hover:text-black text-sky-900 duration-300 hover:opacity-100"
          >
            <BsInstagram />
          </a>
          <a
            target="_blank"
            href="https://t.me/petvibe_grooming"
            className="hover:text-black text-sky-900 duration-300 hover:opacity-100"
          >
            <BsTelegram />
          </a>
          <a
            target="_blank"
            href="mailto:petvibe.info@gmail.com"
            className="hover:text-black text-sky-900 duration-300 hover:opacity-100"
          >
            <CiMail />
          </a>
        </div>
        <a
          href="mailto:petvibe.info@gmail.com"
          target="_blank"
          className="hover:text-blue-900 duration-300"
        >
          petvibe.info@gmail.com
        </a>
        <a
          href="tel:+380986531088"
          target="_blank"
          className="hover:text-blue-900 duration-300"
        >
          0986531088
        </a>
      </div>
    </footer>
  );
};
