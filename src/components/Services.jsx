import featureMockup from "../assets/appMockup.png"

const data = [
  {title:'Your sales are protected.', benefit: "Security", desc: `Features like "Quick Add" saves you time on the strenuous act of adding items.`}, 
  {title:"Ensure you're certified.", benefit: "Assurance", desc: `Features like "Quick Add" saves you time on the strenuous act of adding items.`}, 
  {title: 'Get paid.', benefit: "Payment", desc:`Features like "Quick Add" saves you time on the strenuous act of adding items.`}
]

const Services = () => {
  return(
    <div className="">
      {data.map((item, index) => (
        <section key={index} className="mb-10">
          <div className="flex flex-col justify-center items-center bg-gray-300">
            <h2 className="mb-4 mt-16">{item.benefit}</h2>
            <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
            <p className="text-gray-600 mb-8 pb-80">{item.desc}</p>
            <img src={featureMockup} alt="Feature Mockup" className="absolute pt-80"
            style={{ clipPath: 'inset(0 0 150px 0)' }} />
          </div>
        </section>
      ))}
    </div>
  )
}

export default Services;
