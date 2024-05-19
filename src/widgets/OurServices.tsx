import { SingleService } from "@/components/SingleService";

const service = {
  title: "Наші послуги",
  services: [
    {
      title: "Гігієничний догляд за  собаками",
      listitems: [
        "Розчісування, купання",
        "Стрижка гігієнічних зон",
        "Підстригання кігтів",
        "Чищення вух, очей, зубів",
      ],
    },
    {
      title: "Комплексний догляд та стрижка собак",
      listitems: [
        "Розчісування, купання",
        "Стрижка гігієнічних зон",
        "Підстригання кігтів",
        "Чищення вух, очей, зубів",
        "Доглядові засоби за типом шерсті",
        "Модельна стрижка",
      ],
    },
    {
      title: "Інші послуги",
      listitems: [
        "Триммінг",
        "Догляд за кішками",
        "Маска від ковтунів",
        "Чистка зубів",
        "Манікюр",
        "Очищення параанальних залоз",
      ],
    },
  ],
};

export const OurServices = () => {
  return (
    <section id="ourservices" className="min-h-[647px] my-28 sm:my-40 mb:20 sm:mb-32 mx-0 sm:mx-5 text-black">
      <h2 className="text-[40px] tracking-wider text-center">
        {service.title}
      </h2>
      <div className="w-fit mx-auto mt-6 sm:mt-[37px]">
        <ul className="flex flex-wrap justify-center xl:flex-row gap-8">
          {service.services.map((service, i) => (
            <SingleService
              key={i}
              title={service.title}
              listitems={service.listitems}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
