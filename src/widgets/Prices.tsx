"use client";

import { Button } from "@/components/Button";
import { useEffect, useState } from "react";

type ListItemType = {
  type: string;
  price: number;
};

type PricesType = {
  type: string;
  data: {
    title: string;
    listitems: ListItemType[] | null;
  };
};
const content: PricesType[] = [
  {
    type: "hygiene",
    data: {
      title: "Гігієничний догляд за собаками",
      listitems: [
        {
          type: "Йоркширський терʼєр",
          price: 850,
        },
        {
          type: "Бівер йоркширський терʼєр",
          price: 900,
        },
        {
          type: "Шпіц від 5 кг та більше",
          price: 1150,
        },
        {
          type: "Ши-тцу",
          price: 1150,
        },
        {
          type: "Мальтійська болонка",
          price: 900,
        },
        {
          type: "Мальтіпу/Йоркіпу до 7 кг",
          price: 1200,
        },
        {
          type: "Мальтіпу/Йоркіпу від 7 кг і більше",
          price: 1500,
        },
        {
          type: "Кавапу/Кокапу до 7 кг ",
          price: 1200,
        },
        {
          type: "Кавапу/Кокапу від 7 кг і більше",
          price: 1500,
        },
        {
          type: "Пушон (бішпу)",
          price: 1200,
        },
        {
          type: "Лабрадудль мініатюрний від 7 кг - до 14 кг",
          price: 1700,
        },
        {
          type: "Лабрадудль середній від 14 кг - до 21 кг",
          price: 2200,
        },
        {
          type: "Лабрадудль стандартний від 21 кг - до 30 кг",
          price: 2600,
        },
        {
          type: "Вест-хайленд-уайт-тер’єр",
          price: 1050,
        },
        {
          type: "Кавалер-кінг-чарльз-спаніель",
          price: 850,
        },
        {
          type: "Цвергшнауцер",
          price: 1050,
        },
        {
          type: "Скотчтер’єр",
          price: 2950,
        },
        {
          type: "Пудель до 7 кг",
          price: 1100,
        },
        {
          type: "Пудель від 7 кг до 10 кг",
          price: 1200,
        },
        {
          type: "Пудель від 10 кг",
          price: 2200,
        },
        {
          type: "Пекінес",
          price: 850,
        },
        {
          type: "Такса",
          price: 850,
        },
        {
          type: "Чихуахуа",
          price: 800,
        },
        {
          type: "Той терʼєр",
          price: 700,
        },
        {
          type: "Грифон",
          price: 700,
        },
        {
          type: "Джек-рассел-тер’єр",
          price: 850,
        },
        {
          type: "Мопс",
          price: 850,
        },
        {
          type: "Китайська хохлата пуховка",
          price: 950,
        },
        {
          type: "Китайська хохлата гола ",
          price: 700,
        },
        {
          type: "Спаніель",
          price: 1200,
        },
        {
          type: "Вельш-коргі",
          price: 1150,
        },
        {
          type: "Самоїд",
          price: 2600,
        },
        {
          type: "Інші собаки до 8 кг",
          price: 850,
        },
        {
          type: "Інші собаки від 8 кг - до 12 кг",
          price: 1000,
        },
        {
          type: "Інші собаки від 12 кг - до 25 кг",
          price: 1200,
        },
        {
          type: "Інші дизайнерські породи",
          price: 1200,
        },
      ],
    },
  },
  {
    type: "complex",
    data: {
      title: "Комплексний догляд та стрижка собак",
      listitems: [
        {
          type: "Йоркширський терʼєр",
          price: 850,
        },
      ],
    },
  },
  {
    type: "other",
    data: {
      title: "Інші послуги",
      listitems: null,
    },
  },
];
export const Prices = () => {
  const [prices, setPrices] = useState<ListItemType[] | null>([]);
  const [active, setActive] = useState("hygiene");

  const _setContentData = (type: "hygiene" | "complex" | "other") => {
    const selectedContent = content.find((part) => part.type === type);
    if (selectedContent) {
      setActive(type);
      setPrices(selectedContent.data.listitems);
    }
  };
  useEffect(() => {
    _setContentData("hygiene");
  }, []);
  return (
    <section className="py-4 px-2 sm:py-8 xl:px-6 bg-[#CCDDFF]">
      <div className="my-6 justify-center sm:flex-row flex flex-col gap-4 mx-4">
        <Button
          type="button"
          text="Гігієничний догляд за собаками"
          onClick={() => _setContentData("hygiene")}
          classnames={`p-1 h-[50px] sm:w-[220px] ${
            active === "hygiene" ? "" : "bg-[#FFF4DE]"
          }`}
        />
        <Button
          type="button"
          text="Комплексний догляд та стрижка собак"
          onClick={() => _setContentData("complex")}
          classnames={`p-1 h-[50px] sm:w-[220px] ${
            active === "complex" ? "" : "bg-[#FFF4DE]"
          }`}
        />
        <Button
          type="button"
          text="Інші послуги"
          onClick={() => _setContentData("other")}
          classnames={`p-1 h-[50px] sm:w-[220px] ${
            active === "other" ? "" : "bg-[#FFF4DE]"
          }`}
        />
      </div>
      <article>
        <ul className="xl:my-12 items-center justify-center flex gap-4 flex-wrap">
          {prices ? (
            prices?.map((item, i) => (
              <li
                key={i}
                className="max-w-[400px] min-w-[360px] p-1 border-b border-blue-600 flex justify-between text-sm rounded-[10px] bg-[#bdd3ff]"
              >
                <span>{item.type}</span>
                <span>{item.price}</span>
              </li>
            ))
          ) : (
            <li className="text-center text-2xl">
              Щось пішло не так або ж ця частина ще дороблюється :D
            </li>
          )}
        </ul>
      </article>
    </section>
  );
};
