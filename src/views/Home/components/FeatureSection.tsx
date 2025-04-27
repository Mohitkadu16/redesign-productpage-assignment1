const FeaturesSection = () => {
    return (
      <section className="features-section py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Fast Performance</h3>
            <p>Experience lightning-fast load times and smooth operations.</p>
          </div>
          <div className="feature-card p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Secure Data</h3>
            <p>Your privacy and data security are our top priorities.</p>
          </div>
          <div className="feature-card p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Easy Integration</h3>
            <p>Seamlessly integrate with your existing tools and workflows.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  