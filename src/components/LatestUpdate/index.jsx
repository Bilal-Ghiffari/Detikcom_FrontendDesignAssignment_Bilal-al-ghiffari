import React from "react";
import Card from "./card";
import { dataNewsLatest as data } from "../../dummy/newslatest";

export default function LatestUpdate() {
  return (
    <div className="container mx-auto px-5 md:w-3/4" id="Latest Update">
      <h2 className="text-2xl text-[#007CBD] font-bold uppercase mb-3">
        Latest Update
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-7">
        {data?.map((item) => (
          <Card
            key={item?.id}
            img={item?.image}
            title={item?.title}
            date={item?.date}
          />
        ))}
      </div>
    </div>
  );
}
