import React from "react";
import CardMekasisme from "./cardMekasisme";
import { data } from "../../dummy/mekasisme";

export default function Mekasisme() {
  return (
    <div
      className="h-auto bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"
      id="Mechanism"
    >
      <div className="flex justify-center items-center">
        <div className="my-40 px-5 md:px-0">
          <h3 className="text-4xl font-bold text-white mb-7">Mekasisme</h3>
          {data?.map((item) => (
            <CardMekasisme
              title={item?.title}
              date={item?.date}
              content={item?.content}
              key={item?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
