import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
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
    // Add your submit logic here (API call, email send, etc.)
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
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