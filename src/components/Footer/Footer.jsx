import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h4>About Us</h4>
          <p>Learn more about our company and what we do.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <p>Email: mealMate@contact.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialLinks}>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy;By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © MealMate™ Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
