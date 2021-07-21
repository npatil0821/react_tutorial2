import { useContext } from "react";

import { Link } from "react-router-dom"; //use Link component instead of <a href...>

import classes from "./MainNavigation.module.css"; //need to import CSS classes as a JS object
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext); //needed for badge with number of favorites
  /*
   * Use 'to' prop of Link component to set path
   * 'classes.header' takes the header class from the CSS objects imported to 'classes'
   */
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meet Ups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet Ups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meet Up</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
