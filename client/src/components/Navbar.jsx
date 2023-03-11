import React, { useContext } from "react";
import { useState } from "react";
import { HiMenu, HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { shortenAddress } from "../utils/shortenAddress";
import { TransactionContext } from "../context/TransactionContext";
import logo from "../../images/shmicon.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const { currentAccount, formData, connectWallet } =
    useContext(TransactionContext);

  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div>
      {/* <div className="h-[2px] w-full bg-gray-500 my-0" /> */}
      <nav className="w-full flex flex-[0.2] justify-between flow-root items-center mt-0 pt-0">
        {/* <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div> */}
        <div className="md:flex flex-initial flex-row justify- float-left items-center px-5">
          <span className="text-white flex flex-row  justify-center items-center p-2">
            <img
              src={logo}
              alt="logo"
              className="w-16 mx-0 rounded-full p-2  my-0 cursor-pointer"
            />
            Shardpay
          </span>
        </div>
        <div className="md:flex flex-initial flex-row justify- float-right items-center mt-7 px-5">
          <p className=" text-white  inline-block bg-clip-text py-1 mb-4">
            Connected account: {currentAccount}
            {/* //bg-gradient-to-r from-violet-600 via-red-500 to-green-400  text-transparent */}
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center mx-2 mb-5 bg-[#2952e3] py-1 px-2 rounded-full cursor-pointer hover:bg-[#2546bd] blue-glassmorphism"
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </div>

        {/* <ul className="text-white md:flex hidden list-none flex-row justify-end pt-7 items-center  mr-0">
          {["Home", "Transactions", "Services"].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
          ))} */}
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#25464bd]">
          login
        </li> */}
        {/* </ul>
        <div className="flex-relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white float-right md:hidden cursor-pointer my-5 mx-5"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Home", "Transactions", "Services"].map((item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              ))}
            </ul>
          )}
        </div> */}
      </nav>
      <div className="h-[1px] w-full bg-gray-300 my-0" />
    </div>
  );
};

export default Navbar;
