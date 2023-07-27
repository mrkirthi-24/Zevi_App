import { useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "./getProducts";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/cloth_bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Search />
    </div>
  );
};

function Search() {
  const [showDialog, setShowDialog] = useState(false);
  const products = getProducts(5);

  const showDialogBox = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div style={{ position: "absolute", top: 180 }}>
      <div style={{ position: "relative" }}>
        <input
          onClick={showDialogBox}
          type="search"
          placeholder="Search"
          style={{
            width: "40rem",
            height: "3rem",
            borderRadius: "15px",
            paddingLeft: "3rem",
            border: "none",
            fontSize: "1.2rem",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "50%",
            right: "1.5rem",
            transform: "translateY(-50%)",
            color: "#aaa",
            fontSize: "1.2rem",
          }}
        >
          &#128269;
        </span>
      </div>

      {/* Dialog Box */}
      {showDialog && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, 5%)",
            backgroundColor: "#fff",
            padding: "10px 10px 10px 30px",
            borderRadius: "5px",
            boxShadow: "0 0 50px rgba(0, 0, 0, 0.8)",
            color: "#000",
          }}
        >
          <h4>Latest Trends</h4>
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
          <h4>Popular Suggestions</h4>
          <div>
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  style={{
                    listStyle: "none",
                    marginBottom: 5,
                    fontSize: 12,
                  }}
                >
                  <Link to="/products/">
                    <li>{product.name}</li>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
