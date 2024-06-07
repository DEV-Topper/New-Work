import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiArrowUpRightFill, PiArrowDownLeftFill } from "react-icons/pi";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import img from "../../../assets/profile.png";
import img2 from "../../assets/Dog.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Mobilehome from "./Mobilehome";
// import Card from "./Card";
// import Charts from "./Charts";
import { ScaleLoader } from "react-spinners";
// import { motion } from "framer-motion"
// import { useDispatch } from "react-redux";
// import { logOut } from "../../../Components/global/globalState";
import { Link } from "react-router-dom";


const WalletScreen = () => {
  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };

  const [drop, setDrop] = useState<boolean>(false)
  const onDrop = () => {
    setDrop(!drop);
  }

//   const dispatch = useDispatch()

  return (
    <>
      <div className="w-[82%] bg-black h-screen absolute right-0  rounded-tl-[30px] rounded-bl-[30px] pt-[20px] pb-[10px] pl-[27px] pr-[27px] flex-col md:w-[100%] md:hidden sm:hidden">
        <div className="flex w-[100%] items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:flex text-[22px] text-[#797D8C] cursor-pointer">
              <MdOutlineMenu />
            </div>
            <h3 className="text-[20px] font-[500] ml-[12px]">DashBoard Home</h3>
          </div>

          <div className="flex items-center">
            <div className="flex items-center w-[270px] h-[30px] bg-[#4f41bc1a] rounded-full overflow-hidden md:hidden">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-[100%] outline-none pl-[13px] pr-[10px] bg-transparent text-[13px] placeholder:text-primary"
              />
              <div className="w-[35px] h-[100%] flex justify-center items-center text-primary">
                <IoSearchSharp />
              </div>
            </div>

            <div className="text-primary ml-[40px] text-[22px] relative cursor-pointer md:hidden">
              <FaBell />
              <div className="w-[10px] h-[10px] rounded-full bg-[#EA8F95] absolute right-[0px] top-[3px]"></div>
            </div>

            {/* <div className="flex items-center ml-[40px] cursor-pointer relative" onMouseEnter={onDrop} onMouseLeave={onDrop}>
              {drop ? <motion.div initial={{ y: "80px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute w-full h-[150px] z-[300] flex flex-col items-center top-8 bg-white rounded-md shadow-md right-0">
                <Link to="/dashboard/my-account">

                  <div className="my-4 flex items-center">
                    <img src="" className="w-[35px] h-[35px] rounded-full border  mr-3" alt="" />
                    <div className="">Danielle</div>
                  </div>
                </Link>
                <div className="text-[red] " onClick={() => {
                  dispatch(logOut())
                }}>Logout</div>
              </motion.div> : null}
              <div className="w-[35px] h-[35px] rounded-full">
                <img
                  src={img}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <p className="ml-[7px] text-[14px] text-[#54657E]">
                Danielle Francis
              </p>
              <div className="text-[#54657E] ml-[15px]">
                <IoMdArrowDropdown />
              </div>
            </div> */}

          </div>
        </div>

        <div className="py-[10px] flex  justify-between">
          <div className="w-[55%] h-[250px] my-3 flex  justify-between ">
            <div className="w-[100%] h-full flex-col flex items-center max-md:w-full ">
              <div className="flex items-center justify-between w-[95%]">
                <div className="text-[#40196D] font-bold">
                  Welcome Back , <span className="text-[20px]">Francis</span>
                </div>
              </div>
              <div className="w-[95%] h-[150px]  flex justify-between items-center my-10 ">
                <div className="flex items-center  w-[90%]">
                  <div className=" w-[70%]">
                    <div className="text-[30px] font-black">
                      {eye ? "₦20,300.36" : "₦*****"}
                    </div>
                    <div className="text-[14px] font-semibold text-gray-700">
                      Your Money
                    </div>
                    <div className="text-[14px] font-semibold text-gray-700 my-1">
                      Credit Limit
                    </div>
                    <div className="flex my-5 justify-between">
                      <button className="bg-[#40196D] text-white px-8 py-2 text-[14px] rounded-md font-thin">
                        Make Payment
                      </button>
                      <button className="ml-4 border-[1px] border-[#40196D] text-[14px]  px-8 py-2 rounded-md hover:bg-gray-800 transition duration-300 hover:cursor-pointer hover:text-white text-[#40196D]">
                        Requisites{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="-ml-6"
                    onClick={() => {
                      onEye();
                    }}
                  >
                    {!eye ? (
                      <FaEyeSlash className="text-[20px] hover:cursor-pointer" />
                    ) : (
                      <FaEye className="text-[20px] hover:cursor-pointer" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[40%] flex justify-center items-center">
            {/* <Card /> */}
          </div>
        </div>

        <div className="flex items-center justify-between mt-[5px] md:flex-wrap">
          <div className="w-[247px] md:w-[49%] md:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[15px] text-[#797D8C]">Total Balance</p>
            <h3 className="font-[700] text-[19px]">
              {eye ? <div>₦ 21,200.00</div> : <div>₦ *******</div>}
            </h3>
            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                  <PiArrowUpRightFill />
                </div>
                <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">
                  +15%
                </p>
              </div>
            </div>
            <div className="absolute right-[17px] top-[20px]">
              <div
                className="-ml-6"
                onClick={() => {
                  onEye();
                }}
              >
                {!eye ? (
                  <FaEyeSlash className="text-[20px] hover:cursor-pointer" />
                ) : (
                  <FaEye className="text-[20px] hover:cursor-pointer" />
                )}
              </div>
            </div>
          </div>

          <div className="w-[247px] md:w-[49%] md:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[12px] text-[#797D8C]">Total Income</p>
            <h3 className="font-[700] text-[19px]">
              {eye ? <div>₦ 20,200.00</div> : <div>₦ *******</div>}
            </h3>

            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#FFD9D7] rounded-full flex justify-center items-center text-[13px] text-[#EA8F95]">
                  <PiArrowDownLeftFill />
                </div>
                <p className="text-[13px] text-[#EA8F95] font-[500] ml-[5px]">
                  +15%
                </p>
              </div>
              <ScaleLoader color="#40196D" height={25} />
            </div>

            <div className="absolute right-[17px] top-[22px]">
              {!eye ? (
                <FaEyeSlash className="text-[20px] hover:cursor-pointer" />
              ) : (
                <FaEye className="text-[20px] hover:cursor-pointer" />
              )}
            </div>
          </div>

          <div className="w-[247px] md:w-[49%] md:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[12px] text-[#797D8C]">Total Income</p>
            <h3 className="font-[700] text-[19px]">
              {eye ? <div>₦ 20,200.00</div> : <div>₦ *******</div>}
            </h3>
            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                  <PiArrowUpRightFill />
                </div>
                <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">
                  +15%
                </p>
              </div>
            </div>
            <div className="absolute right-[17px] top-[22px]">
              {!eye ? (
                <FaEyeSlash className="text-[20px] hover:cursor-pointer" />
              ) : (
                <FaEye className="text-[20px] hover:cursor-pointer" />
              )}
            </div>
          </div>

          <div className="w-[247px] md:w-[49%] md:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[12px] text-[#797D8C]">Total Expense</p>
            <h3 className="font-[700] text-[19px]">
              {" "}
              {eye ? <div>₦ 20,200.00</div> : <div>₦ *******</div>}
            </h3>
            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                  <PiArrowUpRightFill />
                </div>
                <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">
                  +10%
                </p>
              </div>
              <ScaleLoader color="#40196D" height={25} />
            </div>
            <div className="absolute right-[17px] top-[18px]">
              {!eye ? (
                <FaEyeSlash className="text-[20px] hover:cursor-pointer" />
              ) : (
                <FaEye className="text-[20px] hover:cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        <div className="w-[100%] flex justify-between mt-[20px]">
          {/* <Charts /> */}
        </div>

        <div className="w-[100%] flex flex-col mt-[30px]">
          <div className=" flex justify-between">
            <h4 className="text-[15px] font-[600] ml-[12px]">
              Top Transactions
            </h4>
            <h4 className="text-[15px] font-[600] ml-[12px] underline">
              View All
            </h4>
          </div>

          <div className="w-[100%] flex items-center h-[40px] mt-[10px] border border-[#EBE8FF] rounded-lg pl-[40px] pr-[40px] justify-between mb-[10px]">
            <div className="flex items-center w-[205px]">
              <img src={img2} alt="" className="h-[27px]" />
              <p className="text-[#797D8C] text-[14px] ml-[22px]">
                Nicholas Patrick
              </p>
            </div>

            <p className="text-[14px] font-[700] w-[85px]"># 2540.58</p>

            <p className="text-[14px] text-[#797D8C] w-[85px]">150 Products</p>

            <p className="text-[14px] text-[#F7941D] w-[85px]">Credit</p>

            <div className="text-primary cursor-pointer w-[85px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
          </div>
          <div className="w-[100%] flex items-center h-[40px] mt-[10px] border border-[#EBE8FF] rounded-lg pl-[40px] pr-[40px] justify-between mb-[10px]">
            <div className="flex items-center w-[205px]">
              <img src={img2} alt="" className="h-[27px]" />
              <p className="text-[#797D8C] text-[14px] ml-[22px]">
                Nicholas Patrick
              </p>
            </div>

            <p className="text-[14px] font-[700] w-[85px]"># 2540.58</p>

            <p className="text-[14px] text-[#797D8C] w-[85px]">150 Products</p>

            <p className="text-[14px] text-[#F7941D] w-[85px]">Credit</p>

            <div className="text-primary cursor-pointer w-[85px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
          </div>
          <div className="w-[100%] flex items-center h-[40px] mt-[10px] border border-[#EBE8FF] rounded-lg pl-[40px] pr-[40px] justify-between mb-[10px]">
            <div className="flex items-center w-[205px]">
              <img src={img2} alt="" className="h-[27px]" />
              <p className="text-[#797D8C] text-[14px] ml-[22px]">
                Nicholas Patrick
              </p>
            </div>

            <p className="text-[14px] font-[700] w-[85px]"># 2540.58</p>

            <p className="text-[14px] text-[#797D8C] w-[85px]">150 Products</p>

            <p className="text-[14px] text-[#F7941D] w-[85px]">Credit</p>

            <div className="text-primary cursor-pointer w-[85px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
          </div>
          <div className="w-[100%] flex items-center h-[40px] mt-[10px] border border-[#EBE8FF] rounded-lg pl-[40px] pr-[40px] justify-between mb-[10px]">
            <div className="flex items-center w-[205px]">
              <img src={img2} alt="" className="h-[27px]" />
              <p className="text-[#797D8C] text-[14px] ml-[22px]">
                Nicholas Patrick
              </p>
            </div>

            <p className="text-[14px] font-[700] w-[85px]"># 2540.58</p>

            <p className="text-[14px] text-[#797D8C] w-[85px]">150 Products</p>

            <p className="text-[14px] text-[#F7941D] w-[85px]">Credit</p>

            <div className="text-primary cursor-pointer w-[85px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex sm:flex w-[100%] flex-col">
        <Mobilehome />
      </div>
    </>
  );
};

export default WalletScreen;