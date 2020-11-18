import React, { useEffect, useState } from "react";

const Contexts = React.createContext();
const API__PHOTOS = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function ContextProvider({children}) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [ cartItems, setCartItems ] = useState([]);

   const fetchPhotosFromApi = async () => {
    const res = await fetch(API__PHOTOS);
    const data = await res.json();
    setAllPhotos(data);
    console.log(data);
  }

  useEffect(() => {
    fetchPhotosFromApi();
  }, []);

  function toggleFavorite(id) {
    const newPhotos = allPhotos.map(photo => {
      if(photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }

      return photo
    })
    setAllPhotos(newPhotos);
  }

  function addToCart(image) {
    // const newCartItems = [...cartItems, image];
    // setCartItems(newCartItems)
    setCartItems(prevItem => [...prevItem, image])
    console.log(cartItems);
    }

    function removeImage(id) {
      setCartItems(prevItems => prevItems.filter(image => image.id !== id));
    }

  return (
  <Contexts.Provider value={{ allPhotos, toggleFavorite, cartItems, addToCart, removeImage }} >
    {children}
  </Contexts.Provider>);
}

export { ContextProvider, Contexts };
