import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
import styles from "./MenuCard.module.css";
import Loader from "../Loader/Loader";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Error from "../Error/Error";

const MenuCard = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cuisineData, setCuisineData] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        setRecipeData(res.data.recipes);
        setFilteredData(res.data.recipes);
        const newCuisine = [
          ...new Set(res.data.recipes.map((item) => item.cuisine)),
        ];
        setCuisineData(newCuisine);
        setIsLoader(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoader(false);
      });
  }, []);

  if (isError) {
    return <Error />;
  }

  const filterItems = (val) => {
    const newCuisine = recipeData.filter((item) => item.cuisine === val);
    setFilteredData(newCuisine);
  };

  const allItems = () => {
    setFilteredData(recipeData);
  };

  const handleAddToCart = (item) => {
    if (isAuth) {
      dispatch(addToCart(item));
      alert("Item added to the cart SUCCESSFULLY...!!");
    } else {
      alert("Please Login first");
    }
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div>
          <div className={styles.btnContainer}>
            {cuisineData.map((item, idx) => (
              <button key={idx} onClick={() => filterItems(item)}>
                {item}
              </button>
            ))}
            <button onClick={allItems}>All</button>
          </div>

          <div className={styles.grid}>
            {filteredData.map((item, index) => (
              <div className={styles.container} key={index}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/menu/${item.id}`}
                >
                  <img src={item.image} width="100%" alt="Recipe" />
                  <div className={styles.card}>
                    <div>
                      <h4>{item.name}</h4>
                      <p>Servings: {item.servings}</p>
                      <p>{item.tags.join(", ")}</p>
                    </div>
                    <div>
                      <p className={styles.rate} style={{ color: "white" }}>
                        {item.rating}
                        <i className="bi bi-star-fill ms-2"></i>
                      </p>
                      <p>
                        <i className="bi bi-currency-rupee">
                          {" "}
                          {item.caloriesPerServing}
                        </i>
                      </p>
                    </div>
                  </div>
                </NavLink>
                <button
                  className={styles.addToCart}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCard;
