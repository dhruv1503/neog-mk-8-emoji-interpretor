import "./styles.css";
import { useState } from "react";

const emojis = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤕": "physical Injury or pain",
  "🤭": "creating confusion",
  "✊": "resistance",
  "🤨": "suspicion"
};

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("Results will be published here");

  const DisplayUserInput = (value) => {
    setInput(value);
  };
  const emojiClickHandler = (inputEmoji) => {
    setResult(emojis[inputEmoji]);
  };

  const inputHandler = (input) => {
    DisplayUserInput(input);
    if (input in emojis) {
      setResult(emojis[input]);
    } else {
      setResult("Could not recognise this emoji");
    }
  };

  const emojiKeys = Object.keys(emojis);

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h2>inside outttt</h2>
      {/* Input bar */}
      <input
        style={{
          width: "80%",
          padding: "1em",
          border: "1px solid black",
          "border-radius": "1em"
        }}
        className="user-input"
        placeholder="Enter emoji to interpret it"
        onInput={(e) => {
          inputHandler(e.target.value);
        }}
      />
      {/* Ḍisplay UserInput */}
      <p style={{ fontWeight: "600" }}>{input}</p>
      <h2>{result}</h2>

      {emojiKeys.map((emoji) => (
        <span
          style={{ cursor: "pointer", fontSize: "1.8rem" }}
          onClick={() => {
            emojiClickHandler(emoji);
          }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
