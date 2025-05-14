import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import { useGlobalContext } from "../../context";

const Contact = () => {
  const { isDarkMode } = useGlobalContext();

  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_iq2bx9e",
        "template_r1a9as2",
        e.target,
        "GxTpmqEVokddvyHYL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={`contact ${isDarkMode ? "dark-mode" : ""}`} id="contact">
      <div className="left">
        {isDarkMode ? (
          <img src="assets/undraw.svg" alt="" />
        ) : (
          <img src="assets/shake.svg" alt="" />
        )}
      </div>
      <div className={`right ${isDarkMode ? "dark-mode" : ""}`}>
        <h2>Contact.</h2>
        <p>Have a question or want to work together?</p>
        <p>Leave your details and I'll get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="from_name"
            id=""
            placeholder="Your email address"
            required
          />
          <label htmlFor="name">Message</label>
          <textarea
            placeholder="What would you like to discuss?"
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
