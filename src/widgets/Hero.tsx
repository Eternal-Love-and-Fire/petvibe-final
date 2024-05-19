import bghero from "../../public/bg-hero.png";
import { Button } from "@/components/Button";

export const Hero = () => {
  return (
    <>
      <main
        style={{ backgroundImage: `url(/bg-hero.png)` }}
        className={`h-[100vh] w-full relative flex flex-col bg-cover bg-center bg-no-repeat bg-opacity-50`}
      >
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black inset-0 opacity-25 z-0"></div>
        <div className="w-full flex flex-col gap-5 items-center justify-center my-auto z-10">
          <h1 className="text-center tracking-wide font-medium text-3xl sm:text-5xl md:text-6xl text-white">
            PetVibe<br/>грумінг з любов’ю
          </h1>
          <h3 className="text-center text-white text-base sm:w-2/5 w-4/5">
            Наш професійний грумінг салон пропонує високоякісні послуги для
            собак будь-яких розмірів. У ПетВайб ми розуміємо, наскільки важливо,
            щоб ваші чотирилапі друзі виглядали і почувалися на всі сто!
          </h3>
          <div className="flex gap-5 sm:gap-7">
            <Button
              type="link"
              to="#ourservices"
              text="Дивитися послуги"
              classnames="w-[160px] sm:w-[175px]"
            />
            <Button
              type="link"
              to="https://b1220380.alteg.io/"
              text="Запис Онлайн"
              classnames="w-[160px] sm:w-[175px]"
            />
          </div>
        </div>
      </main>
    </>
  );
};
