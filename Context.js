import React, { useEffect, useState } from "react";

const Contexts = React.createContext();
const API__PHOTOS = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function ContextProvider({children}) {
  const [allPhotos, setAllPhotos] = useState([]);

   const fetchPhotosFromApi = async () => {
    const res = await fetch(API__PHOTOS);
    const data = await res.json();
    setAllPhotos(data);
    console.log(data);
  }

  useEffect(() => {
    fetchPhotosFromApi();
  }, []);


  return (
  <Contexts.Provider value={{allPhotos}}>
    {children}
  </Contexts.Provider>);
}

export { ContextProvider, Contexts };
