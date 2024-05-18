import Image from "next/image";
import dogwash from '../../public/dog-wash.png';

export const About = () => {
  return (
    <section className="min-h-[647px] mt-[49px] mx-4 relative flex flex-wrap items-center px-4 xl:px-0 pt-[34px] xl:pt-0 sm:justify-center gap-6 2xl:gap-[134px] sm:flex-row flex-col border border-black text-black rounded-[20px] font-medium bg-[#CCF4FF]">
      <div className="w-[329px] h-[58px] absolute left-[-2px] md:left-[103px] top-[-28px] flex items-center justify-center rounded-[10px] border border-black bg-[#CCDDFF]">
        <span className="text-[30px] tracking-wide">Про нас</span>
      </div>
      <article className="max-w-[578px] flex flex-col gap-5 text-[18px] font-medium">
        <h3>
          Ласкаво просимо до грумінг салону PetVibe – нового місця, де ваші
          пухнасті друзі отримають найкращий догляд та турботу. Ми маємо великі
          амбіції і не меншу любов до тварин, що робить наш салон унікальним.
        </h3>
        <h3>
          У PetVibe ми віримо, що кожна тварина заслуговує на індивідуальний
          підхід і найвищу якість обслуговування. Для нас найголовніше – це
          здоров`я та щастя ваших улюбленців. Наша команда професіоналів
          забезпечує повний спектр грумінг-послуг, від стрижки та купання до
          чистки вух та зубів.
        </h3>
        <div>
          <h3>Наші цінності:</h3>
          <ul className=" list-disc pl-7">
            <li>
              Якісні послуги: ми використовуємо лише найкращі інструменти та
              засоби, щоб забезпечити бездоганний результат.
            </li>
            <li>
              Здоров`я тварин: особлива увага приділяється безпеці та комфорту
              тварин під час процедур.
            </li>
            <li>
              Індивідуальний підхід: ми враховуємо всі побажання власників та
              індивідуальні особливості кожного вихованця.
            </li>
          </ul>
        </div>
      </article>
      <article>
        <div className="mb-4 sm:mb-0">
          <Image src={dogwash} alt="happy dog in petvide" className="rounded-[20px] border border-black"/>
        </div>
      </article>
    </section>
  );
};
