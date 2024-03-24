"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 h-[200px]">
        <div className="absolute">
          <div className="bg-animation absolute">
              <div className="bg-animation-children"></div>
          </div>

          <div className="relative flex items-center justify-center flex-col m-auto h-full z-10 pt-24">
          <h1 className="text-7xl px-2 md:px-0 text-center font-bold text-[#DCDBDB]">
              Tokenize your{" "}
              <span
              style={{
                  background:
                  "linear-gradient(215deg, #FFF200 34.37%, #DAA520 49.63%, #F4AF00 62.38%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
              }}
              >
              Dream
              </span>
          </h1>
          <span className="text-[#CCCBCB] text-lg leading-8 md:w-7/12 text-center mt-5 mb-2 px-4 md:px-0">
              with fundings from your own <span
              style={{
                  background:
                  "linear-gradient(215deg, #FFF200 34.37%, #DAA520 49.63%, #F4AF00 62.38%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
              }}
              >
              fans{" "}
              </span>
               and{" "}
              <span
              style={{
                  background:
                  "linear-gradient(215deg, #FFF200 34.37%, #DAA520 49.63%, #F4AF00 62.38%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
              }}
              >
              followers
              </span>{" "}
          </span>
          {/* <div className="flex items-center gap-4 flex-col md:flex-row">
              <Link href="https://app.firethree.xyz" target="_blank">
              <button className="text-lg text-white bg-white/10 h-[50px] px-20 md:px-28 mt-5 rounded-xl border border-white/30 hover:opacity-80 transition-all">
                  Launch App
              </button>
              </Link>
              <Link
              href="https://www.npmjs.com/package/@triadxyz/firethree-protocol"
              target="_blank"
              >
              </Link>
          </div> */}
          </div>

          <div className="flex flex-col pt-36">
          <hr className="border-white/10 w-full" />

          <div className="flex items-center justify-between h-[70px]">
              <span className="text-sm text-white/30 pl-5">bamba.stars © 2023</span>

              <span className="text-sm text-white/30 pr-5">Eth Samba 2024</span>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
