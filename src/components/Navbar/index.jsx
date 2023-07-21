import { Navbar } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

export default function Navigation() {
  const navigate = useNavigate();
  const navLinks = ["About", "Mechanism", "Latest Update"];
  return (
    <Navbar className="sticky top-0 z-50 sm:px-40 py-5 drop-shadow-md bg-[#007CBD]">
      <h1 className="font-semibold text-xl text-white">
        <Link to="/">
          <h5 className="text-sm h-4">detikfinance</h5>
          <h4 className="uppercase text-lg font-bold h-4">business plan</h4>
          <p className="uppercase text-[9px] tracking-[0.4em]">
            competition 2023
          </p>
        </Link>
      </h1>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLinks.map((nav, i) => (
          <NavLink content={nav} key={i} />
        ))}
        <button
          className="bg-white text-[#007CBD]  px-7 py-2 rounded-full"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
}
