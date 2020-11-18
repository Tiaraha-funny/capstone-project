import React, { useContext, useState } from "react";
import PropTypes, { func } from "prop-types";
import { Contexts } from "../Context";

function Image({ className, image }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, removeImage, cartItems } = useContext(Contexts);

  function cartIcon() {

    const alreadyInCart = cartItems.some((cartitem) => cartitem.id === image.id);

    if (alreadyInCart) {
      return (
        <i
          onClick={() => removeImage(image.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if(hovered) {
      return (
        <i
          onClick={() => addToCart(image)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  function heartIcon() {
    if (image.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(image.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => toggleFavorite(image.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      {heartIcon()} {cartIcon()}
      <img src={image.url} className="image-grid" />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
