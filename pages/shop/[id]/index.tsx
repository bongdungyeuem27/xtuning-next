import React from "react";
import Image from "next/image";
import { list } from "../../../images/shop/detail";
import Layout from "../../layout";
import { useRouter } from "next/router";
import type {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";

type Params = {
  id: string;
  data: string;
};

type Props = {};

const Detail = (props: Props) => {
  // console.log(props.params.id, props.params.data);
  const router = useRouter();
  const { id } = router.query;

  const car = list[Number(id) - 1];
  return (
    <div className="w-full mt-28">
      <div className="flex w-auto px-10 gap-8 items-stretch">
        <Image
          src={car.image}
          alt="car"
          width={1000}
          className="flex-1 drop-shadow-[-14px_13px_7px_white] object-scale-down"
        ></Image>
        <div className="flex-1 font-bold text-5xl shrink-0 flex items-center leading-tight">
          MODERN WAY TO <br></br>
          TRAVEL WITH <br></br>
          ELECTRIC CAR <br></br>
          IN YOUR DEVICE
        </div>
      </div>
      <div className="flex w-auto items-center mt-16">
        <div className="h-auto w-12 items-center">
          <div className="w-auto m-0 h-[1px] bg-[#7D8184] shrink-0"></div>
        </div>
        <button className="btn w-auto h-auto btn-accent shrink-0 text-white px-10 py-5 flex items-center justify-center normal-case text-xl">
          <div>Buy now</div>
        </button>
        <div className="flex w-full m-0 flex-col items-start justify-center">
          <div className="text-2xl font-semibold ml-7 my-5 h-10">
            {car.name}
          </div>
          <div className="w-full m-0 h-[1px] bg-[#6f8494] shrink-0"></div>
          <div className="text-xl ml-7 my-5 h-10 flex gap-20">
            <div className="">
              <div className="uppercase text-2xl">350 ML</div>
              <div className="font-thin text-lg">Range (S)</div>
            </div>
            <div className="">
              <div className="uppercase text-2xl">3.1 S</div>
              <div className="font-thin text-lg">0-60 mph</div>
            </div>
            <div className="">
              <div className="uppercase text-2xl">670 HP</div>
              <div className="font-thin text-lg">Rpeak power</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("path");
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
    ],
    fallback: false,
  };
};

type PropsStatic = {
  id: string;
};

export const getStaticProps: GetStaticProps<PropsStatic> = async (
  context: GetStaticPropsContext
) => {
  console.log("prop", context.params?.id);
  return {
    props: {
      id: "1",
    },
  };
};

Detail.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Detail;
