import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

function NavBar({ cartCount }) {

  const { dark, setDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  function Logout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-primary">

        <div className="container-fluid">

          <Link className="navbar-brand fw-bold" to="/">
            Navbar
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >

            <div className="navbar-nav">

              <Link
                className="nav-link active"
                to="/"
              >
                Home
              </Link>

              {isLoggedIn && (
                <>
                  <Link className="nav-link" to="/products">
                    Product
                  </Link>

                  <Link className="nav-link" to="/cart">
                    Cart 🛒 <span className="badge bg-danger">{cartCount}</span>
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={Logout}
                  >
                    Logout
                  </button>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>

                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}

              <button
                className="mx-1 btn btn-warning"
                onClick={() => setDark(!dark)}
              >
                {dark ? "☀️ Light" : "🌙 Dark"}
              </button>

            </div>

          </div>

        </div>

      </nav>

    </div>
  );
}

export default NavBar;