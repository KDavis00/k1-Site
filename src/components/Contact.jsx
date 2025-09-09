import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_osy8xna",        // Service ID
        "template_sc8aq4f",       // Template ID
        formData,
        "KfIGDVd_GVzsxok2v"        // Public Key
      )
      .then(() => {
        alert("Thankj you! Message sent to Kae!");
        setFormData({ name: "", subject: "", email: "", message: "" });

      })
      .catch((error) => {
        console.error(" Email send failed:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Contact Me</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your full name"
        required
      />
      <label htmlFor="subject">Subject</label>
<input
  id="subject"
  name="subject"
  type="text"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
  required
/>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message here..."
        rows="5"
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
}
