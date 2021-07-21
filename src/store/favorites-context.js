import { createContext, useState } from "react";

//start with capital because object contains a component
//start with capital for component names
//createContext takes 1 argument: initial value for context
//prototype functions are used
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetUp) => {},
  removeFavorite: (meetUpId) => {},
  itemIsFavorite: (meetUpId) => {},
});

//react component which provides context to all components which need values
//also updates values
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]); //used to update favorites

  //adds new favorite to list
  //use nested function to have the update be instant
  function addFavoriteHandler(favoriteMeetUp) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteMeetUp);
    });
  }

  //remove favorite from list
  //filter drops items for which it is given a false value
  function removeFavoriteHandler(meetUpId) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((meetUp) => meetUp.id !== meetUpId);
    });
  }

  //checks if item is favorited
  //some works similar to filter but returns true if value passed is true and false if value passed is false
  function itemIsFavoriteHandler(meetUpId) {
    return userFavorites.some((meetUp) => meetUp.id === meetUpId);
  }

  //contains updated favorite info
  //functions are given as pointers for use when needed
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  //.Provider refers to the component built into the FavoriteContext object
  //needs to be wrapped around all components that will be using it
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
