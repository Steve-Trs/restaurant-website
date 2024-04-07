import React from "react";
import "../assets/styles/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@restaurant.com</p>
        <p>Address: 123 Main St, Anytown USA</p>
      </div>
      <div className="booking-form">
        <h2>Book a Table</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
