import { useEffect, useState } from "react";
import "./App.css";
import "@breeze.cash/ui/styles.css";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:35000/v1/session", {
      credentials: "include", // This is correct for sending cookies
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setSession(data.data.session);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error state appropriately
      });
  }, []);

  return <>{session}</>;
}

export default App;
