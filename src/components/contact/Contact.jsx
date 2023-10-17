import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "gmail",
        "template_ummtl6k",
        e.target,
        "user_Qo0WHk53vZvhlnybCaXUy"
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
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" id="" placeholder="Email" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>

        <a className="bottom" href="#intro">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
