import React, { useState } from "react";
import ActiveNav from "./ActiveNav";
import { Link } from "react-router-dom";
const bar = `https://raw.githubusercontent.com/wdridoy11/web-icon/main/bar.png`;
const logo = `https://raw.githubusercontent.com/wdridoy11/web-icon/baf2ce2e21c07285c1d73699254d624e34e98f3a/Logo.png`;

const Header = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className="py-2 bg-[#0B1221]">
        <div className="container">
          <div className="flex items-start md:items-center justify-between relative">
            <div>
              <Link to={"/"}>
                <img className="w-16 h-16" src={logo} alt="logo" />
              </Link>
            </div>
            <button
              className="absolute top-3 right-3 cursor-pointer"
              onClick={handleToggle}
            >
              <img className="w-8 block md:hidden" src={bar} alt="Icon" />
            </button>
            <div
              className={
                isActive
                  ? "hidden md:flex gap-7 text-white"
                  : "flex flex-col md:flex-row gap-7 mt-16 text-white"
              }
            >
              <ActiveNav className="text-base font-normal text-white" to={`/`}>
                Home
              </ActiveNav>
              <ActiveNav
                className="text-base font-normal text-white"
                to={`/addcoffee`}
              >
                Add Coffee
              </ActiveNav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
