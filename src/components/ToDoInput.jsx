import { useState } from "react";

function ToDoInput({ handleList }) {
  const [inputText, setInputText] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleList(inputText);
      setInputText("");
    }
  }

  return (
    <div className="input-container">
      <input
        className="input-box-todo"
        type="text"
        value={inputText}
        placeholder="Add item..."
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button
        className="add-btn"
        onClick={() => {
          handleList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default ToDoInput;
