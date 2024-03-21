import {
  FaCoins,
  FaExchangeAlt,
  FaRegBell,
  FaSearch,
  FaWallet,
} from "react-icons/fa";
import Input from "../MainReUse/Input";
import {
  MdDashboard,
  MdForwardToInbox,
  MdReport,
  MdSettings,
  MdTransferWithinAStation,
  // MdOutlineNotifications,
} from "react-icons/md";
import pic from "../../assets/Dog.png";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MobileScreen from "./MobileScreen";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <div className="h-[50px] border-b w-full flex justify-center items-center z-10 fixed top-0 left-0 right-0 bg-white">
      <div className="w-full relative flex justify-between items-center">
        <div className="flex items-center h-full md:ml-[270px] ">
          <h1 className="hidden md:block font-bold ">Dashboard</h1>
          <div
            className="block md:hidden mt-1 ml-2 font-bold cursor-pointer transition-all duration-500"
            onClick={toggle}
          >
            <MdMenu size={35} />
          </div>
          <div className=" w-[70%] mt-5 flex ml-2">
            <Input
              className=" h-[35px] flex text-[13px] font-medium"
              type="search"
              placeholder="Type to search ..."
              required
              value={search}
              onChange={(e: any) => {
                setSearch(e.target.value);
              }}
              icon={
                <FaSearch className="bg-transparent text-gray-400" size={15} />
              }
            />
          </div>
        </div>
        <div className="flex  items-center mr-16 min-md:block">
          <div className=" hidden md:flex mr-5">
            <MdForwardToInbox className="mr-4" cursor="pointer" />
            <FaRegBell cursor="pointer" />
            {/* <MdOutlineNotifications /> */}
          </div>
          <div className="w-[1px] border h-6 mr-4"></div>
          <div className="flex ">
            <div className=" w-9 h-9 object-cover flex border rounded-full items-center justify-center cursor-pointer">
              <img
                className="w-full h-full object-cover rounded-full border"
                src={pic}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold text-[13px]">R.Ahmed</h1>
              <h3 className="text-[13px]">Admin</h3>
            </div>
          </div>
        </div>
        {menu ? (
          <div
            className=" w-full absolute bg-[rgba(0,0,0,0.2)] h-screen left-2 top-[70px] transition-all duration-500"
            onClick={toggle}
          >
            <MobileScreen />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
