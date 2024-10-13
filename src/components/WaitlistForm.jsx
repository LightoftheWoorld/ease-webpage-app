import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

const WaitlistForm = ({ isOpen, toggleModal }) => {
  const [email, setEmail] = useState(""); // State to hold email input value
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isSuccess, setIsSuccess] = useState(false); // State to manage success message

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email (simple regex for email validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true); // Disable the form buttons while submitting
    setErrorMessage(""); // Clear any previous errors

    try {
      // Simulate API request (replace with actual API call)
      const response = await fetch("https://ease-server.onrender.com/api/waitlist/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true); // Show success message
      } else {
        setErrorMessage("Failed to submit. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.", error);
    } finally {
      setIsSubmitting(false); // Enable the form buttons again
    }
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsSuccess(false); // Reset success state
    setEmail(""); // Clear email input
    setErrorMessage(""); // Clear error messages
    toggleModal(); // Close the modal
  };

  return (
    <>
      {isOpen && (
        <Modal>
          <div className="p-4 text-center bg-gray-100">
            <h2 className="text-xl font-semibold">
              {isSuccess ? "Joined Successfully!" : "Join the Waitlist"}
            </h2>
            {!isSuccess && <p className="my-4">Enter your email to join the waitlist.</p>}

            {!isSuccess ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 w-full mb-4 border rounded"
                  placeholder="Enter your email"
                  disabled={isSubmitting} // Disable input during submission
                  required
                />

                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                
                <div className="flex flex-row justify-center space-x-8">
                <button
                  type="submit"
                  className="text-white border bg-black p-2 rounded"
                  disabled={isSubmitting} // Disable button during submission
                  >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </button>
                <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white p-2 rounded"
              disabled={isSubmitting} // Disable the close button while submitting
              >
              {isSuccess ? "Close" : "Cancel"}
            </button>
                </div>
              </form>
            ) : (
              <p className="my-4">Thank you for joining the waitlist!</p>
            )}

            
          </div>
        </Modal>
      )}
    </>
  );
};

// Add PropTypes validation
WaitlistForm.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Expecting a boolean for isOpen
  toggleModal: PropTypes.func.isRequired, // Expecting a function for toggleModal
};

export default WaitlistForm;
