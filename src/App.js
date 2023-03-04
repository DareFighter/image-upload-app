import "./App.css";
import { useState } from "react";
import storage from "./firebase";

function App() {
  const [image, setImage] = useState(null);
  const upload = () => {
    storage
      .ref(`/images/${image.name}`)
      .put(image)
      .on("file uploaded successfully", alert("success"), alert);
  };

  return (
    <div className="mid">
      <center>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={upload}>Upload</button>
      </center>
    </div>
  );
}

export default App;
