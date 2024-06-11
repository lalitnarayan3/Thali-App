import styles from "./SupportPage.module.css";
const SupportPage = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className="text-center">
          {" "}
          <span className="text-danger fw-bold">MealMate</span> Support
        </h2>
        <div className="d-flex justify-content-start align-items-start flex-column">
          <div className="d-flex justify-content-start align-items-start flex-column mb-4 mt-4">
            Welcome to MealMate Support Center! We are here to assist you with
            any questions or concerns you may have regarding your food orders.
            Below, you will find information on common topics to help make your
            MealMate ordering experience smooth and enjoyable.
          </div>
          <h4 className="mb-4">Frequently Asked Questions (FAQs)</h4>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>1. Ordering and Payments</h5>

            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I place a MealMate order?</strong>
              You can place a MealMate order by exploring our menu, selecting
              the items you desire, and proceeding to checkout.
              <strong> What payment methods do you accept?</strong>
              We accept major credit cards, online payment, and other secure
              payment methods. For more details, please visit our Payment
              Methods page.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>2. Food Options and Delivery</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How can I customize my Food?</strong>
              You can customize your Food by selecting your preferred dishes and
              specifying any special instructions during the ordering process.
              <strong>What are your delivery areas and times?</strong>
              Delivery areas and times may vary. Please refer to our Delivery
              Information page for detailed information.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>3. Returns and Refunds</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>What if I am not satisfied with my Food?</strong>
              If you are not satisfied with your Food, please contact our
              support team within 24 hours of receiving your order. Visit our
              Returns & Refunds page for instructions.
              <strong>How does your refund policy work?</strong>
              We offer refunds for returned MealMate items in accordance with
              our Refund Policy. Please review this policy for more information.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>4. Account and Security</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I create a MealMate account?</strong>
              You can create an account by clicking on the <b>Sign Up</b> button
              and following the registration process.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
