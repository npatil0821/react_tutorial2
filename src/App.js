import { Route, Switch } from "react-router-dom"; //Route component chooses which component to load for different paths

import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUps";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  /*path refers to part including and after first '/' in URL:
   * www.my-page.com/PATH
   * localhost:3000/page1
   *
   * Just a '/' as path refers to default/homepage
   *
   * Switch components allows only 1 of the route components to be rendered at a time
   *
   * The 'exact' prop makes sure the component is chosen only if there is an exact match
   * 'exact' and 'exact = {true}' are the same
   */

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
