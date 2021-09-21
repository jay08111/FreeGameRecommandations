import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/gameDataSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { gameData } = useSelector((state) => state.game);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
