// "use client";
// import Link from "next/link";
// import { BsInstagram, BsTelegram } from "react-icons/bs";
// import { CiMail } from "react-icons/ci";
// import { FaMapMarkerAlt } from "react-icons/fa";

// export const Footer = () => {
//   return (
//     <footer
//       id="contacts"
//       className="h-40 text-sky-300 bg-zinc-950 font-bold flex gap-6 md:flex-row justify-center items-center text-sm px-4 tracking-wide font-serif"
//     >
//       <div className="absolute flex w-full flex-1 items-center justify-center isolate ">
//         <div className="absolute inset-auto h-40 min-w-[300px] max-w-[500px] rounded-full bg-cyan-400 opacity-50 blur-3xl"></div>
//       </div>
//       <div className="flex flex-col gap-2 z-10">
//         <address className="not-italic flex flex-col gap-2">
//           <Link
//             className="flex"
//             target="_blank"
//             href="https://maps.app.goo.gl/Hd5ERvv4RnHETKPe6"
//           >
//             просп. Миколи Бажана 12
//             <FaMapMarkerAlt />
//           </Link>
//           <p>Київ</p>
//         </address>
//         <time className="flex gap-1">
//           <p>Пн-Нд: 10:00 - 20:00</p>
//         </time>
//       </div>
//       <div className="flex flex-col gap-2 z-10">
//         <div className="flex gap-3 text-2xl">
//           <a
//             target="_blank"
//             href="https://www.instagram.com/petvibe_ua?igsh=MWx4dG5yOW56b21vbg%3D%3D&utm_source=qr"
//             className="hover:text-black text-sky-200 duration-300 hover:opacity-100"
//           >
//             <BsInstagram />
//           </a>
//           <a
//             target="_blank"
//             href="https://t.me/petvibe_grooming"
//             className="hover:text-black text-sky-200 duration-300 hover:opacity-100"
//           >
//             <BsTelegram />
//           </a>
//           <a
//             target="_blank"
//             href="mailto:petvibe.info@gmail.com"
//             className="hover:text-black text-sky-200 duration-300 hover:opacity-100"
//           >
//             <CiMail />
//           </a>
//         </div>
//         <a href="mailto:petvibe.info@gmail.com" target="_blank">
//           petvibe.info@gmail.com
//         </a>
//         <a href="tel:+380986531088" target="_blank">
//           0986531088
//         </a>
//       </div>
//     </footer>
//   );
// };
"use client";
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
          <a href="mailto:petvibe.info@gmail.com" target="_blank">
            petvibe.info@gmail.com
          </a>
          <time className="flex gap-1">
            <p>Пн-Нд: 10:00 - 20:00</p>
          </time>
        </div>
      </div>
    </footer>
  );
};
