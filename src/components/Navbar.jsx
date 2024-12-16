import { Link } from "react-router-dom";
import styles from "../assets/css/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLink}>
        <li>
          <Link to="/">
            <a href="" className={styles.navItem}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link to="/Abouts">
            <a href="" className={styles.navItem}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link to="/Produks">
            <a href="" className={styles.navItem}>
              Produk
            </a>
          </Link>
        </li>
        <li>
          <Link to="/Contacts">
            <a href="" className={styles.navItem}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
