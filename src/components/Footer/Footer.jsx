import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Coyright {new Date().getFullYear} by WorldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
