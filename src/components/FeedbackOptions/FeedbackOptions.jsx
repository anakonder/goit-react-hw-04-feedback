import PropTypes from "prop-types"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="btnList">
      {options.map((option) => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
