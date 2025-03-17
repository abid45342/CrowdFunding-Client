const Contact = () => {
    return (
      <div className="container mx-auto p-8 mt-16">
        <h1 className="text-4xl font-bold mb-6 text-center text-teal-500">Contact Us</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-lg mt-2 text-gray-700">
            We’d love to hear from you! Whether you have questions, suggestions, or need support, 
            our team is here to assist you. Please feel free to reach out via the form below or 
            use the contact information listed.
          </p>
        </section>
  
        <section>
          <h3 className="text-xl font-semibold text-gray-800">Contact Form</h3>
          <form className="space-y-4 mt-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div>
              <button type="submit" className="btn bg-teal-500 text-white w-full">Send Message</button>
            </div>
          </form>
        </section>
  
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
          <p className="mt-2 text-lg text-gray-700">
            <strong>IgnitionDeck Headquarters</strong><br />
            1234 Startup Ave, Suite 567<br />
            Innovation City, Techland<br />
            Email: support@ignitiondeck.com<br />
            Phone: +123-456-7890
          </p>
        </section>
      </div>
    );
  };
  
  export default Contact;
  