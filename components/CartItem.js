import { func } from "prop-types";
import React, { useContext } from "react";
import { Contexts } from "../Context";

function CartItem({item}) {

  const { removeImage } = useContext(Contexts);

  return (
    <div className="cart-item">
      <i onClick={() => removeImage(item.id)} className="ri-delete-bin-line"></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
