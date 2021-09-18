import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/gameDataSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>App component</h1>
    </div>
  );
}

export default App;
