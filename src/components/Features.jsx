const Features = () => {
    return(
        <section className="mb-20" id="features">
            <h2 className="text-7xl font-bold text-gray-100 mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        title: 'Faster Inventory Keeping',
                        description: 'Streamline your inventory management with real-time tracking and updates'
                    },
                    {
                        title: 'View Total Sales',
                        description: 'Get a comprehensive view of your total sales in one place'
                    },
                    {
                        title: 'Start Receiving Orders',
                        description: 'Activate your store and start receiving customer orders seamlessly'
                    },
                    {
                        title: 'Business Analytics',
                        description: 'Gain valuable insights into your business performance with detailed analytics'
                    },
                    {
                        title: 'Receive Orders at Your Own Pace',
                        description: 'Set your availability and control when and how you receive orders'
                    }
                ].map((feature, index) => (
                    <div key={index} className="bg-gray-300 p-6 rounded-lg">
                        <h3 className="font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features;
