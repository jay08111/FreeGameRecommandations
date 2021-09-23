import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/GameData/gameDataSlice";
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
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
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
