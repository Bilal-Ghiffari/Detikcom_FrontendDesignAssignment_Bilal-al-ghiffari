import React from "react";

export default function CardMekasisme({ date, title, content }) {
  return (
    <div className="bg-white max-w-2xl rounded-lg mb-5 card-mekasisme">
      <div className="flex gap-5 px-5 py-5">
        <div>Icon</div>
        <div>
          <div className="flex justify-between">
            <h4 className="text-[#3EB7DD] font-bold">{title}</h4>
            <p className="text-[#3EB7DD]">{date}</p>
          </div>
          <ol className="list-decimal pl-4 pt-2 pb-4">
            {content.map((item, i) => (
              <li key={i} className="text-sm">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
