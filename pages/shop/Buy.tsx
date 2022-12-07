"use client";
import React, { useContext } from "react";
import { Web3Ctx } from "../Web3Context";
import type { Web3ContextInterface } from "../Web3Context";
import * as anchor from "@project-serum/anchor";

type Props = {};

const Buy = (props: Props) => {
  const {
    program,
    provider,
    carStoreAccount,
    userAccount,
    carAccount,
    carTypeAccount,
  } = useContext<Web3ContextInterface>(Web3Ctx);
  const buyCar = async () => {
    await program?.methods
      .buyCar(new anchor.BN(0))
      .accounts({
        payerAccount: provider?.wallet.publicKey,
        reciverAccount: new anchor.web3.PublicKey(
          "36fPnEyp2q5k8dDw4qJ6jWd7dz9cMatpecXYtij1Qxt2"
        ),
        carStoreAccount: carStoreAccount,
        userAccount: userAccount,
        carAccount: carAccount,
        carTypeAccount: carTypeAccount,
      })
      .rpc()
      .then((success) => {
        console.log(success);
      })
      .catch((error) => console.log(error));
  };
  return (
    <button
      onClick={buyCar}
      className="btn btn-accent normal-case cursor-pointer text-white"
    >
      Buy now
    </button>
  );
};

export default Buy;
