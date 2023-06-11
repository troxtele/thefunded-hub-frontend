import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { google, facebook, apple, tringle } from "../ui/images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const { pathname } = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, googleSignIn, facebookSignIn } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider();
  // const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";

  const handleLogin = (data, event) => {
    login(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully logged in");
        event.target.reset();
        navigate('/')

        // fetch(`https://nerd-academy-server.vercel.app/jwt?email=${data.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.accessToken) {
        //             localStorage.setItem('accessToken', data.accessToken);
        //         }
        //     })
        // navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      })
  }

 // Google Sign In
 const handleSignInGoogle = () => {
  googleSignIn(googleProvider)
    .then(result => {
      const user = result.user;
      
      toast.success("successfully logged in");
      navigate('/');
    })
    .catch(error => {
      toast.error(error.message);
    })
}
// Facebook Sign In
const handelFacebookSignIn = () => {
  facebookSignIn(facebookProvider)
      .then(result => {
          const user = result.user
          console.log(user);

      })
      .catch(error => {
          console.log('Error', error);
      })

}

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="login relative">
        <div className="container">
          <div className="wrapper flex justify-center items-center min-h-[40vh] py-20">
            <form onSubmit={handleSubmit(handleLogin)}
              className="grid gap-6 sm:gap-8 md:gap-10 p-7 sm:p-9 md:p-12 relative z-10 rounded-xl  bg-primary/[5%] border-primary"
              action=""
            >
              <div className="heading flex justify-center items-center">
                <h1 className="text-center text-xl xs:text-2xl sm:text-3xl px-4 sm:px-8">
                  Sign in to your account
                </h1>
              </div>
              {/* Email */}
              <div className="email">
                <input
                  {...register("email", {
                    required: "email address is required",
                  })}
                  name="email"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && <p className="text-error">{errors.email?.message}</p>}
              </div>
              {/* Password */}
              <div className="password">
                <input
                  {...register("password", {
                    required: "password is required"
                  })}
                  name="password"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && <p className="text-error">{errors.password?.message}</p>}
              </div>

              <div className="wrapper flex gap-3 flex-col sm:flex-row justify-between items-center">
                <div className="remember flex gap-3 justify-center items-center">
                  <input
                    type="checkbox"
                    id="remeber"
                    className="relative h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label htmlFor="remeber" className="sm:cursor-pointer">Remember me</label>
                </div>
                {/* Forget password */}
                {/* <div className="forgetpass">
                  <a href="#" className="underline font-thin ">
                    Forget Password
                  </a>
                </div> */}
              </div>

              {/* Login button */}
              <div className="login-btn mt-6 flex justify-center items-center">
                <button className="py-2 px-16 border-[4px] border-all hover:border-all/50 transition-all duration-300 rounded-lg"
                  value="login" type="submit"
                >
                  Login
                </button>
              </div>

              {/* signin */}
              <div className="signup grid gap-4">
                <div className="heading flex justify-center items-center">
                  <h5>Or sign in with:</h5>
                </div>
                <div className="logos flex justify-center items-center gap-3">
                  <a onClick={handleSignInGoogle} href="#" className="logo">
                    <img
                      className="w-10 sm:w-[2.8rem] md:w-[3.2rem]"
                      src={google}
                      alt="google"
                    />
                  </a>
                  <a onClick={handelFacebookSignIn}
                  href="#" className="logo">
                    <img
                      className="w-10 sm:w-[2.8rem] md:w-[3.2rem]"
                      src={facebook}
                      alt="facebook"
                    />
                  </a>
                  <a href="#" className="logo">
                    <img
                      className="w-10 sm:w-[2.8rem] md:w-[3.2rem]"
                      src={apple}
                      alt="apple"
                    />
                  </a>
                </div>
              </div>

              {/* new */}
              <div className="registration flex flex-col justify-center items-center gap-1">
                <Link to="/registration">Are you New user?</Link>
                <Link to="/registration" className="underline">
                  Register now
                </Link>
              </div>
            </form>
          </div>
        </div>
        {/* triangle */}
        <img
          className="triangle absolute -left-[25%] bottom-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1] md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -bottom-[5%] -right-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
       
      </section>
      
      <Footer />
      <Toaster />
    </>
  );
}
