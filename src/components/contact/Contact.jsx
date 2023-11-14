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
        <p>
          Have a question or want to work together? Leave your details and I'll
          get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="from_name"
            id=""
            placeholder="Your E-mail"
            required
          />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
