import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import clsx from "clsx";
import { logo } from "../images";
import Image from "next/image";

const list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Sevices",
    link: "/sevices",
  },
  {
    name: "Contacts",
    link: "/contacts",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className={"bg-theme px-12 py-8 text-white"}>
      <nav className="w-fullh-2 flex items-stretch justify-between">
        <div className="flex flex-1">
          <Image src={logo} width={400} alt="logo"></Image>
        </div>
        <div className="flex flex-1 gap-4 font-thin p-2 justify-evenly items-center">
          {list.map((value, index) => {
            const active =
              pathname == "/"
                ? value.link == "/"
                : pathname.includes(value.link) && value.link != "/";
            return (
              <Link
                key={index}
                href={value.link}
                replace={true}
                className={clsx("font-light", { "text-grey": !active })}
              >
                {value.name}
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <div className="flex w-[1px] h-full bg-white"></div>
          <Link href={"/register"} className="flex items-center px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              enableBackground="new 0 0 487.3 487.3"
              viewBox="0 0 487.3 487.3"
            >
              <path
                fill="#fff"
                d="M487.2,69.7c0,12.9-10.5,23.4-23.4,23.4h-322c-12.9,0-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4h322.1    C476.8,46.4,487.2,56.8,487.2,69.7z M463.9,162.3H141.8c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1    c12.9,0,23.4-10.5,23.4-23.4C487.2,172.8,476.8,162.3,463.9,162.3z M463.9,278.3H141.8c-12.9,0-23.4,10.5-23.4,23.4    s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,288.8,476.8,278.3,463.9,278.3z M463.9,394.3H141.8    c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,404.8,476.8,394.3,463.9,394.3z     M38.9,30.8C17.4,30.8,0,48.2,0,69.7s17.4,39,38.9,39s38.9-17.5,38.9-39S60.4,30.8,38.9,30.8z M38.9,146.8    C17.4,146.8,0,164.2,0,185.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,146.8,38.9,146.8z M38.9,262.8    C17.4,262.8,0,280.2,0,301.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,262.8,38.9,262.8z M38.9,378.7    C17.4,378.7,0,396.1,0,417.6s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9C77.8,396.2,60.4,378.7,38.9,378.7z"
                className="color000 svgShape"
              />
            </svg>
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
