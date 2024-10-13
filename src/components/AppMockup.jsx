import appMockup from "../assets/appMockup.png"
import PIIM from "../assets/piim.png"

const AppMockup = () => {
    return(
        <section className="flex justify-center mb-20">
      <img src={PIIM} alt="PIIM" className="z-0 absolute" />
      <img src={appMockup} alt="App Mockup" className="mt-3 md:mt-7 z-10 h-2/4" />
    </section>
    )
}
export default AppMockup;