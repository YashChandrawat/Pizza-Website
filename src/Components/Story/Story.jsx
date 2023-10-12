import React from "react";
import "./Story.css";
import story from "./story.png";
import { AiOutlineRight } from "react-icons/ai";
function Story() {
  return (
    <div className="story">
      <div className="left-part">
        <img src={story} alt="" className="img-story" />
      </div>
      <div className="right-part">
        <h2 className="story-h2">Our Story</h2>
        <h1 className="story-h1">
          The PizzaHut Has Excellent Quality of Pizza
        </h1>
        <p className="story-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis
          optio rem est suscipit possimus et tenetur minima non quo officia
          aperiam unde voluptatum asperiores explicabo enim, impedit dolorem
          eum, consequatur atque quas sequi maiores cupiditate repellendus.
          Officia nobis voluptatem est necessitatibus labore quae velit eos a,
          harum maxime sed!
        </p>
        <button className="btn-home">
          Read More<AiOutlineRight className="btn-cart"/>
        </button>
      </div>
    </div>
  );
}

export default Story;
