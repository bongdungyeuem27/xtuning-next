"use client";
import React, { createContext, useState, use, useEffect } from "react";
import {
  Program,
  Provider,
  web3,
  AnchorProvider,
  Wallet,
  utils,
} from "@project-serum/anchor";
import {
  useWalletKit,
  useSolana,
  useConnectedWallet,
} from "@gokiprotocol/walletkit";
import { IDL, Carstore } from "../contracts/carstore";

export const DEFAULT_COMMITMENT = "confirmed";
export const PROGRAM_ADDRESS = new web3.PublicKey(
  "G7XMcMqA1163mYCQdLwoTaBA9PYS1eZePViaRnWprc9f"
);
export const NETWORK = web3.clusterApiUrl("testnet");
// export const NETWORK = "http://127.0.0.1:8899";
const programId = new web3.PublicKey(PROGRAM_ADDRESS);

export type Web3ContextInterface = {
  provider?: AnchorProvider | undefined;
  program?: Program<Carstore> | undefined;
  carTypeAccount?: web3.PublicKey | undefined;
  carAccount?: web3.PublicKey | undefined;
  userAccount?: web3.PublicKey | undefined;
  carStoreAccount?: web3.PublicKey | undefined;
  setReload?: React.Dispatch<React.SetStateAction<boolean>>;
  reload?: boolean;
};

export const Web3Ctx = createContext<Web3ContextInterface>({});

// Provider in your Web3

type Web3Props = {
  children: React.ReactNode;
};

export default function Web3ContextProvider(props: Web3Props) {
  const [reload, setReload] = useState(false);
  const wallet: any = useConnectedWallet();
  const [provider, setProvider] = useState<AnchorProvider | undefined>();
  const [program, setProgram] = useState<Program<Carstore> | undefined>();
  const [carTypeAccount, setCarTypeAccount] = useState<
    web3.PublicKey | undefined
  >();
  const [carAccount, setCarAccount] = useState<web3.PublicKey | undefined>();
  const [userAccount, setUserAccount] = useState<web3.PublicKey | undefined>();
  const [carStoreAccount, setCarStoreAccount] = useState<
    web3.PublicKey | undefined
  >();

  const getProvider = async () => {
    const connection = new web3.Connection(NETWORK, DEFAULT_COMMITMENT);
    // console.log(connection)
    const provider = new AnchorProvider(connection, wallet, {
      preflightCommitment: DEFAULT_COMMITMENT,
    });
    const program = new Program(IDL, programId, provider);

    const [carTypeAccount, carTypeAccountBump] =
      web3.PublicKey.findProgramAddressSync(
        [utils.bytes.utf8.encode("car_type_account")],
        program.programId
      );
    setCarTypeAccount(carTypeAccount);

    const [carAccount, carAccountBump] = web3.PublicKey.findProgramAddressSync(
      [utils.bytes.utf8.encode("car_account")],
      program.programId
    );
    setCarAccount(carAccount);

    const [userAccount, userAccountBump] =
      web3.PublicKey.findProgramAddressSync(
        [utils.bytes.utf8.encode("user_account")],
        program.programId
      );
    setUserAccount(userAccount);

    const [carStoreAccount, carStoreAccountBump] =
      web3.PublicKey.findProgramAddressSync(
        [utils.bytes.utf8.encode("car_store_account")],
        program.programId
      );
    setCarStoreAccount(carStoreAccount);
    // await program?.methods
    //   .initialize(carTypeAccountBump, carAccountBump, userAccountBump, carStoreAccountBump)
    //   .accounts({
    //     carTypeAccount: carTypeAccount,
    //     carAccount: carAccount,
    //     userAccount: userAccount,
    //     carStoreAccount: carStoreAccount,
    //     user: provider.wallet.publicKey,
    //     systemProgram: web3.SystemProgram.programId,
    //   })
    //   .rpc()

    // await program?.methods
    //   .addUser("k", "lamdong")
    //   .accounts({
    //     user: provider?.wallet.publicKey,
    //     userAccount: userAccount,
    //   })
    //   .rpc()
    //   .then((success) => {
    //     console.log(success);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    setProvider(provider);
    setProgram(program);
  };

  // use(getProvider());

  useEffect(() => {
    if (wallet) getProvider();
  }, [wallet]);

  const data: Web3ContextInterface = {
    provider,
    program,
    carTypeAccount,
    carAccount,
    userAccount,
    carStoreAccount,
    setReload,
    reload,
  };

  return <Web3Ctx.Provider value={data}>{props.children}</Web3Ctx.Provider>;
}
