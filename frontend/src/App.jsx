import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CardContainer from "./Components/CardContainer";

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://qa7.parentune.com/api/subscription/subscribe/v2/plans")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setApiData(res.data);
      })
      .catch((err) => setError(error.message));
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="textContainer">
          <h3>Loading...</h3>
        </div>
      ) : (
        <>
          {apiData.length === 0 ? (
            <div className="textContainer">
              <h3>No data found</h3>
            </div>
          ) : (
            <CardContainer data={apiData} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
