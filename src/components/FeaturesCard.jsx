import { motion } from "framer-motion";
import squareBackground from "../assets/backgrounds/Squares-Background.png";
import braveBrowser from '../assets/browsers/Brave.png';
import metaMask from '../assets/browsers/metamask.png';
import opera from '../assets/browsers/Opera.png';
// import tokenOne from "../data/ticker-tokens-one";

const FeaturesCard = () => {
  return (
    <div className="flex flex-col gap-6 mx-8">
      <div className="bg-[#0A0D10] flex flex-col gap-6 p-6 rounded-2xl"
      style={{backgroundImage: `url(${squareBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '30%'}}>
        <div>
          <motion.div
            className="flex gap-14"
            animate={{
              x: ["0%", "-100%"],
              transition: {
                ease: "linear",
                duration: 15,
                repeat: Infinity,
              },
            }}
          >
            {/* {imagesArr.map((image, index) => (
              <div key={index} className="h-full flex-shrink-0">
                <div className="flex items-center justify-center h-[50px]">
                  <img
                    src={image.logo}
                    alt={image.name}
                    className="h-full max-w-full opacity-75 object-contain"
                  />
                </div>
              </div>
            ))} */}
          </motion.div>
        </div>

        <div className="text-white">
          <h1 className="text-xl font-bold">All Major Tokens +</h1>
          <p className="font-semibold opacity-75">
            Explore the Range of Supported Digital Currencies for Seamless
            Transactions
          </p>
        </div>
      </div>

      <div className="bg-[#0A0D10] flex flex-col gap-6 p-6 rounded-2xl"
      style={{backgroundImage: `url(${squareBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '30%'}}
      >
        <div 
        className="flex flex-col"
        >
          <img src={metaMask} alt="" className="w-[50%]"/>
          <img src={braveBrowser} alt="" className="w-[50%] self-end"/>
          <img src={opera} alt="" className="w-[50%]"/>
        </div>

        <div className="text-white">
          <h1 className="text-xl font-bold">Seamless Integration with dApps</h1>
          <p className="font-semibold opacity-75">
            EEasily interact with decentralized applications (dApps)
          </p>
        </div>
      </div>

      <div className="bg-[#0A0D10] flex flex-col gap-6 p-6 rounded-2xl"
      style={{backgroundImage: `url(${squareBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '30%'}}>
        <div></div>

        <div className="text-white">
          <h1 className="text-xl font-bold">Enhanced Security Measures</h1>
          <p className="font-semibold opacity-75">
            Embrace peace of mind with advanced security features
          </p>
        </div>
      </div>

      <div className="bg-[#0A0D10] flex flex-col gap-6 p-6 rounded-2xl"
      style={{backgroundImage: `url(${squareBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '30%'}}>
        <div></div>

        <div className="text-white">
          <h1 className="text-xl font-bold">Secure Storage of Assets</h1>
          <p className="font-semibold opacity-75">
            Safeguard your digital assets with robust encryption and
            cutting-edge security measures.
          </p>
        </div>
      </div>

      <div className="bg-[#0A0D10] flex flex-col gap-6 p-6 rounded-2xl"
      style={{backgroundImage: `url(${squareBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '30%'}}>
        <div></div>

        <div className="text-white">
          <h1 className="text-xl font-bold">Decentralized Transactions</h1>
          <p className="font-semibold opacity-75">
            Seamlessly send and receive cryptocurrencies directly from your
            wallet, leveraging the power of decentralized networks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
