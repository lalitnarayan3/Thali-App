import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalCount = useSelector((state) => state.cart.count);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const { isDark, lightToDark, darkToLight } = useContext(ThemeContext);
  const { isAuth, logoutHandler } = useContext(AuthContext);

  const handleLogout = () => {
    logoutHandler();
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <NavLink to="/" className={styles.brandLink}>
          <h2>MealMate</h2>
        </NavLink>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Menu
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          About
        </NavLink>

        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Support
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? styles.iconButtonActive : styles.iconButton
          }
        >
          <button className={styles.iconButton}>
            <i className="bi bi-cart">{totalCount}</i>
          </button>
        </NavLink>
        {isAuth ? (
          <>
            <i className="bi bi-person-circle text-dark">{user.name}</i>
            <button className="btn btn-info" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Log in
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Sign up
            </NavLink>
          </>
        )}

        <button
          className={styles.iconButton}
          onClick={isDark ? darkToLight : lightToDark}
        >
          {isDark ? (
            <i className="bi bi-brightness-high-fill"></i>
          ) : (
            <i className="bi bi-moon-fill"></i>
          )}
        </button>
      </nav>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
