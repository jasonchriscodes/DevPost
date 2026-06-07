import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <form
      className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 
      items-center gap-4 w-fit rounded-lg bg-[#FFFFFF] shadow-xl 
      dark:text-white dark:bg-[#141624]"
    >
      <div className="flex flex-col gap-2 justify-center items-center mb-2">
        <h3 className="font-semibold text-2xl">Signin Form</h3>
        <p>Welcome back! Log in to continue.</p>
      </div>

      <div>
        <Label htmlFor="username" className="dark:text-[#97989F]">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Enter username"
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
      </div>

      <div>
        <Label htmlFor="password" className="dark:text-[#97989F]">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
      </div>

      <div className="w-full flex items-center justify-center flex-col my-4">
        <button
          type="submit"
          className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2"
        >
          Signin
        </button>

        <p className="text-[14px] mt-2">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-[#4B6BFB] font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginPage;