import React from 'react';
import './style.css';

function FAQs() {
  return (
    <div className="faq-container">
      <h2 className="text-center py-5">Frequently Asked Questions</h2>

      <div className="faq-item">
        <h4>1. What is the NGO Collaboration Platform?</h4>
        <p>
          The NGO Collaboration Platform connects users with NGOs to participate in various events and causes, helping make a positive impact in society.
        </p>
      </div>

      <div className="faq-item">
        <h4>2. How can I register as a user?</h4>
        <p>
          You can register by clicking on the "Users" section and filling in the registration form with your details.
        </p>
      </div>

      <div className="faq-item">
        <h4>3. How can NGOs register on the platform?</h4>
        <p>
          NGOs can register by going to the "NGOs" section and completing the registration process. Once approved, NGOs can create and manage events.
        </p>
      </div>

      <div className="faq-item">
        <h4>4. Can I view events without registering?</h4>
        <p>
          No, you need to be registered and logged in as a user to view and apply for events hosted by the NGOs.
        </p>
      </div>

      <div className="faq-item">
        <h4>5. How do I contact the platform admins for support?</h4>
        <p>
          You can visit the "Contact Us" page to find information about how to reach out to the platform admins for any queries or support.
        </p>
      </div>
    </div>
  );
}

export default FAQs;
