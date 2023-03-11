import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";
import { AiOutlineConsoleSql, AiOutlineReload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiAlertFill } from "react-icons/ri";

const Table = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full border text-center">
              <thead class="border-b bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r"
                  >
                    Sender Address
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r"
                  >
                    Receiver Address
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    {addressFrom}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    {addressTo}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    {amount}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    {timestamp}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Print = () => {
  //console.log('print');
  location.reload();
  let printContents = document.getElementById("printablediv").innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
  alert("please refresh the page");
};

function print(amount) {
  document.getElementById("amounttb").value = amount;
  location.reload();
  let printContents = document.getElementById("printablediv").innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
  alert("please refresh the page");
}
// const reload = () => {
//   //console.log('print');
//   window.reload;
// };

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });
  const Print = () => {
    //console.log('print');
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    alert("please refresh the page");
    location.reload();
  };

  const Printo = () => {
    //console.log('print');
    let printContents = document.getElementById("printabledivs").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    alert("please refresh the page");
    location.reload();
  };

  return (
    <div id="printabledivs">
      <div
        className="bg-[#181918] m-4 flex flex-1
     2xl:min-w-[450px]
     2xl:max-w-[500px]
     sm:min-w-[270px]
     sm:max-w-[300px]
     flex-col p-3 rounded-md hover:shadow-2xl
    "
      >
        <div className="flex flex-col items-center w-full mt-3">
          <div className="w-full mb-6 p-2">
            <a
              href={`https://goerli.etherscan.io/address/${addressFrom}`}
              target="_blank"
              rel="noopener npreferrer"
            >
              <p className="text-white text-base">
                From: {shortenAddress(addressFrom)}
              </p>
            </a>
            <a
              href={`https://goerli.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noopener npreferrer"
            >
              <p className="text-white text-base">
                To: {shortenAddress(addressTo)}
              </p>
            </a>
            <p className="text-white text-base">Amount: {amount} SHM</p>
            {message && (
              <>
                <br />
                <p className="text-white text-base">Message: {message}</p>
              </>
            )}
          </div>
          <img
            src={gifUrl || url}
            alt="gif"
            className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
          />

          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}</p>
            {/* <div className="flex justify-center">
            <a href="table.jsx">
              <button className="text-[#37c7da] font-bold">Print</button>
            </a>
          </div> */}

            <div className="flex justify-center">
              <button
                className="text-[#37c7da] font-bold"
                type="button"
                onClick={Print}
              >
                {" "}
                Print
              </button>
            </div>
            <div id="printablediv" class="blank">
              <div className="flex justify-center my-20">
                <h1 className="font-bold font-lg">Transaction Receipt</h1>
              </div>
              <div className="mb-10">
                <p>
                  This receipt is to certify that the transaction described
                  below was succesfully added to the blockchain. This receipt
                  stands a valid proof of payment and can be produced as and
                  when necessary.
                </p>
              </div>
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full border text-center">
                        <thead class="border-b bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              class="text-sm font-medium text-white px-6 py-4 border-r"
                            >
                              Sender Address
                            </th>
                            <td class="px-6 py-4 whitespace-nowrap text-[#37c7da] font-bold border-r">
                              {addressFrom}
                            </td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              class="text-sm font-medium text-white px-6 py-4 border-r"
                            >
                              Receiver Address
                            </th>
                            <td class="px-6 py-4 whitespace-nowrap text-[#37c7da] font-bold border-r">
                              {addressTo}
                            </td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              class="text-sm font-medium text-white px-6 py-4 border-r"
                            >
                              Amount
                            </th>
                            <td
                              id="amounttb"
                              class="px-6 py-4 whitespace-nowrap text-[#37c7da] font-bold border-r"
                            >
                              {amount}
                            </td>
                          </tr>
                        </thead>
                        {/* <tbody class="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Timestamp
                      </th>
                      <td class="px-6 py-4 whitespace-nowrap text-[#37c7da] font-bold border-r">
                        {timestamp}
                      </td>
                    </tr>
                  </tbody> */}
                      </table>
                      <div className="flex justify-center mt-10">
                        <p className="font-bold">{timestamp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-30 mt-10">
                <p>
                  This transaction can be verified on Shardeum 1.X explorer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount, transaction } = useContext(TransactionContext);
  return (
    <div>
      <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <div className="flex flex-col md:p-12 py-12 px-4">
          {currentAccount ? (
            <h3 className="text-white text-3xl text-center my-2">
              Latest Transactions
            </h3>
          ) : (
            <h3 className="text-white text-3xl text-center my-2">
              Connect your account to see the latest transactions
            </h3>
          )}
          {/* Latest Transactions */}
          {/* Connect your account to see the latest transactions */}
          <div className="flex flex-wrap justify-center items-center mt-10">
            {transaction.reverse().map((transaction, i) => (
              <TransactionCard key={i} {...transaction} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
