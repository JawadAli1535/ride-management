import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/authContext";
import Input from "@/components/input";
import Button from "@/components/button";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("🚀 ~ handleSubmit ~ response::::::");

    try {
      const response = await axios.post("/api/login", { email, password });
      const { token, user } = response?.data;
      console.log("🚀 ~ handleSubmit ~ token:", response, token);

      if (token) {
        login(token, user);
        router.push("/dashboard");
      } else {
        alert("Invalid login credentials. Please try again.");
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[900px]   md:flex">
      <div className=" md:w-[50%] px-5 lg:px-0 py-[40px] flex  justify-center">
        <div className="w-[410px] flex flex-col justify-between">
          <div className="self-start">
            <p className="flex text-[#A3AED0] items-center gap-1">
              <span>
                <svg
                  width={14}
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </span>{" "}
              <span className="text-[14px]">Back</span>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <h2 className="text-[36px] text-[#E92928] font-bold ">Sign In</h2>
            <p className="mt-[8px] text-[#A3AED0]">
              Enter your email and password to sign in!
            </p>
            <div className="w-full h-[1px] bg-[#E0E5F2] my-[26px]"></div>
            <Input
              label="Email"
              type="email"
              value={email}
              placeholder="mail@simmmple.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              placeholder="Min. 8 characters"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="loggedin"
                  name="loggedin"
                  value="Bike"
                  className="peer hidden"
                />
                <label
                  htmlFor="loggedin"
                  className="w-[18px] h-[18px] bg-gray-200 rounded-[2px] border border-gray-300 cursor-pointer peer-checked:bg-[#E92928] peer-checked:border-[#E92928]"
                ></label>
                <label
                  htmlFor="loggedin"
                  className="text-[#2B3674] text-[14px]"
                >
                  Keep me logged in
                </label>
              </div>
              <p className="text-[14px] text-[#E92928] font-medium">
                Forget password?
              </p>
            </div>

            <Button
              className="w-full h-[53px] bg-[#E92928] hover:bg-[#a43737] rounded-lg mt-[33px]"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
            <p className="mt-[26px] text-[14px] text-[#707EAE]">
              Not registered yet?{" "}
              <span className="text-[#E92928]"> Create an Account</span>
            </p>
          </form>
          <div className="text-[#A3AED0] text-[14px] font-medium self-start mt-4 md:mt-0 md:self-center">
            © 2023 Spark Drive. All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="md:w-[50%] h-full flex flex-col items-center justify-between md:rounded-bl-[10%] lg:rounded-bl-[20%] bg-[#E92928] py-[40px]">
        <div></div>
        <div>
          <div className=" flex flex-col lg:flex items-center justify-center gap-[30px]">
            <Image src="/assets/images/login.svg" width={81} height={83} />
            <Button className="w-[220px] lg:w-[320px] h-[75px] text-[40px] font-[400] rounded-[18px] border-white border-[4px]">
              Spark
            </Button>
          </div>
          <div className="mt-[101px] flex flex-col justify-center items-center gap-[10px] border-[2px] border-white rounded-[26px] w-[280px]  lg:w-[471px] h-[134px] text-white">
            <p className="text-[17px]">Learn more about Air Drive on</p>
            <h5 className="text-[25px] font-[600] ">Spark.pl</h5>
          </div>
        </div>
        <div className="flex gap-[42px] text-[14px] items-center font-[500] text-white">
          <p>Liscense</p>
          <p>Terms of Use</p>
          <p> Blog</p>
        </div>
      </div>
    </div>
  );
}
