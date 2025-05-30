import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BreezePaymentPage } from "@breeze.cash/ui";
import "@breeze.cash/ui/styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "80vw", height: "80vh" }}>
        <BreezePaymentPage
          pageId="page_6533bc8c3bcd35a5"
          clientSecret="pcs_58d255fbb151fda440128ff9310b0f1db24467fe"
          sandbox
        />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
