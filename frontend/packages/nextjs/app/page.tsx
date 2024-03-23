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
              with fundings from your own fans{" "}
              {/* <Link
              className="underline hover:text-fire-orange text-fire-yellow transition-all"
              href="https://twitter.com/GenesysGo"
              target="_blank"
              >
              @GenesysGo
              </Link>.
              <br />
              Yes it&apos;s similar to Fireb*** but 3x better! */}
          </span>
          <div className="flex items-center gap-4 flex-col md:flex-row">
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
          </div>
          </div>

          <div className="flex flex-col pt-36">
          <hr className="border-white/10 w-full" />

          <div className="flex items-center justify-between h-[70px]">
              <span className="text-sm text-white/30 pl-5">bamba.stars © 2023</span>

              <span className="text-sm text-white/30 pr-5">Eth Samba 2024</span>
          </div>
          </div>

          {/* TESTE SCAFFOLD */}

          {/* <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
