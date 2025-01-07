import spanPill from "../assets/span-pill/Variant-1.png";
import walletScreen from "../assets/wallet-screen/Wallet_Screen.png";
import squareBackground from "../assets/backgrounds/Squares-Background.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 mt-28">
      <div className="p-10" style={{ backgroundImage: `url(${squareBackground})`}}>
        <div>
            <img src={spanPill} alt="" />   
        </div>

        <div>
            <h1 className="text-8xl font-bold text-white">Take Control of Your Crypto</h1>
        </div>

        <div>
            <p className="text-white text-lg">
                Safeguard Your Digital Assets with Our Secure Crypto Wallet. Store, manage, and transact with confidence using our advanced features and intuitive interface.
            </p>
        </div>
      </div>

      <div className="p-10">
        <img src={walletScreen} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
