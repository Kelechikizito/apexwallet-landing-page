import spanPill from "../assets/span-pill/Variant-1.png";
import squareBackground from "../assets/backgrounds/Squares-Background.png";
import FeaturesCard from "./FeaturesCard";

const FeaturesSection = () => {
  return (
    <div className="mt-24 mx-8 flex flex-col gap-8">
      <div
        className="flex flex-col items-center justify-center text-center gap-12 py-8"
        style={{
          backgroundImage: `url(${squareBackground})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <img src={spanPill} alt="" />
        </div>

        <div>
          <h1 className="text-7xl font-bold text-white">
            Key Features <br /> for Your Wallet
          </h1>
        </div>

        <div>
          <p className="text-white text-lg opacity-90">
            Unlocking the Power of Our Wallet: Key <br /> Features Designed to
            Enhance Your Crypto <br /> Experience
          </p>
        </div>
      </div>

      <div>
        <FeaturesCard 
        cardTitle="All Major Tokens +"
        cardDetails="Explore the Range of Supported Digital Currencies for Seamless Transactions"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
