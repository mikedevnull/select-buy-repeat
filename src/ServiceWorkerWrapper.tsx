import { Toast, Button } from "tailwind-mobile/react";
import { useState, useEffect } from "react";
import { registerSW } from "virtual:pwa-register";

export function ServiceWorkerWrapper() {
  const [showReload, setShowReload] = useState(false);
  let updateSw: CallableFunction;

  useEffect(() => {
    updateSw = registerSW({
      onNeedRefresh() {
        setShowReload(true);
      },
      onOfflineReady() {
        console.log("offline ready");
      },
    });
  }, []);

  return (
    <Toast
      position="center"
      // @ts-ignore
      opened={showReload}
      button={
        <Button
          clear
          inline
          onClick={() => {
            updateSw();
          }}
        >
          Reload
        </Button>
      }
    >
      <div className="flex-shrink">A new version is available!</div>
    </Toast>
  );
}

export default ServiceWorkerWrapper;
