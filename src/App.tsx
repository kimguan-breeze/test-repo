import { useCallback, useEffect } from "react";

function App() {
  const handleIFrameRequest = useCallback(async (event: MessageEvent) => {
    if (event.data.type === "request-global-config") {
      const iframe = document.querySelector("iframe");
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          {
            type: "request-global-config",
            config: {
              applePayEnabled: true,
              crossDomainName: location.host,
            },
          },
          "*"
        );
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleIFrameRequest);

    return () => {
      window.removeEventListener("message", handleIFrameRequest);
    };
  }, [handleIFrameRequest]);

  return (
    <iframe
      style={{ width: "100%", height: "100vh" }}
      src="https://pay.qa.breeze.cash/page_bbdbd7d154d3ab18/pcs_51e903ae60ef00b3c2e00cc473c307b4826b7654/card?livemode=false"
      allow="payment https://pay.qa.breeze.cash"
    ></iframe>
  );
}

export default App;
