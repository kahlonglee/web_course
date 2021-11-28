import React, { useState, useEffect } from "react";
import Nav1 from "../Navbar/Nav";
import Products from "../Product/Products";
import api from "../../API/api";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/Products/All");
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Nav1 />
      <br />
      <Products products={products} />
    </div>
  );
}

export default Home;
