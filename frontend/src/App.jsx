import { useEffect, useState } from "react";

const memes = [
  "https://i.imgflip.com/30b1gx.jpg",
  "https://i.imgflip.com/1bij.jpg",
  "https://i.imgflip.com/26am.jpg",
  "https://i.imgflip.com/4t0m5.jpg",
];

function App() {
  const [image, setImage] = useState(memes[0]);
  const [message, setMessage] = useState("Loading backend...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Backend sleeping 😴");
      });
  }, []);

  const chaosMode = () => {
    const randomImage =
      memes[Math.floor(Math.random() * memes.length)];

    setImage(randomImage);
  };

  return (
    <div
      onMouseMove={chaosMode}
      style={{
        height: "100vh",
        background: "#111827",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        cursor: "grab",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>😂 Cursor Chaos DevSecOps App</h1>

        <h2>{message}</h2>

        <p>
          Move cursor for meme chaos 🚀
        </p>

        <img
          src={image}
          alt="funny"
          style={{
            width: "350px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default App;




