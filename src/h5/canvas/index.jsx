import styles from "./index.module.css";
import jpg from "./1.jpg";

import { useEffect } from "react";

export default () => {
  console.log(1);
  const draw = () => {
    var canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  };

  useEffect(() => {
    draw();
  }, []);
  return (
    <>
      <canvas id="tutorial" className={styles.canvas}>
        <img src={jpg} alt="不存在" className={styles.image} />
      </canvas>
    </>
  );
};
