import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";
import img from "../../images/6618.png";
import img2 from "../../images/shmed.png";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div>
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start flex-col mf:mr-10">
            <h1 className="text-4xl sm:text-4.5xl pl-5 text-white  py-1 mb-4 mt-4">
              {/* bg-gradient-to-r from-violet-600 via-red-500 to-green-400 inline-block text-transparent bg-clip-text */}
              Send SHM across the world
            </h1>
            <img src={img} alt="img" />
            <p className="text-left mt-5 text-white font-light md:w-12/12 w-12/12 text-lg">
              Explore the crypto world. Buy and sell cryptocurrencies easily
              with our web app.
            </p>
            {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 p-3 rounded-full cursor-pointer hover:bg-[#2546bd] blue-glassmorphism"
              >
                <p className="text-white text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            )}
            {/* <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div
              className={`rounded-tl-2xl  hover:bg-white hover:text-[black] font-bold cursor-pointer ${companyCommonStyles}`}
            >
              <a
                className=" hover:text-[black] hover:font-bold  hover:bg-white"
                href="https://www.geeksforgeeks.org/phases-of-evolution-of-blockchain/"
                target="_blank"
              >
                Evolution
              </a>
            </div>
            <div
              className={`hover:bg-white hover:text-[black] font-bold cursor-pointer ${companyCommonStyles}`}
            >
              <a
                className=" hover:text-[black] hover:font-bold  hover:bg-white"
                href="https://www.ibm.com/in-en/topics/blockchain-security#:~:text=Each%20new%20block%20connects%20to,transaction%20is%20true%20and%20correct."
                target="_blank"
              >
                Security
              </a>
            </div>
            <div
              className={`sm:rounded-tr-2xl  hover:bg-white hover:text-[black] font-bold cursor-pointer ${companyCommonStyles}`}
            >
              <a
                className=" hover:text-[black] hover:font-bold  hover:bg-white"
                href="https://ethereum.org/en/"
                target="_blank"
              >
                Ethereum
              </a>
            </div>
            <div
              className={`sm:rounded-bl-2xl  hover:bg-white hover:text-[black] font-bold cursor-pointer ${companyCommonStyles}`}
            >
              <a
                className=" hover:text-[black] hover:font-bold  hover:bg-white"
                target="_blank"
                href="https://www.forbes.com/advisor/investing/cryptocurrency/what-is-web-3-0/"
              >
                Web 3.0
              </a>
            </div>
            <div
              className={` hover:bg-white hover:text-[black] font-bold cursor-pointer ${companyCommonStyles}`}
            >
              {" "}
              <a
                href="https://www.analyticsinsight.net/top-10-cryptocurrencies-with-the-lowest-transaction-fees-in-2023/"
                className=" hover:text-[black] hover:font-bold  hover:bg-white"
                target="_blank"
              >
                Low Fees
              </a>
            </div>
            <div
              className={`sm:rounded-br-2xl  hover:bg-white hover:text-[black] font-bold cursor-pointer ${companyCommonStyles}`}
            >
              <a
                className=" hover:text-[black] hover:font-bold  hover:bg-white"
                href="https://en.wikipedia.org/wiki/Blockchain"
                target="_blank"
              >
                Blockchain
              </a>
            </div>
          </div> */}
          </div>
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-4 justify-end items-start flex-col rounded-xl h-40 sm:w-80 w-full my-5 eth-card white-glassmorphism">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <img src={img2} alt="img" />
                    {/* <SiEthereum fontSize={21} color="#fff"></SiEthereum> */}
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff"></BsInfoCircle>
                </div>

                <div>
                  <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Shardeum
                  </p>
                </div>
              </div>
            </div>

            <div className="  border-div py-10 p-3 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <Input
                placeholder="Address To"
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Amount (SHM)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
              <Input
                placeholder="Keyword (Gif)"
                name="keyword"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />
              {isLoading ? (
                <Loader />
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                  >
                    Send now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[1px] w-full bg-gray-500 my-0" /> */}
    </div>
  );
};

export default Welcome;
