"use client";

import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://artportfolio-backend.onrender.com/api/contact",
        formData
      );
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base">
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Contact</h1>
          <p className="text-xl md:text-2xl mt-4">
            Get in Touch with Preeti Arts
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-primary">
          <div>
            <h2 className="text-3xl font-bold mb-6">CONTACT</h2>
            <p className="text-lg mb-6 text-justify">
              Preeti Arts appreciates hearing from people all over the world who
              enjoy her work and welcomes any questions or enquiries.
            </p>

            <p className="text-lg text-justify">
              Availability of original work can be found in each item&apos;s
              description in the gallery section. If you are interested in a
              particular original, or something you&apos;ve seen on Preeti
              Arts&apos;s social media, please reach out for more information.
            </p>
            <br />

            <p className="text-lg text-justify">
              Commission information can be found on the commission page. If you
              have a question concerning commissions that is not answered here,
              please don&apos;t hesitate to ask.
            </p>
            <br />

            <p className="text-lg text-justify">
              Follow Preeti Arts on{" "}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAC0A3] underline hover:text-gray-700"
              >
                Facebook
              </a>{" "}
              and{" "}
              <a
                href="https://www.instagram.com/_preetiarts?igsh=b3l5dHM4aWZvZmVu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAC0A3] underline hover:text-gray-700"
              >
                Instagram
              </a>{" "}
              to keep up-to-date with works-in-progress, insights into her
              creative process and advocacy work.
            </p>
            <br />
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg mb-2">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg mb-2">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3]"
                  required
                />
              </div>

              <div>
                <label className="block text-lg mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3]"
                  required
                />
              </div>

              <div>
                <label className="block text-lg mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3] h-48"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-4 px-8 rounded-lg hover:bg-[#c5ab8f] transition-colors text-lg font-semibold"
              >
                {loading ? "Sending..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;