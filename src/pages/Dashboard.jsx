import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { footerBg, tringle, copy, arrow } from "../ui/images";
import DbCollaps from "../components/DbCollaps";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [disWith, setDisWith] = useState({
    top: 30,
    right: 30,
    left: -20,
    bottom: -5,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setparaHeight(refferance.current.clientHeight);
  }, [isOpen]);

  useEffect(() => {
    if (screen.width > 560) {
      setDisWith({
        top: 30,
        right: 30,
        left: 15,
        bottom: 10,
      });
    }
  }, []);

  const refferance = useRef(null);

  useEffect(() => {
    setparaHeight(refferance.current.clientHeight);
  }, [isOpen]);

  const headings = ["Payouts", "Trading Rules", "Economic Calendar"];

  const paras = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti",
  ];
  const data = [
    {
      name: "1",
      pv: 1.5,
      amt: 2,
    },
    {
      name: "2",
      pv: 3,
      amt: 2,
    },
    {
      name: "3",
      pv: 5,
      amt: 2,
    },
    {
      name: "4",
      pv: 7,
      amt: 2,
    },
    {
      name: "5",
      pv: 1,
      amt: 2,
    },
    {
      name: "6",
      pv: 9,
      amt: 2,
    },
    {
      name: "7",
      pv: 4,
      amt: 2,
    },
    {
      name: "8",
      pv: 8,
      amt: 2,
    },
    {
      name: "9",
      pv: 6,
      amt: 2,
    },
    {
      name: "10",
      pv: 8,
      amt: 2,
    },
  ];

  const userinfo = {
    login: "7382691",
    password: "HDJNSJ39",
    server: "CBT-Limited",
  };

  const accounts = [
    { name: "Funded", login: "7382691" },
    { name: "Phase 1", login: "8264069" },
    { name: "Phase 2", login: "3253879" },
    { name: "Phase 3", login: "0562804" },
    { name: "Phase 4", login: "5602781" },
  ];

  const copyFunc = (el, text) => {
    el.target.parentNode.classList.add("copied");
    setTimeout(() => {
      el.target.parentNode.classList.remove("copied");
    }, 450);
    console.log(typeof text)
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Navbar />
      <section className="dashboard relative">
        <div className="container">
          <div className="wrapper z-10 relative pt-12 sm:py-20">
            <div className="top">
              <div className="heading grid gap-4">
                <h1 className="text-3xl">Dashboard</h1>

                <p>
                  To easily track your performance, you will have access to you
                  own personal Dashboard to monitor your trading data in
                  real-time. This helps you to avoid breaching any of the
                  trading rules.
                </p>
              </div>
            </div>

            {/* Dashboard */}
            <div className="dashboard mt-10 grid gap-6">
              <div className="activity flex flex-col xs:flex-row gap-2 justify-between items-center py-2 px-3 border border-primary/30 rounded-lg">
                <div className="left flex justify-center items-center gap-1">
                  <div className="globe hidden sm:block">
                    <img className="w-[2.5rem]" src={footerBg} alt="globe" />
                  </div>
                  <h3 className="text-[0.9rem] sm:text-[1.1rem]">
                    Welcome Back,{" "}
                    <span className="name text-[0.9rem] sm:text-[1.1rem] font-codeProBold">
                      John!
                    </span>
                  </h3>
                </div>

                {/* Right */}
                <div className="right">
                  <div className="active-status flex gap-3 place-items-center">
                    <div className="dot h-2 w-2 rounded-full bg-lime-400"></div>
                    <div className="status flex place-items-center gap-2">
                      <h4 className="font-codeProBold text-[0.9rem] sm:text-[1.1rem]">
                        status:
                      </h4>
                      <span className="font-codePro text-[0.9rem] sm:text-[1.1rem]">
                        In progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="main-content grid lg:grid-cols-7 gap-6">
                {/* left */}
                <div className="left lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 w-full gap-5 bg-primary/[10%] py-5 px-3 rounded-xl">
                  {/* Select account */}
                  <div className="select">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Select your Account</h4>
                    </div>

                    <div className="content pt-5 px-3">
                      <article className="border border-primary/40 rounded-lg bg-main-bg/50 ">
                        <header
                          onClick={() => setIsOpen(!isOpen)}
                          className="flex justify-between cursor-pointer py-3 px-4"
                        >
                          <h3 className="text-[0.9rem] xs:text-base">
                            {accounts[0].login} - {accounts[0].name}
                          </h3>

                          <div className="arrow flex justify-center items-center ml-3">
                            <img
                              className={`max-w-[1.2rem] transform-gpu transition-all duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              src={arrow}
                              alt="arrow"
                            />
                          </div>
                        </header>

                        <div
                          style={{
                            maxHeight: isOpen ? paraHeight + "px" : "0",
                          }}
                          className={`content transition-all duration-300 overflow-hidden`}
                        >
                          <div
                            ref={refferance}
                            className="accounts ml-4 mt-2 pb-7 flex flex-col gap-3"
                          >
                            <div className="account">
                              <a href="#">
                                {accounts[1].login} - {accounts[1].name}
                              </a>
                            </div>
                            <div className="account">
                              <a href="#">
                                {accounts[2].login} - {accounts[2].name}
                              </a>
                            </div>
                            <div className="account">
                              <a href="#">
                                {accounts[3].login} - {accounts[3].name}
                              </a>
                            </div>
                            <div className="account">
                              <a href="#">
                                {accounts[4].login} - {accounts[4].name}
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  {/* Credentials */}
                  <div className="credentials">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Account Credentials</h4>
                    </div>

                    <div className="content grid gap-3 mt-5 mx-3 py-4 px-3 rounded-lg border border-primary/40 bg-main-bg/50 ">
                      {/* Login */}
                      <div className="login flex gap-1 justify-between items-center">
                        <h5>
                          <span className="font-codePro underline">Login</span>{" "}
                          - {userinfo.login}
                        </h5>

                        {/* copy */}
                        <div
                          onClick={(el) => {
                            copyFunc(el, userinfo.login);
                          }}
                          className="copy relative before:absolute before:content-['copied'] before:top-[-180%] before:left-[-480%] sm:before:left-[120%] before:bg-main-bg before:text-primary/90 before:z-20 before:text-[0.9rem] before:whitespace-nowrap before:px-3 before:py-2 before:rounded-lg before:transition-all before:duration-200 before:opacity-0 before:invisible transition-all duration-150"
                        >
                          <img
                            className="max-w-[1rem] sm:cursor-pointer"
                            src={copy}
                            alt="copy"
                          />
                        </div>
                      </div>
                      {/* Password  */}
                      <div className="password flex gap-1 justify-between items-center">
                        <h5>
                          <span className="font-codePro underline">
                            Password{" "}
                          </span>
                          - {userinfo.password}
                        </h5>
                        {/* copy */}
                        <div
                          onClick={(el) => {
                            copyFunc(el, userinfo.password);
                          }}
                          className="copy relative before:absolute before:content-['copied'] before:top-[-180%] before:left-[-480%] sm:before:left-[120%] before:bg-main-bg before:text-primary/90 before:z-20 before:text-[0.9rem] before:whitespace-nowrap before:px-3 before:py-2 before:rounded-lg before:transition-all before:duration-200 before:opacity-0 before:invisible transition-all duration-150"
                        >
                          <img
                            className="max-w-[1rem] sm:cursor-pointer"
                            src={copy}
                            alt="copy"
                          />
                        </div>
                      </div>
                      {/* Login */}
                      <div className="server flex gap-1 justify-between items-center">
                        <h5>
                          <span className="font-codePro underline">
                            Server{" "}
                          </span>
                          - {userinfo.server}
                        </h5>
                        {/* copy */}
                        <div
                          onClick={(el) => {
                            copyFunc(el, userinfo.server);
                          }}
                          className="copy relative before:absolute before:content-['copied'] before:top-[-180%] before:left-[-480%] sm:before:left-[120%] before:bg-main-bg before:text-primary/90 before:z-20 before:text-[0.9rem] before:whitespace-nowrap before:px-3 before:py-2 before:rounded-lg before:transition-all before:duration-200 before:opacity-0 before:invisible transition-all duration-150"
                        >
                          <img
                            className="max-w-[1rem] sm:cursor-pointer"
                            src={copy}
                            alt="copy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Select account */}
                  <div className="select">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Other sections:</h4>
                    </div>

                    <div className="content grid gap-4 pt-5 px-3">
                      <DbCollaps heading={headings[0]} para={paras[0]} />
                      <DbCollaps heading={headings[1]} para={paras[1]} />
                      <DbCollaps heading={headings[2]} para={paras[2]} />
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="right flex flex-col gap-6 lg:col-span-5">
                  {/* Select account */}
                  <div className="select bg-primary/[10%] py-5 px-3 rounded-xl">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Account Overview:</h4>
                    </div>

                    <div className="content ml-2 flex flex-col md:flex-row md:justify-between gap-6 py-6 px-3">
                      <div className="left">
                        <div className="states grid gap-2.5">
                          {/* State */}
                          <div className="state flex place-items-center gap-2">
                            <div className="status h-1.5 w-1.5 rounded-full bg-lime-400"></div>
                            <h4>
                              <span className="font-codeProBold text-[0.9rem]">
                                Profit
                              </span>{" "}
                              Target:{" "}
                              <span className="font-codePro ml-2 text-[0.9rem]">
                                $1,283 / $ 10,000
                              </span>
                            </h4>
                          </div>
                          {/* State */}
                          <div className="state flex place-items-center gap-2">
                            <div className="status h-1.5 w-1.5 rounded-full bg-lime-400"></div>
                            <h4>
                              <span className="font-codeProBold text-[0.9rem]">
                                Daily
                              </span>{" "}
                              Drawdown:{" "}
                              <span className="font-codePro ml-2 text-[0.9rem]">
                                $2,483 / $ 5,000
                              </span>
                            </h4>
                          </div>
                          {/* State */}
                          <div className="state flex place-items-center gap-2">
                            <div className="status h-1.5 w-1.5 rounded-full bg-yellow-500 "></div>
                            <h4>
                              <span className="font-codeProBold text-[0.9rem]">
                                Equity
                              </span>{" "}
                              Drawdown:{" "}
                              <span className="font-codePro ml-2 text-[0.9rem]">
                                $2,483 / $ 10,000
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* right */}
                      <div className="right">
                        <div className="heading">
                          <h4 className="font-codeProBold">Next Stage:</h4>
                        </div>
                        <p className="text-[0.9rem] max-w-[20rem]">
                          Complete the current stage to scale your account.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Chart section */}
                  <div className="chart grid gap-4 py-2 px-5 border border-primary/60 rounded-xl">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Chart:</h4>
                    </div>

                    {/* chart */}
                    <div className="bg-primary/10 rounded-lg mb-2 h-[300px] sm:h-[250px] md:h-[320px]">
                      <ResponsiveContainer height="100%">
                        <LineChart data={data} margin={disWith}>
                          <XAxis className="theXaxis" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line dataKey="pv" stroke="#C7B3FC" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* triangle */}
        <img
          className="triangle absolute -bottom-[20%] -left-[10%]  w-[50rem] rotate-[80deg] opacity-[0.09]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute bottom-[20rem] -left-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.09]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -top-[10%] -right-[20%]  w-[70rem] rotate-[80deg] opacity-[0.07]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -bottom-[5%] -right-[20%]  w-[50rem] rotate-[80deg] opacity-[0.07]"
          src={tringle}
          alt="tringle"
        />
      </section>
      <Footer />
    </>
  );
}
