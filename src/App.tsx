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
      src="https://pay.qa.breeze.cash/page_fb50a76c6f64f62f/pcs_e670227fee25bef86462d11e58f86437aa80882a/card?livemode=false"
      allow="payment https://pay.qa.breeze.cash"
    ></iframe>
  );
}

export default App;
