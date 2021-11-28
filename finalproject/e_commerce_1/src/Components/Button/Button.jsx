import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Btn = ({ variant, onClick, text }) => {
  return (
    <>
      <Button variant={variant} onClick={onClick}>
        {text}
      </Button>
    </>
  );
};

// Btn.defaultProps = {
//   variant: "primary",
//   onClick: () => {
//     console.log("Button Clicked!");
//   },
//   text: "Button",
// };

// Btn.propTypes = {
//   variant: PropTypes.string,
//   onClick: PropTypes.func,
//   text: PropTypes.string,
// };

export default Btn;
