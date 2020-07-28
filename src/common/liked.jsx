import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Liked = (props) => {
  let classes = props.liked ? "fas" : "far";
  return (
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      icon={[classes, "heart"]}
    />
  );
};

export default Liked;
