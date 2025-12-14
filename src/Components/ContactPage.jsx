import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-emerald-100 py-16 px-8">
      <div className="max-w-screen-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-center text-emerald-800 mb-6">SEND US A MESSAGE</h2>
        <p className="text-center text-emerald-700 mb-8">Have a question or comment? We’re here to help, just drop us a line!</p>

        {/* Contact Form */}
        <form action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="text-emerald-700">First Name*</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                required 
                className="w-full p-3 mt-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-emerald-700">Your Mail Address*</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full p-3 mt-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="subject" className="text-emerald-700">Type Your Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full p-3 mt-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-emerald-700">Your Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="w-full p-3 mt-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-emerald-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="w-full p-3 mt-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition duration-300"
            >
              Contact Us Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
