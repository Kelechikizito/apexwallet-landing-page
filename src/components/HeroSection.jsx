import spanPill from "../assets/span-pill/Variant-1.png";
import walletScreen from "../assets/wallet-screen/Wallet_Screen.png";
import squareBackground from "../assets/backgrounds/Squares-Background.png";
import rightContentBackground from "../assets/backgrounds/RightContent-Screen.png";
import { Button } from "./ui/button.jsx";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 mt-28 bg-[#0A0D10]"
      style={{
        backgroundImage: `url(${rightContentBackground})`,
        overflow: "hidden",
        backgroundSize: "contain",
        backgroundBlendMode: "normal",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div
        className="p-10 flex flex-col justify-between mr-2"
        style={{
          backgroundImage: `url(${squareBackground}), url(${rightContentBackground})`,
          backgroundSize: "cover, contain",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "left, right",
        }}
      >
        <div>
          <img src={spanPill} alt="" />
        </div>

        <div>
          <h1 className="text-8xl font-bold text-white">
            Take Control of Your Crypto
          </h1>
        </div>

        <div>
          <p className="text-white text-lg opacity-90">
            Safeguard Your Digital Assets with Our Secure Crypto Wallet. Store,
            manage, and transact with confidence using our advanced features and
            intuitive interface.
          </p>
        </div>

        <div className="flex gap-4 text-white text-xl">
          <Button className="p-6 text-xl bg-[#0077E4] rounded">
            Get started <FaArrowRight className="text-white" />
          </Button>
          <Button variant="outline" className="p-6 text-xl rounded">
            View demo
          </Button>
        </div>
      </div>

      <div className="p-10 flex justify-center items-center">
        <img src={walletScreen} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
