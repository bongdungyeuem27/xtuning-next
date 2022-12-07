import React from "react";
import Image from "next/image";
import { list } from "../../images/shop/detail";
import Link from "next/link";
import Buy from "./Buy";
import Layout from "../layout";

type Props = {};

const Shop = (props: Props) => {
  return (
    <div className="flex w-full">
      <div className="flex-1">
        Shop
        <div className="grid grid-cols-4 gap-5 mt-10">
          {list.map((value, index) => {
            return (
              <div className="text-center px-8 py-10 bg-white rounded-lg">
                <Image
                  src={value.image}
                  alt={index.toString()}
                  width={300}
                  height={400}
                  className="object-cover w-full"
                ></Image>
                <div className="text-theme mt-8 text-xl font-medium">
                  {value.name}
                </div>
                <div className="w-auto m-auto text-center flex item-center justify-center gap-3 mt-5">
                  <Link
                    href={`/shop/${value.id}`}
                    className="btn btn-outline normal-case text-theme"
                  >
                    More details
                  </Link>
                  <Buy></Buy>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="shrink-0"></div>
    </div>
  );
};

Shop.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Shop;
