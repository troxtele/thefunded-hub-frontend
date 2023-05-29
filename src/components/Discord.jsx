import { discord } from "../ui/images";

export default function Discord() {
  return (
    <section className="discord">
      <div className="container">
        <div className="wrapper relative grid sm:grid-cols-2 sm:justify-center items-center gap-6">
          <div className="left">
            <div className="img flex justify-center items-center">
              <img
                className="max-w-[15rem] w-full sm:w-[20rem]"
                src={discord}
                alt="discord"
              />
            </div>
          </div>

          <div className="right w-full grid justify-center sm:justify-start gap-3">
            <div className="heading hidden sm:block">
              <h2 className=" font-medium text-[2rem] tracking-tight">
                Join our Discord
              </h2>
            </div>
            <p className="max-w-[30rem] text-center sm:text-start">
              Where veteran and rookie traders all come together to talk about
              the markets and keep up to date with all annoucements.
            </p>
            <div className="mt-2 btn uppercase flex justify-center sm:justify-start">
              <a
                href="#"
                className=" bg-primary/20 md:bg-transparent  font-Montserrat text-xs font-bold  py-4 md:py-2 px-9 md:px-6 border-primary md:border-2 rounded-xl"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
