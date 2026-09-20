import React, { useEffect, useState } from "react";
import Navbar from "../../componets/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./productdetail.module.css";

function ProductDetail() {
  const params = useParams();
  console.log("params", params);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetchSingleProductData();
  }, [params.id]);

  const fetchSingleProductData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`,
      );
      console.log(res.data);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.page}>
      <Navbar />

      {!singleProduct.id ? (
        <div className={styles.loadingState}>Loading...</div>
      ) : (
        <main className={styles.container}>
          <div className={styles.imgCon}>
            <img src={singleProduct.image} alt={singleProduct.title} />
          </div>

          <div className={styles.paraCon}>
            <span className={styles.category}>{singleProduct.category}</span>
            <h1>{singleProduct.title}</h1>
            <p className={styles.description}>{singleProduct.description}</p>
            <div className={styles.priceRow}>
              <h5>${singleProduct.price}</h5>
            </div>
            <button type="button" className={styles.ctaButton}>
              Add to Cart
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default ProductDetail;
