import PropTypes from "prop-types"; // Import PropTypes

const Modal = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-white shadow-lg bg-opacity-50 py-10 font-Roboto z-20">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        {children}
      </div>
    </div>
  );
};

// Add PropTypes validation
Modal.propTypes = {
  children: PropTypes.node.isRequired // Expecting React nodes for children
};

export default Modal;
