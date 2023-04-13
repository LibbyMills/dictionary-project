import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchedWord, setWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchedWord}`);
  }
  function handleSearchedWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type in a word"
          onChange={handleSearchedWord}
        />
      </form>
      <p>Dictionary</p>
    </div>
  );
}
