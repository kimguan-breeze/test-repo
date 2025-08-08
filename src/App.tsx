import { useEffect, useState } from "react";
import "./App.css";
import "@breeze.cash/ui/styles.css";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    fetch("https://da9daf1d68a7.ngrok-free.app/v1/status", {
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
