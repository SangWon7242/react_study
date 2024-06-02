const Hello = () => {
  return "Hello";
};

export default function Home() {
  const style = {
    backgroundColor: "red",
    width: "200px",
    height: "200px",
    marginTop: "20px",
  };

  return (
    <div>
      <section
        style={{ backgroundColor: "blue", width: "200px", height: "200px" }}
      ></section>
      <section style={style}></section>
    </div>
  );
}
