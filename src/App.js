import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/GameData/gameDataSlice";
import { setFilterdData } from "./redux/GameFilter/gameFilterSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  GamesPage,
  SingleGamePage,
  MyPage,
} from "./page/index";
import { Navbar, Footer } from "./components/index";
function App() {
  const dispatch = useDispatch();
  const { gameData } = useSelector((state) => state.game);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(setFilterdData(gameData));
  }, [dispatch, gameData]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/games">
          <GamesPage />
        </Route>
        <Route exact path="/games/:id" children={<SingleGamePage />} />
        <Route exact path="/mypage">
          <MyPage />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
