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
  }),
    [params.id];
  const fetchSingleProductData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      console.log(res.data);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      {!singleProduct.id ? (
        <h2>Loading...</h2>
      ) : (
        <div className={styles.container}>
          <div className={styles.imgCon}>
            <img src={singleProduct.image} alt="No Product Available" />
          </div>
          <div className={styles.paraCon}>
            <h1>{singleProduct.title}</h1>
            <h4>{singleProduct.category}</h4>
            <p>{singleProduct.description}</p>
            <h5>${singleProduct.price}</h5>
            <button>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
