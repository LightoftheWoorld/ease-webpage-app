
import BG from "../assets/bg.png"

const Card = () => {
    return(
    <section className="flex flex-col justify-center items-center text-white px-4 md:px-16 xl:px-40 h-96 mb-16 my-20 md:my-24">
        <div
            className={`flex flex-col w-full rounded-lg h-96 px-6 bg-cover`}
            style={{
                backgroundImage: `url(${BG})`,
            }}
        >
            <div className="flex flex-col justify-center mt-28">
        <h2 className="text-3xl font-bold mb-4">Boosting Sales,<br />One Purchase at a Time</h2>
        <p className="mb-8">Ease provides various features to help you track payments efficiently and manage your <br /> inventory. Trade can be so much easier</p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-4 py-3 rounded-lg items-center flex flex-row gap-3">Join Waitlist</button>
          {/* <button className="bg-white text-black px-4 py-3 rounded-lg items-center flex flex-row gap-3"> <FaGooglePlay size={20} />Google Play</button>
          <button className="text-white border border-white px-4 py-3 rounded-lg items-center flex flex-row gap-3"> <FaApple size={20} />App Store</button> */}
        </div>
            </div>
      </div>
    </section>
    )
}
export default Card;