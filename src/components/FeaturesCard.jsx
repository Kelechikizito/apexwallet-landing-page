import { motion } from "framer-motion";
import tokenOne from "../data/ticker-tokens-one";

const FeaturesCard = () => {
  return (
    <div>

      <div>

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
            {imagesArr.map((image, index) => (
              <div key={index} className="h-full flex-shrink-0">
                <div className="flex items-center justify-center h-[50px]">
                  <img
                    src={image.logo}
                    alt={image.name}
                    className="h-full max-w-full opacity-75 object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-white">
          <h1 className="text-xl font-bold">All Major Tokens +</h1>
          <p className="font-semibold">
            Explore the Range of Supported Digital Currencies for Seamless
            Transactions
          </p>
        </div>

      </div>

      <div>
        <div></div>

        <div className="text-white">
          <h1 className="text-xl font-bold">All Major Tokens +</h1>
          <p className="font-semibold">
            Explore the Range of Supported Digital Currencies for Seamless
            Transactions
          </p>
        </div>
      </div>

      <div>
        <div></div>

        <div className="text-white">
          <h1 className="text-xl font-bold">All Major Tokens +</h1>
          <p className="font-semibold">
            Explore the Range of Supported Digital Currencies for Seamless
            Transactions
          </p>
        </div>
      </div>

      <div>
        <div></div>

        <div className="text-white">
          <h1 className="text-xl font-bold">All Major Tokens +</h1>
          <p className="font-semibold">
            Explore the Range of Supported Digital Currencies for Seamless
            Transactions
          </p>
        </div>
      </div>

      <div>
        <div></div>

        <div className="text-white">
          <h1 className="text-xl font-bold">All Major Tokens +</h1>
          <p className="font-semibold">
            Explore the Range of Supported Digital Currencies for Seamless
            Transactions
          </p>
        </div>
      </div>

    </div>
  );
};

export default FeaturesCard;
