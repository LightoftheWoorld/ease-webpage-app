import { useState } from "react";
import { FaCode } from "react-icons/fa";
import WaitlistForm from "./WaitlistForm";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return(
        <section className="flex flex-col items-center text-center py-20">
        <div className="mb-4 border rounded-xl bg-white px-1 py-2 flex justify-center w-115 gap-2 items-center">
          <div className="bg-[#E0E7F7] px-3 py-2 rounded-xl"><FaCode color="#3D6DCB" /></div>
          <h2>This site is a pointer to the Ease Seller App. Private Beta Release Soon.</h2>
          </div>
        <h1 className="text-7xl font-bold mb-4">
          Making Commerce More<br />Convenient for <span className="text-blue-600">Producers.</span>
        </h1>
        <p className="text-gray-600 mb-8">Using technology to enhance commerce across all distribution channels.</p>
        <div className="flex space-x-4 justify-center">
            {/* <button className="border border-black text-black px-4 py-3 rounded-lg items-center flex flex-row gap-3"> <FaGooglePlay size={20} />Google Play</button>
            <button className="text-white border bg-black px-4 py-3 rounded-lg items-center flex flex-row gap-3"><FaApple />App Store</button> */}
            <button className="text-white border bg-black px-4 py-3 rounded-lg items-center flex flex-row gap-3" onClick={toggleModal}>Join Waitlist</button>
          </div>
          <WaitlistForm isOpen={isOpen} toggleModal={toggleModal} />
      </section>
    )
}
export default Hero;