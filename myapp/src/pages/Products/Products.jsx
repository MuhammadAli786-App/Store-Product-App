import React, { useEffect, useState } from "react";
import Navbar from "../../componets/Navbar";
import axios from "axios";
import styles from "./products.module.css";
import { Link } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log("response", response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const filteredProducts = product.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.container}>
      <Navbar search={search} setSearch={setSearch} />

      <section className={styles.pageHeader}>
        <p className={styles.eyebrow}>Shop all</p>
        <h1>Featured Products</h1>
      </section>

      {filteredProducts.length > 0 ? (
        <div className={styles.cardGrid}>
          {filteredProducts.map((obj) => {
            const { title, price, image, id } = obj;
            return (
              <div key={id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={image} alt={title} className={styles.cardImg} />
                </div>

                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{title}</h2>

                  <div className={styles.cardFooter}>
                    <span className={styles.price}>${price}</span>

                    <Link className={styles.btn} to={`/products/${id}`}>
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.notFoundWrapper}>
          <div className={styles.emptyState}>
            <p className={styles.notFoundPara}>No product found</p>
            <span>Try a different product name or reset your search.</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
