import "./header.css";
import { GiMusicSpell } from "react-icons/gi";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <span>Mozika</span> <GiMusicSpell fill="#BC6FF1" size={25} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
          <form class="d-flex pe-3">
            <button
              class="btn primary-btn rounded-pill me-3 py-2 px-4"
              type="submit"
            >
              Sign-up
            </button>
            <button
              class="btn primary-btn  rounded-pill py-2 px-4"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Header;
