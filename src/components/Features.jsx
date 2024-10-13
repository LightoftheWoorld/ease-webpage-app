
const Features = () => {
    return(
        <section className="mb-20" id="features">
      <h2 className="text-7xl font-bold text-gray-100 mb-10">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Faster Inventory Keeping', 'View Total Sales', 'Start receiving Orders?', 'Business Analytics', 'Receive Orders at your own Pace'].map((feature, index) => (
          <div key={index} className="bg-gray-300 p-6 rounded-lg">
            <h3 className="font-bold mb-2">{feature}</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </section>
    )
}
export default Features;