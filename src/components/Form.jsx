// eslint-disable-next-line
import { useState, useEffect } from "react";
// import memesData from "../memesData";
import React from "react";
export default function Form() {
  const [isPending, setIsPending] = useState(true);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);
  const changeHandle = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // console.log(allMemes);
  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        if (!res) {
          new Error(`Oops! ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setAllMemes(data.data.memes);
        setIsPending(false);
      })
      .catch((err) => {
        console.error(err.message);
        setIsPending(false);
      });
  }, []);
  function getMemeImages(e) {
    e.preventDefault();
    const memesDataArray = allMemes;
    const randomNumber = Math.trunc(Math.random() * memesDataArray.length) + 1;
    let url = memesDataArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      value: "",
    }));
  }
  // };
  return (
    <div className="m-4 p-4">
      <form className="row gap-2">
        <input
          type="text"
          placeholder="Top text"
          className="col-sm p-2"
          name="topText"
          value={meme.topText}
          onChange={changeHandle}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="col-sm p-2"
          name="bottomText"
          value={meme.bottomText}
          onChange={changeHandle}
        />
        <button className="btn btn-primary p-2" onClick={getMemeImages}>
          Get a new meme image
        </button>
      </form>
      {isPending && (
        <div className="d-flex align-items-center justify-content-center m-3">
          <button className="btn btn-primary p-2">Loading...</button>
        </div>
      )}
      <div className="position-relative text-center">
        <img
          src={meme.randomImage}
          alt="snap"
          className="dummy-img w-100 mt-4 "
        />
        <h2 className="position-absolute top text-dark bg-light p-1 fw-bolder">
          {meme.topText}
        </h2>
        <h2 className="position-absolute bottom text-dark bg-light p-1 fw-bolder">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}
