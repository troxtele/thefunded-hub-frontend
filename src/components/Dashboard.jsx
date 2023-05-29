import { dashboard, tringle } from "../ui/images";

export default function Dashboard() {
  return (
    <section className="dashboard relative">
      <div className="container">
        <div className="wrapper relative z-10 grid gap-12 justify-center items-center">
          <div className="heading grid gap-4 justify-center items-center md:text-center">
            <h2 className="font-medium text-[2rem] tracking-tight">
              Dashboard and Tools
            </h2>
            <p className="max-w-[55rem]">
              To easily track your performance, you will have access to your own
              personal Dashboard to monitor your trading data in real-time.
              <br /> This helps you to avoid breaching any of the trading rules.
            </p>
          </div>

          <div className="dashboard-img z-10">
            <img
              className="md:max-w-[90%] m-auto"
              src={dashboard}
              alt="dashboard"
            />
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -top-[24rem] sm:-top-[20rem] -left-[20%] sm:-left-[20rem]  w-[70rem] rotate-[80deg] opacity-10 md:opacity-[0.1]"
        src={tringle}
        alt="tringle"
      />
      {/* Right */}
      <img
        className="triangle absolute top-[10rem] -right-[35rem]  w-[70rem] rotate-[180deg] opacity-[0.18]"
        src={tringle}
        alt="tringle"
      />
      <img
        className="triangle md:hidden absolute bottom-0 -right-[10%]  w-[70rem] rotate-[180deg] opacity-[0.1]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
