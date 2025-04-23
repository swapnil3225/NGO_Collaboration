import React from 'react';
import './style.css'; // Assuming you have a CSS file for styling

function Contact() {
  return (
    <div className="container">
      <header className="text-center my-5">
        <h1>Contact Us</h1>
        <p className="text-muted">Contact the Help Team</p>
      </header>

      <section className="contact-form">
        <form className="form">
          <div className="form-group mb-3">
            <label htmlFor="subject">What can we help you with?</label>
            <select className="form-control" id="subject">
              <option value="">Select a topic...</option>
              <option value="account">Account Issues</option>
              <option value="billing">Billing</option>
              <option value="technical">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="subject">Associated Account Email (if different)</label>
            <input type="email" className="form-control" id="associatedEmail" placeholder="Enter associated email" />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="details">Details</label>
            <textarea className="form-control" id="details" rows="4" placeholder="Describe your issue or question here"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>


      <section className="admins-info mt-5">
        <h2 className="text-center my-4">Admin Contact Information</h2>
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 col-lg-4 admin-card text-center p-2 mb-3">
            <p className="admin-name"><strong>Swapnil More</strong></p>
            <p className="admin-info">Email: swapnil.more22@vit.edu</p>
            <p className="admin-info">Phone: +91 9172823225</p>
          </div>

          <div className="col-10 col-md-6 col-lg-4 admin-card text-center p-2 mb-3">
            <p className="admin-name"><strong>Mitali Mukkawar</strong></p>
            <p className="admin-info">Email: mitali.mukkawar22@vit.edu</p>
            <p className="admin-info">Phone: +987 654 3210</p>
          </div>

          <div className="col-10 col-md-6 col-lg-4 admin-card text-center p-2 mb-3">
            <p className="admin-name"><strong>Om Munde</strong></p>
            <p className="admin-info">Email: om.munde22@vit.edu</p>
            <p className="admin-info">Phone: +91 8612387890</p>
          </div>

          <div className="col-10 col-md-6 col-lg-4 admin-card text-center p-2 mb-3">
            <p className="admin-name"><strong>Saloni Nachankar</strong></p>
            <p className="admin-info">Email: saloni.nachankar22@vit.edu</p>
            <p className="admin-info">Phone: +91 9982387890</p>
          </div>
        </div>
      </section>




    </div>
  );
}

export default Contact;