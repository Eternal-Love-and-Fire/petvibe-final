import bghero from "../../public/bg-hero.png";
import { Button } from "@/components/Button";

export const Hero = () => {
  return (
    <>
      <main
        style={{ backgroundImage: `url(/bg-hero.png)` }}
        className={`h-[100vh] w-full flex flex-col bg-cover bg-center bg-no-repeat`}
      >
        <div className="w-full flex flex-col gap-5 items-center justify-center my-auto">
          <h1 className="tracking-wide font-medium text-2xl sm:text-4xl md:text-5xl text-white">
            PetVibe - грумінг з любов’ю
          </h1>
          <h3 className="text-center text-white text-base sm:w-2/5 w-4/5">
            Наш професійний грумінг салон пропонує високоякісні послуги для
            собак будь-яких розмірів. У ПетВайб ми розуміємо, наскільки важливо,
            щоб ваші чотирилапі друзі виглядали і почувалися на всі сто!
          </h3>
          <div className="flex gap-5 sm:gap-7">
            <Button
              type="button"
              text="Дивитися послуги"
              classnames="w-[160px] sm:w-[175px]"
            />
            <Button
              type="button"
              text="Запис Онлайн"
              classnames="w-[160px] sm:w-[175px]"
            />
          </div>
        </div>
      </main>
    </>
  );
};
