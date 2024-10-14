import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, limiit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchImages = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?${page}=1&limit=${limiit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading Data, Please Wait</div>;
  }

  if (errorMsg !== null) {
    return <div>BHAI ERROR HAI : {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircle className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              className="current-image"
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className="current-indicator"></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
