const About = () => {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-teal-500">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-lg mt-2 text-gray-700">
            At IgnitionDeck, our mission is to provide a user-friendly, secure, and empowering platform
            for creators and organizations to raise funds for their projects. We aim to support innovative
            and impactful ideas that can positively change the world.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
          <p className="text-lg mt-2 text-gray-700">
            We offer a variety of tools that allow individuals to easily launch fundraising campaigns, 
            gain support from backers, and reach their funding goals. Whether you're creating a startup, 
            a community project, or a social cause, IgnitionDeck is the platform to turn your ideas into reality.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
            <li>Transparency: We believe in open communication and clear processes for all campaigns.</li>
            <li>Innovation: We embrace creative ideas and encourage innovative solutions.</li>
            <li>Community: We are dedicated to building a strong, supportive community for our users.</li>
          </ul>
        </section>
  
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
          <div className="flex space-x-8 mt-6">
            <div className="w-1/3">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 1" 
                className="rounded-full shadow-lg w-32 h-32 mx-auto"
              />
              <p className="text-center font-semibold mt-2">John Doe</p>
              <p className="text-center text-gray-600">CEO & Founder</p>
            </div>
            <div className="w-1/3">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 2" 
                className="rounded-full shadow-lg w-32 h-32 mx-auto"
              />
              <p className="text-center font-semibold mt-2">Jane Smith</p>
              <p className="text-center text-gray-600">CTO & Co-Founder</p>
            </div>
            <div className="w-1/3">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 3" 
                className="rounded-full shadow-lg w-32 h-32 mx-auto"
              />
              <p className="text-center font-semibold mt-2">Sarah Lee</p>
              <p className="text-center text-gray-600">Marketing Lead</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;
  