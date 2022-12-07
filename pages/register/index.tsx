import React, { useContext, useState } from "react";
import { Web3Ctx } from "../Web3Context";
import type { Web3ContextInterface } from "../Web3Context";
import Layout from ".././layout";

function Registration() {
  const { program, provider, userAccount } =
    useContext<Web3ContextInterface>(Web3Ctx);
  const handleRegister = async () => {
    await program?.methods
      .addUser("k", "lamdong")
      .accounts({
        user: provider?.wallet.publicKey,
        userAccount: userAccount,
      })
      .rpc()
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-theme">
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Account
              </label>
              <div className="flex flex-col items-start">
                <div className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-theme focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {provider?.publicKey.toString()}a
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="name"
                  name="name"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-theme focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Address
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="address"
                  name="address"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-theme focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button
                onClick={handleRegister}
                className="btn btn-accent w-full px-4 py-2 rounded-3xl tracking-wide transition-colors duration-200 transformfocus:outline-none"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Registration.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Registration;
