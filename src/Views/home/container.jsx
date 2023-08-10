import React from "react";

const Container = (props) => {
  return (
    <div 
      className={`container p-8 mx-auto xl:px-0 bg-[#F6F6F6]${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;