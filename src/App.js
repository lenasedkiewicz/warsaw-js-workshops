import { useEffect, useState } from "react";
import "./App.css";
import Capture from "./components/Capture";

function App() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [text1, setText1] = useState("Text1");
  const [text2, setText2] = useState("Text2");

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="App">
      <header className="App-header">
        {preview ? <h1>defined</h1> : <h2>not defined</h2>}
        {preview ? (
          <Capture img={preview} textTop={text1} textBottom={text2} />
        ) : (
          <h1>Import an image</h1>
        )}
        <input
          type={"file"}
          onChange={({ target }) => setFile(target.files[0])}
        />
        <input
          type={"text"}
          onChange={({ target }) => setText1(target.value)}
        />
        <input
          type={"text"}
          onChange={({ target }) => setText2(target.value)}
        />
      </header>
    </div>
  );
}

export default App;