// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import { tringle } from "../ui/images";

export default function Evaluation() {
  return (
    <section className="evaluation relative  py-[2.5rem] md:py-[3.5rem]elative md:max-w-[90%] md:m-auto">
      <div className="container z-10 relative">
        <div className="wrapper">
          {/* capitalize font-medium text-[2rem] tracking-tighter */}
          <div className="heading grid gap-4 md:justify-center items-center md:text-center">
            <h2 className="capitalize font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tighter">
              <span className="text-primary font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tighter ">
                Evaluation
              </span>{" "}
              Program
            </h2>

            <div className="paras mt-2 md:mt-0">
              <p>
                Prove your trading skills by passing our 2-Phase Challenge
                Program.
              </p>
              <p>
                Achieve the Profit Targets following simple Trading Objectives
                and start trading with our capital.
              </p>
              <p>You earn up to 80% of the profits.</p>
            </div>
          </div>
          {/* Desktop version */}
          <div className="cards hidden lg:flex gap-8 md:gap-12 justify-center items-center mt-10">
            {/* card */}
            <div className="card flex flex-col gap-4 py-6 px-2 rounded-2xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
              <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                <div className="left max-w-[10rem]">
                  <h4 className="font-codeProBold">Phase 1</h4>
                  <span className="text-sm flex font-codePro font-thin">
                    Starting your Evaluation process
                  </span>
                </div>
                <div className="right grid">
                  <div className="percent">
                    <h3 className="font-codeProBold text-3xl text-end">10%</h3>
                    <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                      Target Profit
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-middle grid gap-5 px-4 font-thin">
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">10</span> minimum
                  Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">5%</span> minimum
                  Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">10%</span>{" "}
                  minimum Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  Trading Period up to
                  <span className="font-codeProBold text-base"> 45 days</span>
                </p>
                <p className="text-base font-normal font-codePro">
                  Registration fee
                </p>
              </div>

              <div className="card-bottom mt-4 flex justify-center items-center text-center">
                <a
                  href="#"
                  className="uppercase font-Montserrat text-xs font-bold py-2 px-4 border-primary border-4 rounded-md"
                >
                  get started now
                </a>
              </div>
            </div>

            {/* card */}
            <div className="card flex flex-col gap-4 py-6 px-2 rounded-2xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
              <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                <div className="left max-w-[10rem]">
                  <h4 className="font-codeProBold">Phase 2</h4>
                  <span className="text-sm flex font-codePro font-thin">
                    One step away to be our Funded Trader
                  </span>
                </div>
                <div className="right grid">
                  <div className="percent">
                    <h3 className="font-codeProBold text-3xl text-end">5%</h3>
                    <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                      Target Profit
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-middle grid gap-5 px-4 font-thin">
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">10</span> minimum
                  Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">5%</span> minimum
                  Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">10%</span>{" "}
                  minimum Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  Trading Period up to
                  <span className="font-codeProBold text-base"> 45 days</span>
                </p>
                <p className="text-base font-normal font-codePro">-</p>
              </div>

              <div className="card-bottom mt-4 flex justify-center items-center text-center">
                <a
                  href="#"
                  className="uppercase font-Montserrat text-xs font-bold py-2 px-4 border-primary border-4 rounded-md"
                >
                  get started now
                </a>
              </div>
            </div>
            {/* card */}

            <div className="card flex flex-col gap-4 py-6 px-2 rounded-2xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
              <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                <div className="left max-w-[10rem]">
                  <h4 className="font-codeProBold">Funded</h4>
                  <span className="text-sm flex font-codePro font-thin">
                    Trade with our <br /> funds in the Hub
                  </span>
                </div>
                <div className="right grid">
                  <div className="percent">
                    <h3 className="font-codeProBold text-3xl text-end">
                      70/30
                    </h3>
                    <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                      Profit Share
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-middle grid gap-5 px-4 font-thin">
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">NO</span> minimum
                  Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">5%</span> minimum
                  Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  <span className="font-codeProBold text-base">10%</span>{" "}
                  minimum Trading Days
                </p>
                <p className="text-base font-normal font-codePro">
                  Trading Period -
                  <span className="font-extrabold capitalize text-base">
                    Indefinite
                  </span>
                </p>
                <p className="text-base font-normal font-codePro">
                  Refundable registration fee
                </p>
              </div>

              <div className="card-bottom mt-4 flex justify-center items-center text-center">
                <a
                  href="#"
                  className="uppercase font-Montserrat text-xs font-bold py-2 px-4 border-primary border-4 rounded-md"
                >
                  get started now
                </a>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="cards lg:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center mt-10">
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
              className="evaluation-slider flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
            >
              {/* card */}

              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-6 px-2 rounded-2xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Phase 1</h4>
                      <span className="text-sm flex font-codePro font-thin">
                        Starting your Evaluation process
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          10%
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Target Profit
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-thin">
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">10</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">5%</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">10%</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      Trading Period up to
                      <span className="font-codeProBold text-base">
                        {" "}
                        45 days
                      </span>
                    </p>
                    <p className="text-base font-normal font-codePro">
                      Registration fee
                    </p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <a
                      href="#"
                      className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-thin text-base"
                    >
                      get started now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* card */}
              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-6 px-2 rounded-2xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Phase 2</h4>
                      <span className="text-sm flex font-codePro font-thin">
                        One step away to be our Funded Trader
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          5%
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Target Profit
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-thin">
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">10</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">5%</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">10%</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      Trading Period up to
                      <span className="font-codeProBold text-base">
                        {" "}
                        45 days
                      </span>
                    </p>
                    <p className="text-base font-normal font-codePro">-</p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <a
                      href="#"
                      className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-thin text-base"
                    >
                      get started now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* card */}
              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-6 px-2 rounded-2xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Funded</h4>
                      <span className="text-sm flex font-codePro font-thin">
                        Trade with our <br /> funds in the Hub
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          70/30
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Profit Share
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-thin">
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">NO</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">5%</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      <span className="font-codeProBold text-base">10%</span>{" "}
                      minimum Trading Days
                    </p>
                    <p className="text-base font-normal font-codePro">
                      Trading Period -
                      <span className="font-extrabold capitalize text-base">
                        Indefinite
                      </span>
                    </p>
                    <p className="text-base font-normal font-codePro">
                      Refundable registration fee
                    </p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <a
                      href="#"
                      className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-thin text-base"
                    >
                      get started now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* triangle */}
      <img
        className="triangle absolute -top-20 sm:-top-[2rem] -right-[70%] sm:-right-[40rem]  w-[65rem] rotate-[90deg] opacity-[0.32]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
