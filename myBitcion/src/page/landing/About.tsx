import about from "../../assets/about_img.png";
import Button from "../../components/reUse/Button";

const About = () => {
  return (
    <div className="min-h-[80vh] bg-blue-600 w-full flex justify-center items-center">
      <div className="w-[80%] text-white flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <img src={about} alt="" />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-blue-300 font-semibold text-[23px]">
            WHAT IS CRYPTOKING
          </h2>
          <h1 className="text-[35px] mb-5">About The CryptoKing</h1>
          <p className="mt-5 text-[18px]">
            A cryptocurrency is a digital or virtual currency designed to work
            as a medium of exchange. It uses cryptography to secure and verify
            transactions as well as to control the creation of new units of a
            particular cryptocurrency.
          </p>
          <p className="my-5 text-[18px]">
            Essentially, cryptocurrencies are limited entries in a database that
            no one can change unless specific conditions are fulfilled.
          </p>
          <Button text={"Let's Start"} />
        </div>
      </div>
    </div>
  );
};

export default About;
