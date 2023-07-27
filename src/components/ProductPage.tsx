import React from "react";
import { Link } from "react-router-dom";
import { getProducts } from "./getProducts";
import Search from "./Search";

const ProductPage: React.FC = () => {
  const products = getProducts(8);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Search width={"30rem"} height={"2.5rem"} top={40} />
      </div>
      <div
        style={{ marginTop: 100, fontSize: 30, padding: "0px 10px 10px 20px" }}
      >
        <p>Search Results</p>
      </div>
      <div style={{ display: "flex" }}>
        <div>Filter</div>
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: 5,
          }}
        >
          {products.map((product, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  marginRight: 20,
                }}
              >
                <div>
                  <Link to="/products">
                    <img
                      width={120}
                      height={170}
                      src={product.image}
                      alt="Product"
                      style={{
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out",
                        listStyle: "none",
                      }}
                      onLoad={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                    />
                    <li
                      style={{
                        listStyle: "none",
                        marginBottom: 5,
                        fontSize: 10,
                      }}
                    >
                      {product.name}
                    </li>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
