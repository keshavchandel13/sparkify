import React, { useState } from "react";
import Particles from "./animation/Particles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formData),
      });

      const isJSON = res.headers.get("content-type")?.includes("application/json");
      const result = isJSON ? await res.json() : await res.text();

      if (res.ok) {
        setStatus({ type: "success", message: isJSON ? result.message : result });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: isJSON ? result.error : result });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#FFFFFF", "#FF6F91"]}
          particleCount={400}
          particleSpread={20}
          speed={0.2}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Contact Form */}
      <div className="relative z-10 w-full max-w-2xl bg-black/70 backdrop-blur-md p-10 rounded-xl shadow-xl">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-white mb-8">
          Contact Us
        </h2>

        {status.message && (
          <div
            className={`text-center mb-4 px-4 py-2 rounded-md text-sm ${
              status.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "phone", "email"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-300 p-3 focus:outline-none focus:border-orange-400"
              aria-label={field}
            />
          ))}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-300 p-3 focus:outline-none focus:border-orange-400"
            aria-label="message"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-blue-600 text-white"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
