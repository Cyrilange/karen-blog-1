import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Sobre-mi</li>
          </NavLink>

          <NavLink
            to="/Single"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Posts</li>
          </NavLink>
        </ul>
      </div>

      <div className="social-container">
        <ul
          className="menu-social
      "
        >
          <li>
            <a
              className="social-network"
              href="https://www.instagram.com/kamachasi_1995/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              className="social-network"
              href="https://www.facebook.com/karen.margarita.5055?locale=es_ES"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              className="social-network"
              href="https://www.tiktok.com/@karenm533"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </li>
          <li>
            <a
              className="social-network"
              href="https://twitter.com/KarenMa50175289"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
