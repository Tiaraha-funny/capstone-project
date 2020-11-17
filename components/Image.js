import React, { useState } from "react";

function Image({ className, image }) {
  const [hovered, setHovered] = useState(false);

  function handleHoveredEnter() {
    setHovered(true);
    console.log("The mouse is entered");
  }

  function handleHoveredLeave() {
    setHovered(false);
    console.log("Leave it");
  }

  console.log(hovered);

  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      onMouseEnter={handleHoveredEnter}
      onMouseLeave={handleHoveredLeave}
      className={`${className} image-container`}
    >
      {heartIcon} {cartIcon}
      <img src={image.url} className="image-grid" />
    </div>
  );
}

export default Image;
