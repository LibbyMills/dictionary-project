import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [searchedWord, setWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = `cf101ecec2aca96b8t364eed41926oa0`;
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${searchedWord}&key=${apiKey}`;
    axios.get(apiURL).then(handleDictionaryResponse);

    let imageAPIKey = `cf101ecec2aca96b8t364eed41926oa0`;
    let imageAPIURL = `https://api.shecodes.io/images/v1/search?query=${searchedWord}&key=${imageAPIKey}`;
    axios.get(imageAPIURL).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchedWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type in a word"
              onChange={handleSearchedWord}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
