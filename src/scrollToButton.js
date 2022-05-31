import React from "react";
import { scrollTo } from "./scrollTo";

const ScrollToButton = ({ toId, toRef, duration, children }) => {
 const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

 return <button className="btn-scroll" onClick={handleClick}>{children}</button>;
};

export default ScrollToButton;