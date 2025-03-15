import React, { useRef } from "react";
import sendEmail from "../utils/sendEmail";

const ContactForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formRef.current);
    e.target.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
