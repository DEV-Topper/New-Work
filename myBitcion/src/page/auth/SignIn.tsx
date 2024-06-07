import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/MainReUse/Input";
import Button from "../../components/MainReUse/Button";
import logo from "../../assets/CryptoKing.png";
import { useState } from "react";
import { loginUser } from "../api/userAPI";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);

    loginUser({ email, password }).then((res: any) => {
      if (res?.status === 201) {
        toast.success(res?.message);
        setLoading(false);

        const x = setTimeout(() => {
          window.location.reload();
          clearTimeout(x);
        }, 10);
        {
          !loading && navigate("/dashboard");
        }
      } else if (res?.status !== 201) {
        toast.error(res?.data?.message);
        setLoading(false);
      }

      console.log(res);
    });
  };

  return (
    <div className="w-full h-[91vh] flex flex-col justify-center items-center">
      <Toaster position="top-center" />
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <Link to="/">
          <a className="btn btn-ghost text-[25px]">CoinTradeX </a>
        </Link>
        <div className="text-[26px] font-bold mb-3">Welcome Back</div>
        <div className="text-[14px] -mt-4">
          Sign in now to continue your Experience.
        </div>
      </div>
      <div className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4">
        <Input
          placeholder="Email"
          className="w-full"
          type="email"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />

        <div >
          <Input
            placeholder="Password"
            className="w-full"
            type="password"
            value={password}
            show
            onChange={(e: any) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <Button
            name="Login"
            className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300 font-semibold"
            icon={loading && <ClipLoader color="white" size={18} />}
            onClick={handleSubmit}
          />
        </div>
      </div>
      <div className="mt-5 text-[13px]">
        Don’t have an account yet?{" "}
        <span className="font-bold text-blue-900">
          <Link to="/auth">Register here</Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
