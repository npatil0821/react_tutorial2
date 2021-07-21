import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetUpList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext); //needed to output list of favorites

  let content; //holds content to be displayed on page

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>No favorites.</p>;
  } else {
    //outputs MeetUpList component with list of favorites
    content = <MeetUpList meetups={favoriteCtx.favorites}></MeetUpList>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
