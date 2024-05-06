import { useEffect, useState } from "react";
import { FaBitcoin, FaDashcube, FaEthereum } from "react-icons/fa";
import { FaLitecoinSign } from "react-icons/fa6";
import Bitcoin from "./Bitcoin";
import Ethereum from "./Ethereum";
import Dash from "./Dash";
import Litecoin from "./Litecoin";
// import { fetchEthereumData } from "../api/EthereumApi";

interface CryptoData {
  prices: [number, number][];
}

const ExchangeScreen = () => {
  document.title = "Exchange Screen";
//   const data = fetchEthereumData();
//   console.log("this is it:", data);
  const [state, setState] = useState("");

  useEffect(() => {
    setState("Bitcoin");
  }, []);

  const handleState = (coin: any) => {
    setState(coin);
  };
  const [ethereumData, setEthereumData] = useState<CryptoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
    //   const data = await fetchEthereumData();
    //   setEthereumData(data);
    };

    fetchData();
  }, []);
  // console.log(ethereumData);

  return (
    <>
      <div className="w-full min-h-[50px] border mb-5 flex flex-col md:flex-row justify-between items-center">
        <div className="font-bold text-lg mb-2 md:mb-0">Coin Details</div>
        <div className="grid grid-cols-4 gap-2 overflow-x-scroll md:overflow-x-hidden">
          <div
            className={`font-bold grid item-center justify-center py-2 px-3 gap-2 rounded-lg cursor-pointer ${
              state === "Bitcoin" ? "bg-[#bfdbfe]" : ""
            }`}
            onClick={() => handleState("Bitcoin")}
          >
            <FaBitcoin size={20} />
            <button className="hidden md:block">Bitcoin</button>
          </div>
          <div
            className={`font-bold grid item-center justify-center py-2 px-3 rounded-lg gap-2 cursor-pointer ${
              state === "Ethereum" ? "bg-[#bfdbfe]" : ""
            }`}
            onClick={() => handleState("Ethereum")}
          >
            <FaEthereum size={20} />
            <button className="hidden md:block">Ethereum</button>
          </div>
          <div
            className={`font-bold grid item-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer ${
              state === "Dash" ? "bg-[#bfdbfe]" : ""
            }`}
            onClick={() => handleState("Dash")}
          >
            <FaDashcube size={20} />
            <button className="hidden md:block">Dash</button>
          </div>
          <div
            className={`font-bold grid item-center justify-center py-2 px-3 rounded-lg gap-2 cursor-pointer ${
              state === "Litecoin" ? "bg-[#bfdbfe]" : ""
            }`}
            onClick={() => handleState("Litecoin")}
          >
            <FaLitecoinSign size={20} />
            <button className="hidden md:block">Lite coin</button>
          </div>
        </div>
      </div>

      {state === "Bitcoin" && <Bitcoin />}
      {state === "Ethereum" && <Ethereum />}
      {state === "Dash" && <Dash />}
      {state === "Litecoin" && <Litecoin />}
    </>
  );
};

export default ExchangeScreen;