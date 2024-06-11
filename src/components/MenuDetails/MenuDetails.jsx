import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import styles from "./MenuDetails.module.css";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { addToCart } from "../Cart/cartSlice";
import Error from "../Error/Error";

const MenuDetails = () => {
  const { pid } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isLoader, setIsLoader] = useState(true);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${pid}`)
      .then((res) => {
        setRecipeDetails(res.data);
        setIsLoader(false);
      })

      .catch(() => {
        setIsError(true);
        setIsLoader(false);
      });
  }, [pid]);

  const handleAddToCart = (item) => {
    if (isAuth) {
      dispatch(addToCart(item));
      alert("Item added to the cart SUCCESSFULLY...!!");
    } else {
      alert("Please Login first");
    }
  };

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className={styles.menu}>
          <div className={styles.image}>
            <img
              src={recipeDetails.image}
              alt="Recipe"
              className={styles.img}
            />
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{recipeDetails.name}</h1>
            <p className={styles.cuisine}>{recipeDetails.cuisine}</p>
            <p className={styles.rating}>
              {recipeDetails.rating}
              <i className="bi bi-star-fill ms-2"></i>
            </p>
            <p className={styles.reviews}>
              review ({recipeDetails.reviewCount})
            </p>
            <p className={styles.ingredients}>
              Ingredients: {recipeDetails.ingredients.join(",")}.
            </p>
            <div className={styles.infoContainer}>
              <p>Cooking Time: {recipeDetails.cookTimeMinutes} min.</p>
              <p>Servings: {recipeDetails.servings}</p>
              <p>Calories: {recipeDetails.caloriesPerServing}</p>
              <p>{recipeDetails.tags.join(", ")}.</p>
            </div>
            <div className={styles.rs}>
              <i className="bi bi-currency-rupee">
                {" "}
                {recipeDetails.caloriesPerServing}
              </i>
            </div>
            <button
              className={styles.addToCart}
              onClick={() => handleAddToCart(recipeDetails)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuDetails;
