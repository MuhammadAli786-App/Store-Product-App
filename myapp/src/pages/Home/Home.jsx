import React, { useEffect, useState } from "react";
import Navbar from "../../componets/Navbar";
import styles from "./home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
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

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Fresh picks for everyday living</span>
          <h1>Upgrade your space with smarter essentials.</h1>
          <p className={styles.para}>
            Shop the best products with amazing deals and offers.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} to="/products">
              Shop now
            </Link>
            <Link className={styles.secondaryAction} to="/about">
              Learn more
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.visualCardTop}>
            <span className={styles.visualLabel}>Trending</span>
            <strong>New arrivals</strong>
          </div>
          <div className={styles.visualCardLarge}>
            <span>Best sellers</span>
            <strong>Up to 40% off</strong>
          </div>
        </div>
      </header>

      <section className={styles.productsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Collection</p>
          <h2>Featured Products</h2>
        </div>

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
                    <h3 className={styles.cardTitle}>{title}</h3>

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
            <p className={styles.notFoundPara}>No product found</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
