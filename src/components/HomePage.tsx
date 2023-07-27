import Search from "./Search";

const HomePage: React.FC = () => {
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
      <Search width={"40rem"} height={"3rem"} top={180} />
    </div>
  );
};

export default HomePage;
