import { tringle } from "../ui/images";

export default function Benefits() {
  return (
    <section className="benefits relative md:max-w-[py-[2.5rem] md:py-[3.5rem] md:m-auto">
      <div className="container">
        <div className="wrapper grid gap-12">
          <div className="heading grid gap-4">
            <h2 className="capitalize font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
              The Funded Hub{" "}
              <span className="text-primary font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                Benefits
              </span>
            </h2>

            <div className="paras max-w-[55rem]">
              <p>
                At TheFundedHub we care about your success and provide you with
                the latest techonologies, a great trading environment and
                generous funding.
              </p>
            </div>
          </div>

          <div className="Contents w-full grid gap-10 relative z-10">
            {/* Content Top
             */}
            <div className="content-top relative z-10 grid md:grid-cols-2  gap-8">
              {/* Left */}
              <div className="left relative z-10 text-lg font-black grid gap-5">
                <div className="heading flex justify-center items-center text-center w-full bg-primary/[14%] rounded-xl">
                  <h4 className="text-[0.9rem] xs:text-base">Allowed</h4>
                </div>
                <div className="items grid grid-cols-2 justify-center items-center gap-3 xs:gap-5 font-codeProLight">
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-3 exs:px-4 xs:px-5 sm:px-12 py-2 exs:py-2.5 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[0.8rem] exs:text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codePro">
                      Overnight
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-3 exs:px-4 xs:px-5 sm:px-12 py-2 exs:py-2.5 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[0.8rem] exs:text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codePro">
                      Overweek
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-3 exs:px-4 xs:px-5 sm:px-12 py-2 exs:py-2.5 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[0.8rem] exs:text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codePro">
                      Expert Advisor
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-3 exs:px-4 xs:px-5 sm:px-12 py-2 exs:py-2.5 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[0.8rem] exs:text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codePro">
                      News Trading
                    </span>
                  </div>
                </div>
              </div>

              <div className="right mt-6 grid gap-4">
                <div className="top flex items-center gap-4">
                  <div className="text grid">
                    <h2 className="capitalize font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                      <span className="text-primary font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                        Scale
                      </span>{" "}
                      your Account
                    </h2>
                    <div className="price text-xl">Up to 600,000$</div>
                  </div>
                </div>

                <div className="bottom">
                  <p className="font-normal text-[1.1rem] max-w-[50rem]">
                    Achieve a profit of 10% or more within a 4 month period and
                    if at least 2 of those 4 months were profitable, we will
                    increase your account size by 25% of the original account
                    size.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="content-bottom relative z-10 grid md:grid-cols-2 justify-center items-center gap-8 mt-6 md:mt-[6rem]">
              {/* left */}
              <div className="left">
                <h2 className="capitalize font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                  <span className="text-primary font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                    Why
                  </span>{" "}
                  trade with The Funded Hub?
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-5">
                  <p>
                    We are partnering up directly with
                    <span className="font-bold text-inherit text-[1rem]">
                      {" "}
                      liquidity providers{" "}
                    </span>
                    to offer you the best trading conditions.
                  </p>

                  <p>
                    Our accounts will provide you with an
                    <span className="font-bold text-inherit text-[1rem]">
                      {" "}
                      excellent
                    </span>{" "}
                    environment where you can start to trade from 0.0 pips!
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="right relative z-10 text-lg font-black md:flex justify-start items-center gap-5">
                <div className="items grid grid-cols-2 justify-center items-center gap-3 xs:gap-5 font-codeProLight">
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-3 exs:px-4 xs:px-5 sm:px-12 py-2 exs:py-2.5 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[0.8rem] exs:text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codePro">
                      Metatrader 5
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-3 exs:px-4 xs:px-5 sm:px-12 py-2 exs:py-2.5 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[0.8rem] exs:text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codePro">
                      <span className="text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codeProBold">
                        Low
                      </span>{" "}
                      Slippage
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-3 exs:px-4 xs:px-5 sm:px-12 py-2 exs:py-2.5 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[0.8rem] exs:text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codePro">
                      <span className="text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codeProBold">
                        Fast
                      </span>{" "}
                      Payout
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-3 exs:px-4 xs:px-5 sm:px-12 py-2 exs:py-2.5 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[0.8rem] exs:text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codePro">
                      <span className="text-[0.9rem] xs:text-[1rem] sm:text-[1.2rem] font-codeProBold">
                        Low
                      </span>{" "}
                      Spread
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -top-[10rem] -left-[18%]  w-[40rem] rotate-[80deg] opacity-[0.1]"
        src={tringle}
        alt="tringle"
      />
      <img
        className="triangle absolute -bottom-[25rem] -right-[20rem]  w-[65rem] rotate-[80deg] opacity-[0.09]"
        src={tringle}
        alt="tringle"
      />

      {/* mobile */}
      <img
        className="triangle md:hidden absolute top-0 -right-[50%]  w-[35rem] rotate-[45deg] opacity-[0.25]"
        src={tringle}
        alt="tringle"
      />
      {/* mobile */}
      <img
        className="triangle md:hidden absolute bottom-[30%] -left-[40%]  w-[35rem] rotate-[45deg] opacity-[0.15]"
        src={tringle}
        alt="tringle"
      />
      {/* mobile */}
      <img
        className="triangle md:hidden absolute bottom-[15%] -right-[55%] w-[35rem] rotate-[50deg] opacity-[0.15]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
