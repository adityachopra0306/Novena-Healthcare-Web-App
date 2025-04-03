import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              width="30"
              height="30"
              className="rounded-circle"
            />{" "}
            NOVENA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle profile-btn"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/images/profile-icon.png"
                    alt="Profile"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                  <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                  <li><Link className="dropdown-item" to="/profile">View Profile</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/exit">Exit</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Novena</h1>
          <p>Your Health, Our Priority</p>
          <a href="#services" className="btn btn-primary">Explore Services</a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="container-fluid my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row g-4">
          {[
            { img: "appointment.png", title: "Book an Appointment", desc: "Schedule your appointment with our specialists.", link: "/appointment" },
            { img: "medication.png", title: "View Prescribed Medication", desc: "Access your prescribed medications securely.", link: "/medication" },
            { img: "doctor.png", title: "View Staff Record", desc: "Get info about our medical staff.", link: "/staff" },
            { img: "treatment.png", title: "Treatment Undergoing", desc: "Monitor your current treatments.", link: "/treatment" },
            { img: "procedure.png", title: "Procedures", desc: "Explore medical procedures with details.", link: "/procedure" },
            { img: "admit.png", title: "Admitting Details", desc: "Find out about admission procedures.", link: "/admission" },
          ].map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100">
                <img src={`/images/${service.img}`} className="card-img-top" alt={service.title} />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                  <Link to={service.link} className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2025 NOVENA | Demo Project</p>
      </footer>
    </>
  );
};

export default Home;
