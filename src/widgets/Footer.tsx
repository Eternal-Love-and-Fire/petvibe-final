import { Logo } from "@/components/Logo";
import Link from "next/link";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="contacts" className="py-4">
      <div className="p-4 pl-2 flex flex-col sm:flex-row sm:justify-around sm:items-center  gap-4">
        <Logo classnames="-pl-2"/>
        <div className="flex gap-2 sm:gap-4 sm:text-4xl text-3xl">
          <a
            target="_blank"
            href="https://www.instagram.com/petvibe_ua?igsh=MWx4dG5yOW56b21vbg%3D%3D&utm_source=qr"
            className="hover:text-white duration-300 hover:opacity-100"
          >
            <BsInstagram />
          </a>
          <a
            target="_blank"
            href="https://t.me/petvibe_grooming"
            className="hover:text-white duration-300 hover:opacity-100"
          >
            <BsTelegram />
          </a>
          <a
            target="_blank"
            href="mailto:petvibe.info@gmail.com"
            className="hover:text-white duration-300 hover:opacity-100"
          >
            <CiMail />
          </a>
          <address>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/Hd5ERvv4RnHETKPe6"
              className="hover:text-white duration-300 hover:opacity-100"
            >
              <FaMapMarkerAlt />
            </a>
          </address>
        </div>
        <div className="flex flex-col gap-1 text-base font-serif font-bold">
          <address className="not-italic flex flex-col gap-2">
            <a
              className="flex"
              target="_blank"
              href="https://maps.app.goo.gl/Hd5ERvv4RnHETKPe6"
            >
              просп. Миколи Бажана 12, Київ
            </a>
          </address>
          <a href="mailto:petvibe.kyiv@gmail.com" target="_blank">
            petvibe.kyiv@gmail.com
          </a>
          <a href="tel:+380986531088" className="mt-2">
            +380 98 653 10 88
          </a>
          <time className="flex gap-1">
            <p>Пн-Нд: 10:00 - 20:00</p>
          </time>
        </div>
      </div>
    </footer>
  );
};
