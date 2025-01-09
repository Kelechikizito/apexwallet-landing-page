import PropTypes from 'prop-types';

const FeaturesCard = (props) => {
  return (
    <div>
        <div>
            {props.sex}
        </div>

        <div>
        
        </div>
    </div>
  )
}

FeaturesCard.propTypes = {
  sex: PropTypes.string.isRequired,
};

export default FeaturesCard