import React, { useEffect, useState } from "react";
import { getProducts } from "../../core/user/helper.js";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 1px solid #ecf0fa;
  box-shadow: 0 2px 4px 0 rgba(7, 17, 55, 0.06);
  border-radius: 4px;
  border-radius: 4px;
`;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        console.log(products);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const handleProductDetail = (productId) => {
    console.log(productId);
    history.push(`/product/${productId}`);
    // history.push("/cart");
    // return <Redirect to={{ pathname: `/product/${productId}` }} />;
  };

  return (
    <MainContainer>
      {products.map((product) => {
        return (
          <ProductCard>
            <div>
              <img src={product.imageUrl} />
            </div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>
              <button onClick={() => handleProductDetail(product._id)}>
                Detail
              </button>
            </div>
          </ProductCard>
        );
      })}
    </MainContainer>
  );
};

export default Shop;
