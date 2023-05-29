import { useState } from "react";
import { tringle } from "../ui/images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";

export default function Prices() {
  const [btnNum, setBtnNum] = useState(5);

  const priceValues = {
    0: ["500", "500", "500", "1,000", "1,000", "1,000", "800", "500"],
    1: ["250", "250", "250", "500", "500", "500", "500", "250"],
    2: ["500", "500", "500", "1,000", "1,000", "1,000", "1,000", "500"],
    3: ["500", "500", "500", "1,000", "1,000", "1,000", "2,500", "1,250"],
    4: ["2,500", "2,500", "2,500", "5,000", "5,000", "5,000", "5,000", "2,500"],
    5: [
      "5,000",
      "5,000",
      "5,000",
      "10,000",
      "10,000",
      "10,000",
      "10,000",
      "5,000",
    ],
  };

  const refundable = ["1080", "57", "127", "227", "327", "527"];

  return (
    <section className="prices relative">
      <div className="container z-10 relative">
        <div className="wrapper">
          <div className="heading grid gap-4 justify-center items-center text-center">
            <h2 className="text-3xl">Price</h2>
            <p className="max-w-[55rem]">
              Choose your favorite account size, start trading, earn
              profit-splits and bonuses
            </p>
          </div>

          {/* Desktop version */}
          <div className="desktop-content relative z-10 hidden sm:grid xl:grid-cols-9 gap-5 w-full border-2 border-primary/20 rounded-xl py-8 px-6 mt-10">
            {/* Left side */}
            <div className="left col-span-4  grid items-center justify-start gap-4 rounded-xl  font-medium">
              <div className="heading grid gap-5">
                <h4>
                  Choose your <span className="font-bold">Balance</span>:
                </h4>

                <div className="prices grid grid-cols-3 gap-4">
                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 1
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(1)}
                    >
                      $ 5,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 2
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(2)}
                    >
                      $ 10,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 3
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(3)}
                    >
                      $ 25,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 4
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(4)}
                    >
                      $ 50,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 5
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(5)}
                    >
                      $ 100,000
                    </button>
                  </div>
                </div>
              </div>

              <div className="refund flex w-full items-center">
                <span className="text-base text-bold font-codePro">
                  Refundable fee:
                </span>
                <h4 className="text-[1.4rem] font-extrabold ml-4">
                  $ {refundable[btnNum]}
                </h4>
              </div>

              <div className="btn flex justify-start">
                <a
                  href="#"
                  className="uppercase text-xs font-codePro font-semibold py-2 px-5 border-2 border-primary  rounded-md"
                >
                  get started now
                </a>
              </div>
            </div>

            <div className="grid col-span-5 gap-3 rounded-xl w-full">
              <div className="  mt-12 item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Trading <span className="font-bold"> period </span>:
                </span>
                <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_1'] before:-top-10 before:text-[0.9rem]">
                  <span className="day-one">45 Days</span>
                </div>
                <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_2'] before:-top-10 before:text-[0.9rem]">
                  <span className="day-two">45 Days</span>
                </div>
                <span className="col-span-2 relative before:absolute before:font-bold before:content-['Funded'] before:-top-10">
                  Indefinite
                </span>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Minimum trading <span className="font-bold"> days </span>:
                </span>
                <span className="col-span-2">10 Days</span>
                <span className="col-span-2">10 Days</span>
                <span className="col-span-2">-</span>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Max <span className="font-bold"> Daily </span> Loss:
                </span>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][0]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][1]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][2]}</span>
                </div>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Max <span className="font-bold"> Overall </span> Loss:
                </span>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][3]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][4]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][5]}</span>
                </div>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Profit <span className="font-bold">Target</span>:
                </span>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][6]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][7]}</span>
                </div>
                <span className="col-span-2">-</span>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="mobile-content relative sm:hidden flex flex-wrap gap-4 md:gap-12 justify-start items-center mt-10">
            <div className="top font-medium">
              <div className="heading grid gap-5">
                <h4>
                  Choose your{" "}
                  <span className="font-bold text-base">Balance</span>:
                </h4>

                <div className="prices grid grid-cols-3 gap-4">
                  <div className="price">
                    <button
                      className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                        btnNum === 1 ? " bg-primary/30" : "bg-primary/[14%]"
                      }`}
                      onClick={() => setBtnNum(1)}
                    >
                      $ 5,000
                    </button>
                  </div>
                  <div className="price">
                    <button
                      className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                        btnNum === 2 ? " bg-primary/30" : "bg-primary/[14%]"
                      }`}
                      onClick={() => setBtnNum(2)}
                    >
                      $ 10,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                        btnNum === 3 ? " bg-primary/30" : "bg-primary/[14%]"
                      }`}
                      onClick={() => setBtnNum(3)}
                    >
                      $ 25,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                        btnNum === 4 ? " bg-primary/30" : "bg-primary/[14%]"
                      }`}
                      onClick={() => setBtnNum(4)}
                    >
                      $ 50,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                        btnNum === 5 ? " bg-primary/30" : "bg-primary/[14%]"
                      }`}
                      onClick={() => setBtnNum(5)}
                    >
                      $ 100,000
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Pagination]}
              className="evaluation-slider mt-6 flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
            >
              <SwiperSlide className="">
                <div className="phase1 pt-2 pb-6 item grid gap-6 border border-primary/30 rounded-lg">
                  <div className="heading py-3 mt-2 bg-primary">
                    <h3 className="px-5 text-main-bg font-codeProBold font-extrabold">
                      Phase 1
                    </h3>
                  </div>
                  <div className="items grid gap-4 px-4">
                    <div className="item flex justify-between gap-6">
                      <span>
                        Trading
                        <span className="font-bold"> period</span>:
                      </span>
                      <div className="">
                        <span className="day-one">45 </span> Days
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Minimum trading
                        <span className="font-bold"> days </span>:
                      </span>
                      <span className="">10 Days</span>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold"> Daily </span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][0]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold"> Overall </span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][3]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Profit {" "}
                        <span className="font-bold"> Target </span>:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][6]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="phase2 pt-2 pb-6 item grid gap-6 border border-primary/30 rounded-lg">
                  <div className="heading py-3 mt-2 bg-primary">
                    <h3 className="px-5 text-main-bg font-codeProBold font-extrabold">
                      Phase 2
                    </h3>
                  </div>

                  <div className="items grid gap-4 px-4">
                    <div className="item flex justify-between gap-6">
                      <span>
                        Trading
                        <span className="font-bold"> period </span>:
                      </span>
                      <div className="">
                        <span className="day-two">45</span> Days
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Minimum trading
                        <span className="font-bold"> days </span>:
                      </span>
                      <span className="">10 Days</span>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold"> Daily </span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][1]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold"> Overall </span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][4]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Profit
                        <span className="font-bold"> target </span>:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][7]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="funded pt-2 pb-6 item grid gap-6 border border-primary/30 rounded-lg">
                  <div className="heading py-3 mt-2 bg-primary">
                    <h3 className="px-5 text-main-bg font-codeProBold font-extrabold">
                      Funded
                    </h3>
                  </div>

                  <div className="items grid gap-4 px-4">
                    <div className="item flex justify-between gap-6">
                      <span>
                        Trading
                        <span className="font-bold"> period </span>:
                      </span>

                      <span>Indefinite</span>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Minimum trading
                        <span className="font-bold"> days </span>:
                      </span>
                      <span className="">-</span>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold"> Daily </span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][2]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold"> Overall </span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][5]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Profit
                        <span className="font-bold"> Target </span>:
                      </span>
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Refund */}
            <div className="refund flex w-full items-center mt-10 justify-center">
              <span className="text-[2rem] text-bold font-codePro">
                Refundable fee:
              </span>
              <h4 className="text-[1.4rem] font-extrabold ml-4">
                $ {refundable[btnNum]}
              </h4>
            </div>

            <div className="btn flex w-full justify-center">
              <a
                href="#"
                className="capitalize text-base font-codePro py-2.5 px-8 bg-primary/[14%]  rounded-md"
              >
                get started now
              </a>
            </div>
          </div>
        </div>

        {/* triangle */}
        <img
          className="triangle absolute -bottom-[10%] -right-[60%]  w-[50rem] rotate-[40deg] opacity-[0.18]"
          src={tringle}
          alt="tringle"
        />
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -bottom-[25rem] -left-[30rem]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={tringle}
        alt="tringle"
      />
      <img
        className="triangle sm:hidden absolute -top-[30%] -left-[50%]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={tringle}
        alt="tringle"
      />
      <img
        className="triangle absolute -bottom-[25rem] -left-[30rem]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
