import React, { useContext } from "react";
import { panel } from "../images/panel";
import Image from "next/image";
import { list } from "../images/index";
import Layout from "./layout";
import type { Web3ContextInterface } from "./Web3Context";
import { Web3Ctx } from "./Web3Context";
import {
  useWalletKit,
  useSolana,
  useConnectedWallet,
} from "@gokiprotocol/walletkit";

type Props = {};

const Home = (props: Props) => {
  const { provider } = useContext<Web3ContextInterface>(Web3Ctx);
  const { connect } = useWalletKit();
  console.log(provider?.publicKey);
  return (
    <div>
      <section className="px-12 flex flex-col gap-12 w-auto">
        <div className="absolute right-0 z-0">
          <Image src={panel} alt={"panel"} width="800"></Image>
        </div>
        <div className="text-9xl text-bold mt-20">Car Turning</div>
        <div className="text-md font-extralight tracking-wider">
          The list of our features is very large and is updated <br></br>
          daily. It is difficult to imagine a modern car without <br></br>
          additional equipment.
        </div>

        {provider?.publicKey ? (
          <div className="btn btn-accent bg-green rounded-5xl w-max px-10  font-light text-lg normal-case ">
            Connected
          </div>
        ) : (
          <button
            className="btn btn-accent bg-green rounded-5xl w-max px-10  font-light text-lg normal-case "
            onClick={connect}
          >
            Connect
          </button>
        )}

        <div className="flex gap-12">
          <div className="text-center">
            <div className="text-3xl">$ 5000</div>
            <div className="font-thin text-xl mt-2">
              Minimum allowable <br></br>
              deposit for tuning
            </div>
          </div>
          <div className="h-auto w-[1px] bg-white"></div>
          <div className="text-center">
            <div className="text-3xl">24 / 7</div>
            <div className="font-thin text-xl mt-2">
              Workshop <br></br>
              working hours
            </div>
          </div>
        </div>
      </section>
      <ul className="w-auto flex  mt-40">
        {list.map((value, index) => {
          return (
            <li
              key={index}
              className="flex flex-col items-center justify-center flex-1 py-10 even:bg-grey bg-white "
            >
              <Image src={value} alt="p1" width={150}></Image>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
