import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/gameDataSlice";
function App() {
  const dispatch = useDispatch();
  const { gameData } = useSelector((state) => state.game);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>App component</h1>
      <div>
        {gameData.slice(0, 3).map(({ title, id }) => (
          <h1 key={id}>{title}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
