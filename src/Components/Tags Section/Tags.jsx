import React from "react";
import TagsDetail from "../TagsDetail/TagsDetail";
import Tagstopic from "../TagsTopic/Tagstopic";
import "./Tag.css";

const Tags = () => {
  return (
    <div className="tags-container">
      <div className="tag-start">
        <div className="start-border"></div>
        <h2>
          See Popular tags <br /> and browse different topics
        </h2>
      </div>

      <div className="tags-divider">
        <Tagstopic />
        <TagsDetail />
      </div>
    </div>
  );
};

export default Tags;
