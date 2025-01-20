import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact" className="contact">
      <div className="contact-section">
        <h2>Contact Us</h2>
        <form
          className="contact-form"
          action="mailto:ahmedfarooqim3@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>If you prefer, you can also reach via:</p>
          <p>
            Email:{" "}
            <a href="mailto:ahmedfarooqim3@gmail.com">
              ahmedfarooqim3@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+923084303006">+92 308 4303006</a>
          </p>
        </div>
      </div>
    </Element>
  );
};
export default Contact;
