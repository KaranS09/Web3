import React from "react";

import logo from "../../images/shmicon.png";
import insta from "../../images/insta.jfif.jpg";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.2] justify-center items-center">
        <span className="text-white flex flex-row  justify-center items-center p-2">
          <img
            src={logo}
            alt="logo"
            className="w-16 rounded-full p-2 cursor-pointer"
          />
          Shardpay
        </span>
      </div>
      <div className="flex flex-[0.25] flex-row">
        <a href="https://www.instagram.com/">
          <img
            className="h-[50px] p-[5px] m-[15px] rounded-full mt-0"
            src={insta}
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/karan-sathish-44ba30221/">
          <img
            className="h-[50px] p-[5px] m-[15px] rounded-full mt-0"
            src={linkedin}
            alt=""
          />
        </a>
        <a href="https://twitter.com/InterloperK">
          <img
            className="h-[50px] p-[5px] m-[15px] rounded-full mt-0"
            src={twitter}
            alt=""
          />
        </a>
        <a
          href="https://www.facebook.com/
        "
        >
          <img
            className="h-[50px] p-[5px] m-[15px] rounded-full mt-0"
            src={facebook}
            alt=""
          />
        </a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Making Crypto transactions fun
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        transact@bchainweebs.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@bchainweebs</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
