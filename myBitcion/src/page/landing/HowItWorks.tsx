import { FaLock } from "react-icons/fa";
import Card from "../../components/reUse/Card";
import { FaPerson } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";

const HowItWorks = () => {
  const data = [
    {
      icon: <FaPerson size={40} />,
      lgTxt: "Create Account",
      smTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa fugiat illum explicabo aperiam magni ipsam, nihil sequi eligendi",
    },
    {
      icon: <BiCart size={40} />,
      lgTxt: "Buy & Sell",
      smTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa fugiat illum explicabo aperiam magni ipsam, nihil sequi eligendi",
    },
    {
      icon: <FaLock size={40} />,
      lgTxt: "Safe & Secure",
      smTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa fugiat illum explicabo aperiam magni ipsam, nihil sequi eligendi",
    },
    {
      icon: <FaLock size={40} />,
      lgTxt: "Safe & Secure",
      smTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa fugiat illum explicabo aperiam magni ipsam, nihil sequi eligendi",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-600 flex justify-center items-center">
      <div className="w-[80%] text-white flex gap-4 items-center justify-center flex-wrap lg:flex-nowrap">
        <div className="w-[100%] lg:w-[50%] space-y-8">
          <h1 className="text-[40px] font-bold">How It Works</h1>
          <p>
            Bitcoin Mining is a peer-to-peer computer process used to secure and
            verify bitcoin transactions—ayments from one user to another on a
            decentralized network.Mining involves adding bitcoin transaction
            data to Bitcoin’s global public ledger of past transactions.
          </p>
          <button className="btn rounded-[40px] bg-gradient-to-r from-[#6d62aa] hover:to-[#6d62aa] hover:from-[#2ab2d2] transition-all duration-300 to-[#2ab2d2] text-white border-none shadow-lg text-[18px] px-5 ">
            DOWNLOAD APP
          </button>
        </div>
        <div className="w-[100%] lg:w-[50%] text-white flex items-center justify-end">
          <div className="grid lg:grid-cols-2 gap-3 items-center justify-center">
            {data.map((el, i) => (
              <Card
                className={i === 1 ? "" : ""}
                icon={el.icon}
                lgTxt={el.lgTxt}
                smTxt={el.smTxt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
