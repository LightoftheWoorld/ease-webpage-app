import appMockup from "../assets/appMockup.png";
import PIIM from "../assets/piim.png";

const AppMockup = () => {
    return (
        <section className="relative flex justify-center items-center">
            {/* Background Image */}
            <img 
                src={PIIM} 
                alt="Background design of PIIM logo" 
                className="absolute w-full h-full object-contain z-0" 
            />
            {/* App Mockup Image */}
            <img 
                src={appMockup} 
                alt="Preview of the app interface on a device" 
                className="h-3/4 max-w-full z-10 transition-transform transform hover:scale-105" 
            />
        </section>
    );
};

export default AppMockup;
