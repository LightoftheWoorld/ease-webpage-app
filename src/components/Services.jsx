import trust from "../assets/trust.png"
import getpaid from "../assets/getpaid.png"
import secure from "../assets/secure.png"

const data = [
  {
    title: 'Your sales are protected.',
    benefit: "Security",
    desc: 'Implement robust security measures to ensure your transactions and data are safe.',
    image: secure
  },
  {
    title: "Tested and Trusted",
    benefit: "Trust",
    desc: 'Establishing trust with your customers is vital for driving business success.',
    image: trust
  },
  {
    title: 'Get paid instantly.',
    benefit: "Payment",
    desc: 'Experience smooth and reliable payment instantly as customers purchase.',
    image: getpaid
  }
];

const Services = () => {
  return (
    <div className="space-y-16">
      {data.map((item, index) => (
        <section key={index} className="relative bg-gray-300">
          <div className="flex flex-col justify-center items-center pt-16 px-4 sm:px-6 lg:px-8 pb-48 sm:pb-56 md:pb-64 max-w-4xl mx-auto"> {/* Set max width and center */}
            <h2 className="text-lg font-semibold text-gray-600 mb-2">{item.benefit}</h2>
            <h3 className="text-3xl font-bold mb-4 text-center">{item.title}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl text-center">{item.desc}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-56 sm:h-64 md:h-72 overflow-hidden"> 
            <img
              src={item.image}
              alt="Feature Mockup"
              className="w-full h-auto max-w-md mx-auto object-cover object-top"
              style={{ transform: 'scale(1.0)' }} 
            />
          </div>
        </section>
      ))}
    </div>
  )
}

export default Services;
