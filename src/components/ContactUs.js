import React, { useRef, useState } from "react";
import Sectionheading from "./SectionHeading";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
const ContactUs = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [active, setActive] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  const form = useRef();

  const sendEmail = (e) => {
    setVerified(false);
    e.preventDefault();
    setActive(true);
    emailjs
      .sendForm(
        "service_3lptx9v",
        "template_21l3c7i",
        form.current,
        "THoMxI-7hmnm7JmBJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setIsSent(true);
          setActive(true);
          setVerified(true);
        },
        (error) => {
          setVerified(true);
          setError(true);
          e.target.reset();
          setActive(false);
        }
      );
  };

  return (
    <div id="contactus" className="main-contact alter-bg pb-5">
      <div className="main-width">
        <Sectionheading
          titleBefore="Contact"
          titleAfter="Us"
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem et nostrum quae nulla aperiam quas laudantium
          perspiciatis, commodi, eum eligendi iusto voluptates natus provident"
        />
        <div className="contact-form col-md-9 col-lg-7">
          {isSent ? (
            <div class="alert alert-success left-align" role="alert">
              <i class="fa-solid fa-check"></i> Thank you. Someone will be in
              touch shortly.
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-main">
                <input
                  required
                  type="text"
                  name="user_name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="input-main">
                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="input-main">
                <textarea
                  required
                  type="text"
                  name="user_message"
                  rows={5}
                  placeholder="Enter Message"
                />
              </div>
              <ReCAPTCHA
                sitekey="6LcqXI0lAAAAAEGaLZJGxWf1PqzCwGOaTtEMulKn"
                onChange={onChange}
              />
              <br />
              {error && (
                <div class="alert alert-danger left-align" role="alert">
                  <i class="fa-solid fa-circle-exclamation"></i> You message
                  isn't sent, please try again.
                </div>
              )}

              <button
                href="#"
                type="submit"
                disabled={!verified}
                style={{ width: "100%" }}
                className={
                  verified
                    ? "link-btn sub-btn btn-royalblue"
                    : "link-btn sub-btn disabled-btn btn-royalblue"
                }
              >
                {active ? (
                  <div class="spinner-border text-white " role="status"></div>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
