import React, { useEffect, useState } from "react";
import { getProductById } from "../../core/user/helper.js";
import styled from "styled-components";
import { useParams } from "react-router";

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

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((product) => {
        setProduct(product);
        console.log(product);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <div>
      {product ? (
        <ProductCard>
          <div>
            <img src={product.imageUrl} />
          </div>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>
            <button>Add to card</button>
          </div>
        </ProductCard>
      ) : null}
    </div>
  );
};

export default ProductDetail;
