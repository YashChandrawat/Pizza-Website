import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaGithub,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="contact" id="contact">
      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="mailto@yashchandrawat01@gmail.com" class="me-4 text-reset">
              <FaGoogle />
            </a>
            <a
              href="https://www.instagram.com/yash.chandrawat/"
              class="me-4 text-reset"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-chandrawat-1y1/"
              class="me-4 text-reset"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/YashChandrawat" class="me-4 text-reset">
              <FaGithub />
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Pizza Hut
                </h6>
                <p>
                  Pizza Hut is your go-to destination for delicious pizzas!
                  Explore a wide array of handcrafted pizzas with fresh
                  ingredients, tantalizing flavors, and various toppings to
                  satisfy your cravings.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Margherita
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Cheese Corn
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Paneer Pizza
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Paneer-Pasta Pizza
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" class="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <Link to="/book-table" class="text-reset">
                    Book Table
                  </Link>
                </p>
                <p>
                  <Link to="/cart" class="text-reset">
                    Orders
                  </Link>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaHome fontSize={"1.5rem"} /> Indore, Madhya Pradhesh
                </p>
                <p>
                  <FaEnvelope fontSize={"1.5rem"} /> yashchandrawat52@gmail.com
                </p>
                <p>
                  <FaPhoneAlt fontSize={"1.5rem"} /> +91 7772839465
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <strong>© 2023 Copyright : Yash Chandrawat</strong>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
