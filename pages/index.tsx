import type { NextPage } from "next";

import ExportedImage from "next-image-export-optimizer";

import Layout from "../components/Layout";
import logos from "../public/images/logo.jpg";
import Header from "../components/Header";
import Video from "../components/Video";
import ParticlesBg from "../components/particles";
import { Fade, Bounce, Roll } from "react-reveal";
import ethscan from "../public/images/ethscan.png";
import uniswap from "../public/images/uniswap.png";
import dextools from "../public/images/dextools.png";
import logo from "../public/images/logo.png";
import twitter from "../public/images/twitter.png";
import telegram from "../public/images/telegram.png";

import laptop from "../public/images/laptop.png";
import chart from "../public/images/chart.png";

import { FaCopy } from "react-icons/fa";
import { BsTelegram, BsTwitter, BsMedium, BsGithub } from "react-icons/bs";
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";

import "react-vertical-timeline-component/style.min.css";

const Home: NextPage = () => {
  const tokenomics = [
    {
      name: "Supply",
      value: "100",
      symbol: "M",
    },
    {
      name: "Liquidity Pool",
      value: "95",
      symbol: "%",
    },
    {
      name: "Strategic Partners",
      value: "4",
      symbol: "%",
    },
    {
      name: "Team Tokens",
      value: "1",
      symbol: "%",
    },
  ];
  const roadmap = [
    {
      title: "Phase 01",
      sub: "Starting",
      desc: [
        "Website Design",
        "Smart Contract Creation",
        "Launch on Uniswap",
        "First Marketing Campaign",
        "Full Audit completed",
      ],
    },
    {
      title: "Phase 02",
      sub: "Launching",
      desc: [
        "The Swapper AMA",
        "First API Endpoint",
        "New Liquidty Pool",
        "Private API Key System",
        "Coinmarketcap and CoinGecko Listing",
      ],
    },
    {
      title: "Phase 03",
      sub: "Accelerating",
      desc: [
        "Dashboard Development",
        "Contest Campaign",
        "CEX Listing",
        "The Swapper WEB3 Wallet Prototype",
        "The Swapper Hackathon",
      ],
    },
    {
      title: "Phase 04",
      sub: "Improving",
      desc: [
        "The Swapper Mobile APP Design",
        "New Liquidty Pool Will be Added",
        "Dashboard Release for Users",
        "Creating DEX Affiliated with The Swapper",
        " Creating DEX Affiliated with The Swapper",
      ],
    },
    {
      title: "Phase 05",
      sub: "Improving",
      desc: [
        "The Swapper Mobile APP Release",
        "The Swapper DEX Release",
        "Further CEX Listing",
        "Big Partnerships",
        "Bug Bounty",
      ],
    },
  ];

  return (
    <div>
      <Header />
      <Layout>
        {/* <Header /> */}
        <section
          className=" min-h-[calc(100vh-5rem)] mb-0 pb-0 w-full bg-gray-200  md:py-0 bg-cover bg-center md:bg-center md:bg-fixed relative"
          id="Home"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          {/* <ParticlesBg /> */}
          <div className="h-full flex flex-col  items-center justify-center md:justify-around md:flex-row-reverse   md:gap-2 md:items-center  w-full md:px-24 md:py-16 py-16 p-3">
            <Fade>
              <div className="md:block hidden   mb-3 w-1/2  animate-bouncing">
                <ExportedImage
                  src={laptop}
                  alt="illustration"
                  layout="responsive"
                  className="animate-bouncing"
                />
              </div>
            </Fade>
            <div className=" md:pt-0 md:w-1/2 px-6 md:p-3 w-full">
              <Fade>
                <h3 className=" text-4xl md:text-5xl md:pb-4 font-extrabold   md:text-start  text-black my-1 leading-snug">
                  POWERFUL FOR DEVELOPERS. <br></br>FAST FOR EVERYONE
                </h3>
                <p className="text-black border-l-2 border-solid border-black p-2 px-4 text-lg  md:text-left ">
                  Swapper is developing an API technology that provides
                  end-to-end liquidity endpoints. Developers who want to develop
                  DEX or dApp can use Swapper API for token swap transactions.
                  <br />
                  <br />
                  Swapper sends requests to 6 different liquidity pools at the
                  same time. In this way, it finds the most suitable price match
                  and shows it to the user.
                </p>

                <div className="flex flex-col md:flex-row  gap-2 md:mb-0 my-3 md:my-6">
                  <button
                    onClick={() =>
                      (window.location.href = "https://app.uniswap.org/")
                    }
                    className="  bg-black text-white p-3 px-5  rounded  mr-1 border-none w-fit hover:scale-110 transition-all duration-700"
                  >
                    BUY NOW
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://the-swapper-project.gitbook.io/the-swapper/")
                    }
                    className="   bg-none border border-solid border-black text-black w-fit p-3 px-6  rounded mr-1 hover:scale-110 transition-all duration-700"
                  >
                    START BUILDING
                  </button>

                  {/* <button className=" bg-primary text-white p-3 font-bold rounded-sm border-none w-6/12">
                Sign Up
              </button> */}
                </div>
              </Fade>
              <div
                className="text-gray-700 gap-2 flex items-center cursor-copy bg-bg1 w-fit bg-opacity-10 my-3 p-1 text-sm font-bold rounded"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0x0000000000000000000000000000"
                  );
                }}
              >
                <FaCopy />
                0x0000000000000000000000000000
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white  flex justify-center items-center gap-6 py-5 ">
          <div className="flex items-center gap-1">
            <div className="block w-6">
              <ExportedImage
                src={uniswap}
                alt=""
                layout="responsive"
                className=" opacity-50"
              />
            </div>
            <p className="font-bold text-lg opacity-50 text-black">Uniswap</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="block w-6">
              <ExportedImage
                src={ethscan}
                alt=""
                layout="responsive"
                className="opacity-50"
              />
            </div>
            <p className="font-bold text-lg opacity-50 text-black">Etherscan</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="block w-6">
              <ExportedImage
                src={dextools}
                alt=""
                layout="responsive"
                className="opacity-50"
              />
            </div>
            <p className="font-bold text-lg opacity-50 text-black">Dextools</p>
          </div>
        </section>

        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col md:flex-row justify-center items-center md:items-start p-6 md:p-12 py-12 w-full bg-white bg-cover bg-right  md:bg-fixed"
          id="About"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <div className="flex flex-col items-start justify-start   md:w-1/2  transition-all duration-500 h-full md:hover:border-none">
            <h3 className=" text-4xl md:text-6xl mb-7  w-fit  font-extrabold  text-black">
              What is Swapper
            </h3>
            <Fade>
              <h4 className=" md:text-2xl  text-lg  text-black text-left">
                What is Swapper? Welcome to Swapper! You can send requests to 6
                of the world&apos;s largest liquidity pools using the Swapper
                API. In this way, you can find the best price of the token you
                want to swap.
                <br />
                <br /> Swapper is developing an API technology that provides
                end-to-end liquidity endpoints. Developers who want to develop
                DEX or dApp can use Swapper API for token swap transactions.
                <br />
                <br />
                Swapper sends requests to 6 different liquidity pools at the
                same time. In this way, it finds the most suitable price match
                and shows it to the user.
              </h4>
            </Fade>
          </div>
          <Fade>
            <div className="bg-black flex flex-col justify-center items-center gap-6 px-6 py-16 w-full my-5 md:w-1/3">
              <p className="text-white text-5xl font-bold">Swapper</p>
              <p className="text-white text-3xl font-bold">Smart Contract</p>
              <p className="text-white md:text-sm text-xs ">
                0x0000000000000000000000000000000000000
              </p>
              <p className="text-white text-3xl font-bold">Token Supply</p>
              <p className="text-white">100,000,000</p>
              <button
                onClick={() =>
                  (window.location.href = "https://www.dextools.io")
                }
                className="   bg-none border border-solid border-white text-white w-fit p-3 px-6  rounded mr-1 hover:scale-110 transition-all duration-700"
              >
                Buy Now
              </button>
            </div>
          </Fade>
        </section>
        <section
          className="p-6 md:p-12 py-12 w-full bg-black flex flex-col items-center bg-cover bg-right md:bg-fixed"
          id="Roadmap"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <h3 className="text-4xl md:text-6xl  md:text-center w-full  font-extrabold  text-white ">
              Roadmap
            </h3>
          </Fade>
          <p className="text-zinc-500 w-full text-xl mb-12 md:text-center">
            Follow our Journey
          </p>
          <div className="flex flex-col justify-center w-full md:w-[60%]  md:items-end items-center gap-5 md:gap-6  ">
            {roadmap.map((item, index) => (
              <Fade key={index}>
                <div className="shadow-lg group  md:px-8  w-full md:w-1/2 md:even:self-start md:my-4   flex flex-col items-center justify-center md:justify-start bg-opacity-60 md:pl-9 md:border-l md:border-dashed md:border-gray-400 md:even:border-l-0 md:even:border-r relative md:before:h-5 md:before:w-5 md:before:rounded-full md:before:bg-gray-400 md:before:absolute md:before:top-0 md:odd:before:left-[-10px] md:even:before:right-[-10px]">
                  <div className=" bg-none md:bg-[#1d1d1d] p-4 w-full md:w-5/6">
                    <h3 className="z-10 md:absolute text-3xl   md:text-4xl  font-bold my-3 text-left  text-white md:top-[-60px] md:group-even:right-[-17%] md:group-odd:left-[-17%] ">
                      {item.title}
                    </h3>

                    <div className=" text-lg  text-white z-10 bg-[#1d1d1d] p-3 px-6 md:px-0 md:p-0">
                      <h3 className=" z-10 text-2xl  md:text-3xl  font-extrabold my-3   text-white group-hover:text-white self-start">
                        {item.sub}
                      </h3>
                      {item.desc.map((item, index) => (
                        <div
                          className="my-1 flex items-center gap-1"
                          key={index}
                        >
                          <span className=" font-semibold text-[#7d7d7d]">
                            - {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>
        <section
          className="  w-full bg-zinc-900 bg-cover bg-left"
          id="Tokenomics"
          style={{ backgroundImage: "url('images/bg.jpg')" }}
        >
          <div className=" w-full  py-12 px-6 md:px-48">
            <Fade>
              <h3 className="md:text-center text-4xl md:text-6xl mb-12 p-1 font-extrabold  text-white w-full">
                Tokenomics
              </h3>
            </Fade>
            <div className="flex flex-col md:flex-row justify-between gap-8 flex-wrap items-start w-full py-7">
              <Fade>
                <div className="block  w-full md:w-1/3 self-center">
                  <ExportedImage
                    src={chart}
                    alt="logo"
                    layout="responsive"
                    className=" rounded-full"
                  />
                </div>
              </Fade>
              <div className="w-full md:w-3/5 flex flex-col gap-3 md:gap-10 md:flex-row flex-wrap">
                {tokenomics.map((item, index) => (
                  <Fade key={index} left>
                    <div className="md:w-[40%] border-r-4 w-1/2 even:self-end even:border-l-4 even:border-r-0 md:border-l-4 md:border-r-0 border-solid border-gray-600 p-4 text-white bg-zinc-700">
                      <h3 className="text-4xl md:text-8xl mb-3 flex items-end  gap-1 ">
                        {item.value}
                        <span className="text-zinc-400 text-2xl md:text-4xl font-bold">
                          {item.symbol}
                        </span>
                      </h3>
                      <p className="md:text-2xl font-bold">{item.name}</p>
                    </div>
                  </Fade>
                ))}
                <Fade>
                  <p className="text-white font-bold text-xl self-end text-center">
                    LP locked for 3 months. Contract ownership renounced
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-6 md:p-12 py-12 w-full bg-white flex flex-col items-center"
          id=""
        >
          <Fade>
            <h3 className="text-center text-3xl md:text-6xl mb-12 p-1 font-extrabold  text-black w-full">
              Join our community
            </h3>
          </Fade>
          <Fade>
            <div className="flex flex-col md:flex-row gap-3 w-full md:px-36 my-3 justify-center items-center md:justify-start">
              <a
                href="https://twitter.com/TheSwapperToken"
                className=" bg-stone-500 bg-opacity-10 text-white rounded-lg flex-1 p-8 w-full  md:py-12 flex flex-col justify-center items-center"
              >
                <ExportedImage
                  src={twitter}
                  alt="logo"
                  width={50}
                  height={50}
                  className=" "
                />
                <p className="text-black font-semibold">Twitter</p>
                <p className="text-black ">Swapper</p>
              </a>
              <a
                href="https://t.me/TheSwapperChannel"
                className="bg-stone-500 text-white  bg-opacity-10 rounded-lg flex-1 w-full p-8 md:py-12 flex flex-col justify-center items-center "
              >
                <ExportedImage
                  src={telegram}
                  alt="logo"
                  width={50}
                  height={50}
                />
                <p className="text-black font-semibold">Telegram</p>
                <p className="text-black ">Swapper</p>
              </a>
            </div>
          </Fade>
        </section>

        <section className="  w-full bg-black " id="">
          <div className=" w-full  py-24 px-6 md:px-24">
            <div className="flex items-center mb-5 justify-start">
              <div className="block w-20 ">
                <ExportedImage
                  src={logo}
                  alt="logo"
                  layout="responsive"
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center w-full md:gap-3 justify-around">
              <div className="flex  flex-col gap-5 items-start md:flex-row w-full md:justify-between">
                <ul className="text-zinc-500 text-sm  flex flex-col items-start justify-start ">
                  <p className="text-white font-bold text-base">Learn More</p>
                  <li>
                    <a href="https://the-swapper-project.gitbook.io/the-swapper/swap-api/quick-start">
                      Quick Start
                    </a>
                  </li>
                  <li>
                    <a href="#Roadmap">Roadmap</a>
                  </li>
                  <li>
                    <a href="https://the-swapper-project.gitbook.io/the-swapper/tokenomics-usdswap">
                      Allocation
                    </a>
                  </li>
                  <li>
                    <a href="https://the-swapper-project.gitbook.io/the-swapper/">
                      Docs
                    </a>
                  </li>
                </ul>
                <ul className="text-zinc-500 text-sm  flex flex-col items-start justify-start ">
                  <p className="text-white font-bold text-base">
                    Connect with Swapper
                  </p>
                  <li>
                    <a href="https://twitter.com/TheSwapperToken">Twitter</a>
                  </li>
                  <li>
                    <a href="https://t.me/TheSwapperChannel">Telegram</a>
                  </li>
                  <li>
                    <a href="https://the-swapper-project.gitbook.io/the-swapper/">
                      Gitbook
                    </a>
                  </li>
                  <li>
                    <a href="">Github</a>
                  </li>
                </ul>
                <ul className="text-zinc-500 text-sm  flex flex-col items-start justify-start ">
                  <p className="text-white font-bold text-base">Legal</p>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Disclaimer</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center w-full">
              <p className="text-zinc-500 text-lg font-bold">
                © {new Date().getFullYear()} Swapper | All Rights Reserved.
              </p>
              <Fade top>
                <div className="flex gap-3 my-3 justify-center items-center md:justify-start">
                  <a
                    href="https://t.me/TheSwapperChannel"
                    className="text-zinc-500"
                  >
                    <BsTelegram size={25} />
                  </a>
                  <a
                    href="https://twitter.com/TheSwapperToken"
                    className="text-zinc-500"
                  >
                    <BsTwitter size={25} />
                  </a>
                  <a href="https://github.com" className="text-zinc-500">
                    <BsGithub size={25} />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
