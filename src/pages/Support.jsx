const Support = () => {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-teal-500">Support</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Need Help?</h2>
          <p className="text-lg mt-2 text-gray-700">
            If you are facing any issues or need assistance with your campaign, please don't hesitate 
            to contact us. Our support team is available 24/7 to provide the help you need.
          </p>
        </section>
  
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions (FAQ)</h2>
          <ul className="space-y-4 mt-6 text-lg text-gray-700">
            <li>
              <strong>How do I create a campaign?</strong>
              <p className="mt-2">To create a campaign, simply log in to your account and click on "Add New Campaign" in the dashboard.</p>
            </li>
            <li>
              <strong>How can I donate to a campaign?</strong>
              <p className="mt-2">Once you find a campaign you'd like to support, you can click on it to donate via the available payment options.</p>
            </li>
            <li>
              <strong>Can I modify my campaign after it's published?</strong>
              <p className="mt-2">Yes, you can update or modify your campaign details at any time through your dashboard.</p>
            </li>
          </ul>
        </section>
  
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Support</h2>
          <p className="text-lg mt-2 text-gray-700">
            If your issue isn't covered by the FAQ, please fill out the form on our Contact page or send 
            an email directly to support@ignitiondeck.com for further assistance.
          </p>
        </section>
      </div>
    );
  };
  
  export default Support;
  