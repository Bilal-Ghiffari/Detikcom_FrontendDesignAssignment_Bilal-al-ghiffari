import React from "react";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function About() {
  return (
    <div className="container mx-auto md:w-2/3 px-5 md:px-0" id="About">
      <div className="flex justify-between flex-wrap md:flex-nowrap my-20">
        <div className="flex justify-between gap-10 flex-wrap md:flex-nowrap">
          <img
            src="https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="w-80 h-52 mx-4 md:mx-0"
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#007CBD]">
                About Detikfinance Business Plan Competition 2023
              </h3>
              <p className="mt-5 text-sm whitespace-normal text-justify">
                Detikfinance kali ini akan memberikan ruang bagi startup untuk
                networking dan memamerkan produk inovasinya dihadapan venture
                capital dan angel investor. Acara ini juga akan menghadirkan
                para pengembang teknologi dan pelaku bisnis untuk memberikan
                edukasi dan inspirasi bagi masyarakat Indonesia dan teknofilia
                mengenai perkembangan teknologi di Indonesia
              </p>
              <div className="flex gap-3 mt-5">
                <p className="text-[#007CBD]">Share:</p>
                <FiTwitter className="text-[#007CBD] w-5 h-5 mt-1" />
                <BsWhatsapp className="text-[#007CBD] w-5 h-5 mt-1" />
                <RiFacebookCircleLine className="text-[#007CBD] w-6 h-6 mt-[3px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
