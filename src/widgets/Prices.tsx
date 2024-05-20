"use client";

import { Button } from "@/components/Button";
import { content } from "@/content/prices";
import { useEffect, useState } from "react";

type ListItemType = {
  type: string;
  price: number;
};

export type PricesType = {
  type: string;
  data: {
    title: string;
    listitems: ListItemType[] | null;
  };
};

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
    <section id="prices" className="py-4 px-2 sm:py-8 xl:px-6 bg-[#CCDDFF]">
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
