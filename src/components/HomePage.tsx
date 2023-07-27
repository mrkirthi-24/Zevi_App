import React from "react";
import faker from "faker";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/cloth_bg.webp)", // Make sure to use the correct path
        backgroundSize: "cover", // Adjust the background size to cover the whole area
        backgroundPosition: "center", // Center the background image
        minHeight: "100vh", // Set a minimum height to cover the whole viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff", // Set a text color for better visibility (optional)
      }}
    >
      <Search />
    </div>
  );
};

function handleClick() {
  alert(".");
}

function Search() {
  return (
    // <div style={{ position: "absolute", top: 180 }}>
    //   <input
    //     type="search"
    //     placeholder="Search"
    //     style={{ width: "40rem", height: "3rem", borderRadius: "15px" }}
    //   />
    // </div>

    <div style={{ position: "absolute", top: 180 }}>
      <div style={{ position: "relative" }}>
        <input
          onClick={handleClick}
          type="search"
          placeholder="Search"
          style={{
            width: "40rem",
            height: "3rem",
            borderRadius: "15px",
            paddingLeft: "3rem", // Add padding to make space for the icon
            border: "none",
            fontSize: "1.2rem",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "50%",
            right: "1.5rem", // Adjust the left position to position the icon
            transform: "translateY(-50%)",
            color: "#aaa", // Adjust the color of the icon
            fontSize: "1.2rem", // Adjust the size of the icon
          }}
        >
          &#128269; {/* Unicode for the search icon (🔍) */}
        </span>
      </div>
    </div>
  );
}

export default HomePage;
