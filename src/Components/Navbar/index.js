import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar__links"]}>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/new-arrivals">
            New Arrivals
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/lorem-exclusive">
            Shivaz Exclusive
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/men">
            Blankets
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/women">
            Quilts
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/ethnic">
            Pillow Covers
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/couture">
            Comforter Sets
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/bridal">
            Sale
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/latest">
            Latest
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
