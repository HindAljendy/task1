import { useState } from "react";
import "./FormContact.css";

const FormContact = () => {

  const [nameContact, setNameContact] = useState("");
  const [emailContact, seEmailContact] = useState("");
  const [subjectContact, setSubjectContact] = useState("");
  const [messageContact, setMessageContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameContact = (e) => {
    setNameContact(e.target.value);
  };
  const handleEmailContact = (e) => {
    seEmailContact(e.target.value);
  }
  const handleSubjectContact = (e) => {
    setSubjectContact(e.target.value);
  }
  const handleMessageContact = (e) => {
    setMessageContact(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="HJ_FormContact">
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="name" className="HJ_LabelForm">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name..."
              value={nameContact} required onChange={handleNameContact}
              className="HJ_InputForm"
            />
          </div>
          <div className="col-lg-12">
            <label htmlFor="email" className="HJ_LabelForm">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your E-mail..."
              required
              value={emailContact}  onChange={handleEmailContact }
              className="HJ_InputForm"
            />
          </div>
          <div className="col-lg-12">
            <label htmlFor="subject" className="HJ_LabelForm">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject..."
              value={subjectContact} required onChange={handleSubjectContact}
              className="HJ_InputForm"
            />
          </div>
          <div className="col-lg-12">
            <label htmlFor="message" className="HJ_LabelForm">Message</label>
            <textarea
              type="text"
              name="message"
              id="messaget"
              placeholder="Your Message"
              value={messageContact} required onChange={handleMessageContact}
              className="HJ_TextArea"
            />
          </div>
          <div className="col-lg-12">
            <button type="submit" className="HJ_SubmitBtn">Send Message</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormContact;
