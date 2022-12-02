import { useState, useEffect, memo } from "react";

export default memo(({ func}) => {
    const [son, setSon] = useState("子");
  
    console.log("子");
  
    useEffect(() => {
      console.log("子effect");
    }, []);
    return <>{son}</>;
  })
