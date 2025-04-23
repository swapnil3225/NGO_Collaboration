import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import images1 from "./banner4.jpg";
import images2 from "./banner3.jpg";
import images3 from "./banner2.jpg";
import images5 from "./tet.webp"
import images4 from "./Qr.png";
import "./text.css";
function NgoCollaboration() {

  return (
    <div className="ngo-collaboration-container">
      {/* Top Contact and Contribute Section */}
      <div className="top-bar">
        <div className="contact-info">
          <span>📧 ngoconnect@gmail.com.org</span>
          <span>📞 9028329929</span>
        </div>
        <Link to="/contribute" className="btn-contribute">Contribute</Link>
      </div>

      <div className="scrollable">
        {/* Header Section with Slider */}
        <header className="header-section">
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={images1} className="d-block w-100" alt="Slide 1"></img>
        <div className="carousel-caption">
          <h5 className="animated-text">Empowering Communities</h5>
          <p className="animated-text">Building a better future through compassion and support.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={images5} className="d-block w-100" alt="Slide 2"></img>
        <div className="carousel-caption">
          <h5 className="animated-text">Support for Every Child</h5>
          <p className="animated-text">Ensuring every child grows up in a nurturing environment.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={images3} className="d-block w-100" alt="Slide 3"></img>
        <div className="carousel-caption">
          <h5 className="animated-text">Dignity for the Elderly</h5>
          <p className="animated-text">Providing comfort and companionship in every step of aging.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</header>


{/* Styles for animated text */}



        {/* Navigation Menu */}
        <nav className="navbar">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/work" className="nav-link">Our Work</Link>
          <Link to="/partnerships" className="nav-link">Partnerships</Link>
          <Link to="/users" className="nav-link">Engage with Us</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/gallery" className="nav-link">Our Gallery</Link>
        </nav>

        {/* Cards Section */}
        
  <section className="cards-section p-5">
  <div className="row justify-content-center">
    {/* User Card */}
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card p-4 shadow-sm border-0 rounded-lg card-hover">
        <Link to="/users" className="link">
          <div className="card-content text-center">
            <h2 className="text-primary">
              <i className="fa-solid fa-users fa-2x"></i>
            </h2>
            <p className="text-muted mt-4">Register, login, and explore events for NGOs.</p>
          </div>
        </Link>
      </div>
    </div>

    {/* NGO Card */}
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card p-4 shadow-sm border-0 rounded-lg card-hover">
        <Link to="/ngos" className="link">
          <div className="card-content text-center">
            <h2 className="text-success">
              <i className="fa-solid fa-building-ngo fa-2x"></i>
            </h2>
            <p className="text-muted mt-4">NGO Register and event creation.</p>
          </div>
        </Link>
      </div>
    </div>

    {/* Contact Card */}
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card p-4 shadow-sm border-0 rounded-lg card-hover">
        <Link to="/contact" className="link">
          <div className="card-content text-center">
            <h2 className="text-info">
              <i className="fa-solid fa-id-card-clip fa-2x"></i>
            </h2>
            <p className="text-muted mt-4">Reach out to us for any queries or support.</p>
          </div>
        </Link>
      </div>
    </div>

    {/* FAQ Card */}
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card p-4 shadow-sm border-0 rounded-lg card-hover">
        <Link to="/faqs" className="link">
          <div className="card-content text-center">
            <h2 className="text-warning">
              <i className="fa-solid fa-person-circle-question fa-2x"></i>
            </h2>
            <p className="text-muted mt-4">Find answers to common questions here.</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>

      </div>

      {/* Breadcrumb Section */}
      <div class="container mt-5 text-center">
  <h3 class="text-secondary">Our Collaborations</h3>
  <hr class="w-25 mx-auto" />
</div>

      {/* Content Section */}
      {/* <!-- Main Section --> */}
<div class="container my-5">
    <div class="content-page-wrap bg-light p-4 rounded shadow-sm">
        <div class="main-page-content row justify-content-center">
            <div class="content-page col-lg-10 col-md-12">
                <div class="content-page-inner text-center">
                    <section class="ngo-story-section">
                        <h2 class="ngo-title display-4 text-success mb-4">Rainbow Foundation India (RFI)</h2>
                        <p class="lead text-success">
                            Rainbow Foundation India is a national NGO working for marginalized children, offering residential care, education, and wellness. In collaboration with NBI since 2011, RFI established homes for girls and boys, supporting over 160 children in Bangalore.
                        </p>
                        {/* <!-- Donate Button triggers modal --> */}
                        <button class="btn btn-success btn-lg mt-3" data-bs-toggle="modal" data-bs-target="#donateModal">Donate Now</button>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Modal for QR Code --> */}
<div class="modal fade" id="donateModal" tabindex="-1" aria-labelledby="donateModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="donateModalLabel">Donate via QR Code</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <img src={images4} alt="QR Code for Donation" class="img-fluid rounded" />
                <p class="mt-3">Scan the QR code to donate to Rainbow Foundation India (RFI).</p>
            </div>
        </div>
    </div>
</div>

{/* <!-- Bootstrap JS (necessary for modal) --> */}
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>

<div class="container mt-5 text-center">
  <h3 class="text-secondary">Our Blogs</h3>
  <hr class="w-25 mx-auto" />
</div>


      {/* Highlight Section */}
      <div class="container mt-5 py-5 bg-light rounded shadow-lg">
  <div class="row align-items-center">
    <div class="col-md-10 mx-auto text-center">
      <h2 class="display-4 mb-3 text-primary">'A Happy Childhood' for Every Child is a Possibility</h2>
      <p class="lead mb-4 text-muted">
        Every child deserves love, care, and the opportunity to grow in a nurturing environment.
      </p>
      <p class="mb-4">
        <strong>Our Vision:</strong> To provide children worldwide with the resources they need to thrive.
      </p>
      <blockquote class="blockquote">
        <p>"Every child you encounter is a divine appointment." - Wess Stafford</p>
      </blockquote>
      <p>
        Join us in making a difference by supporting education, healthcare, and emotional well-being initiatives.
      </p>
      <button type="button" class="btn btn-primary btn-lg">Read More</button>
    </div>
  </div>
</div>


<div class="container mt-5 py-5 bg-light rounded shadow-lg">
  <div class="row align-items-center">
    <div class="col-md-10 mx-auto text-center">
      <h2 class="display-4 mb-3 text-warning">"Helping Hands for Everyone"</h2>
      <p class="lead mb-4 text-muted">
        Together, we can build a community where no one is left behind. Every helping hand counts toward a better, more inclusive world.
      </p>
      <p class="mb-4">
        <strong>Our Purpose:</strong> To empower communities by providing resources and support to those in need, fostering resilience and hope.
      </p>
      <blockquote class="blockquote">
        <p>"The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi</p>
      </blockquote>
      <p>
        Join our efforts to support food security, shelter, and community programs that uplift those facing challenges.
      </p>
      <button type="button" class="btn btn-warning btn-lg">Read More</button>
    </div>
  </div>
</div>




<div class="container mt-5 py-5 bg-light rounded shadow-lg">
  <div class="row align-items-center">
    <div class="col-md-10 mx-auto text-center">
      <h2 class="display-4 mb-3 text-success">"Dignity and Care for Every Elderly Person"</h2>
      <p class="lead mb-4 text-muted">
        Our elderly deserve respect, care, and the comfort of a supportive community as they age.
      </p>
      <p class="mb-4">
        <strong>Our Mission:</strong> To provide a nurturing and inclusive environment for elderly individuals, ensuring they feel valued and connected.
      </p>
      <blockquote class="blockquote">
        <p>"The manner of giving care to our elderly defines us as a society." - Anonymous</p>
      </blockquote>
      <p>
        Support our initiatives focused on healthcare, companionship, and meaningful engagement for senior citizens.
      </p>
      <button type="button" class="btn btn-success btn-lg">Read More</button>
    </div>
  </div>
</div>


      {/* Footer Section */}

{/* Footer Section */}
<div className="container-fluid bg-dark text-light py-5">
  <div className="row justify-content-center">
    {/* About Column */}
    <div className="col-md-4 mb-3">
      <h3 className="text-white">About</h3>
      <ul className="list-unstyled">
        <li><Link to="/issue" className="text-light text-decoration-none">The Issue</Link></li>
        <li><Link to="/genesis" className="text-light text-decoration-none">Genesis</Link></li>
        <li><Link to="/vision-mission" className="text-light text-decoration-none">Vision & Mission</Link></li>
        <li><Link to="/board-members" className="text-light text-decoration-none">Board Members</Link></li>
        <li><Link to="/residential-homes" className="text-light text-decoration-none">Our Residential Homes</Link></li>
      </ul>
    </div>
    {/* Social Media Column */}
    <div className="col-md-4 mb-3">
      <h3 className="text-white">Social Media</h3>
      <ul className="list-unstyled">
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">📸 Instagram</a></li>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">📘 Facebook</a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">🔗 LinkedIn</a></li>
        <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">📺 YouTube</a></li>
      </ul>
    </div>
  </div>
  {/* Copyright Footer */}
  <div className="text-center mt-4">
    <p>&copy; 2024 NGO Collaboration. All rights reserved.</p>
  </div>
</div>


      
    </div>
  );
}

export default NgoCollaboration;
