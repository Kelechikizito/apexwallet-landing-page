import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FeaturesCard = (props) => {
  return (
    <div>
        <div>
            {props.sex}
        </div>

        <div className='text-white'>
          <h1 className='text-xl font-bold'>{props.cardTitle}</h1>
          <p className='font-semibold'>{props.cardDetails}</p>
        </div>
    </div>
  )
}

FeaturesCard.propTypes = {
  sex: PropTypes.string.isRequired,
  cardDetails: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
};

export default FeaturesCard