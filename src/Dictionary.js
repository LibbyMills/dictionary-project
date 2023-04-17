import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchedWord, setWord] = useState("");

  function handleResponse(response) {
    console.groupCollapsed(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchedWord}`);

    let apiKey = `cf101ecec2aca96b8t364eed41926oa0`;
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${searchedWord}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
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
