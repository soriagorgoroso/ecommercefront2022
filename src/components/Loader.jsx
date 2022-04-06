import React from "react";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import beer from "../animations/beer.json";
import "../pages/Cart.css";
function Loader() {
  const beerPint = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: beerPint.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: beer,
    });

    console.log("Lottie log");
    return () => lottie.stop();
  }, []);

  return (
    <div className="centered">
      <h1 ref={beerPint}></h1>
    </div>
  );
}

export default Loader;
