import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PartnersSection = ({ images }) => {
  const imagesArr = [...images, ...images];

  return (
    <div className="h-[200px] relative overflow-hidden mx-auto max-w-screen-lg mt-32">
      <motion.div 
        className="flex gap-14" 
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }
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
  );
};

PartnersSection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PartnersSection;