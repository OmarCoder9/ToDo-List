import React from "react";
import ToDoImg from "../../../assets/ToDoImg.png";

const SidePic = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={ToDoImg} alt="ToDo List Visual"
      className="h-full w-full object-contain rounded-2xl" />
    </div>
  );
};

export default SidePic;
