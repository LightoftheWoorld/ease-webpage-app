import BG from "../assets/bg.png";
import WaitlistForm from "./WaitlistForm";
import { useState } from "react";

const Card = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section
            className="flex flex-col justify-center items-center text-white mb-16 my-20 md:my-24"
            id="card"
            aria-labelledby="card-title"
            aria-describedby="card-description"
        >
            <div
                className={`flex flex-col w-full rounded-lg bg-cover h-96`}
                style={{
                    backgroundImage: `url(${BG})`,
                }}
            >
                <div className="flex flex-col h-full px-6 justify-end pb-10">
                    <h2 id="card-title" className="text-3xl font-bold mb-4">
                        Boosting Sales,
                        <br />
                        One Purchase at a Time
                    </h2>
                    <p id="card-description" className="mb-8">
                        Ease provides various features to help you track payments efficiently and manage your
                        <br />
                        inventory. Trade can be so much easier.
                    </p>
                    <div className="flex space-x-4">
                        <button
                            className="bg-white text-black px-4 py-3 rounded-lg flex items-center gap-3 transition duration-200 ease-in-out hover:bg-gray-300"
                            onClick={toggleModal}
                            aria-expanded={isOpen}
                            aria-controls="waitlist-modal"
                        >
                            Join Waitlist
                        </button>
                        {/* Uncomment and add icons if needed
                        <button className="bg-white text-black px-4 py-3 rounded-lg flex items-center gap-3">
                            <FaGooglePlay size={20} /> Google Play
                        </button>
                        <button className="text-white border border-white px-4 py-3 rounded-lg flex items-center gap-3">
                            <FaApple size={20} /> App Store
                        </button>
                        */}
                    </div>
                    <WaitlistForm isOpen={isOpen} toggleModal={toggleModal} />
                </div>
            </div>
        </section>
    );
};

export default Card;
