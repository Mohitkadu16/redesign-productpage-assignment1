const TestimonialsSection = () => {
    return (
      <section className="testimonials-section py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Trusted by Teams Worldwide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial bg-white p-6 rounded-lg shadow-md">
            <p>"This product transformed the way our team works!"</p>
            <h4 className="mt-4 font-bold">- Company A</h4>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md">
            <p>"Absolutely essential for modern workflows."</p>
            <h4 className="mt-4 font-bold">- Company B</h4>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  