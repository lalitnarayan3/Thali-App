import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>
        About Our <span className="text-danger fw-bold">MealMate</span> App
      </h1>
      <p className={styles.description}>
        Welcome to our Food App! We are dedicated to bringing you the best
        recipes from around the world. Our app is designed to make your cooking
        experience enjoyable and stress-free.
      </p>
      <p className={styles.description}>
        Whether you are a beginner or a seasoned chef, you will find a variety
        of recipes that cater to all skill levels. From quick and easy meals to
        gourmet dishes, our app provides detailed instructions, ingredient
        lists, and cooking tips to help you create delicious meals for you and
        your loved ones.
      </p>
      <h2 className={styles.subtitle}>Our Mission</h2>
      <p className={styles.description}>
        Our mission is to inspire and empower home cooks to create amazing
        meals. We believe that cooking should be fun, accessible, and rewarding.
        Thats why we offer a wide range of recipes, from traditional favorites
        to modern twists, ensuring there is something for everyone.
      </p>
      <h2 className={styles.subtitle}>Features</h2>
      <ul className={styles.featuresList}>
        <li className={styles.feature}>
          Wide variety of recipes from different cuisines
        </li>
        <li className={styles.feature}>
          Step-by-step instructions and cooking tips
        </li>
        <li className={styles.feature}>
          Ingredient lists with easy-to-find items
        </li>
        <li className={styles.feature}>
          User-friendly interface and easy navigation
        </li>
        <li className={styles.feature}>
          Save your favorite recipes for quick access
        </li>
        <li className={styles.feature}>
          Share recipes with friends and family
        </li>
      </ul>
      <h2 className={styles.subtitle}>Join Our Community</h2>
      <p className={styles.description}>
        Join our community of food lovers and share your cooking experiences
        with us. Follow us on social media for the latest updates, tips, and
        inspiration. We love to see what youre cooking!
      </p>
      <p className={styles.description}>
        Thank you for choosing our MealMate App. We hope it becomes your go-to
        resource for all your cooking needs.
      </p>
    </div>
  );
};

export default About;
