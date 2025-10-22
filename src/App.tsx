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
      src="https://link.qa.breeze.cash/link/plink_80126366fcbaa311"
      allow="payment"
    ></iframe>
  );
}

export default App;
