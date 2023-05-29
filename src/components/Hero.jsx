import { globe, tringle } from "../ui/images";

export default function Hero() {
  return (
    <main className="main relative pt-24 md:pt-32  py-[2.5rem] md:py-[3.5rem]">
      <div className="container">
        <div className="wrapper flex justify-center items-center gap-0 pt-10">
          {/* Left content */}
          <div className="left-content z-[10] relative grid gap-6 md:gap-8">
            <div className="heading grid gap-2 justify-end items-center md:text-center font-medium text-end">
              <h1 className="text-3xl exs:text-4xl xs:text-[3.5rem] xs:leading-[0.95] md:text-[4rem] font-codePro tracking-tighter text-start md:text-end">
                Get{" "}
                <span className="text-primary md:text-inherit text-3xl exs:text-4xl xs:text-[3.5rem] xs:leading-[0.95] md:text-[4rem] font-codePro tracking-tighter text-start md:text-end">
                  Funded
                </span>{" "}
                and trade our capital.
              </h1>
              <h2 className="text-3xl exs:text-4xl xs:text-[3.5rem] xs:leading-[0.95] md:text-[4rem] font-codePro tracking-tighter text-start md:text-end">
                We take the risk.
              </h2>
            </div>

            <div className="botton-content font-Montserrat grid md:justify-end w-full gap-10 max-w-4xl md:text-right">
              <p className="font-normal font-Montserrat  text-[1.05rem] max-w-[30rem]">
                Where veteran and rookie traders all come together to compete in
                the Hub. Trade how you like, pass the challenge & get funded
                with our capital..
              </p>

              <div className="btn flex md:justify-end font-extrabold flex-shrink-0">
                <a
                  href="#"
                  className="capitalize bg-primary/20 md:bg-transparent font-base flex justify-center items-center  py-3 md:py-1 px-9 md:border-2 border-white rounded-xl whitespace-nowrap font-codePro font-thin text-base md:text-[0.8rem]"
                >
                  get started now
                </a>
              </div>
            </div>
          </div>
          {/* Right content */}
          <div className="right-content absolute  md:static -right-[70%] sm:-right-[15rem] md:flex justify-start ml-4">
            <div className="globe-img">
              <img
                className="max-w-[37rem] w-full globe-rotate"
                src={globe}
                alt="globe"
              />
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute top-[2%] sm:-bottom-[40%] -left-[50%] sm:-left-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.25]"
        src={tringle}
        alt="tringle"
      />
    </main>
  );
}
