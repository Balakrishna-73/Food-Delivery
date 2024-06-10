import React from "react";
import classes from "./starRating.module.css";

export default function StarRating({ stars, size }) {
  function Star({ number }) {
    const halfNumber = number - 0.5;

    return stars >= number ? (
      <img src="/star-full.svg" className={classes.img} alt={number} />
    ) : stars >= halfNumber ? (
      <img src="/star-half.svg" className={classes.img} alt={number} />
    ) : (
      <img src="/star-empty.svg" className={classes.img} alt={number} />
    );
  }
  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map((number) => (
        <Star key={number} number={number} />
      ))}
    </div>
  );
}

StarRating.defualtProps = {
  size: 18,
};