import { useEffect } from "react";

interface CustomEventDetail {
  message: string;
}

export function useListenToEvent(eventType: string, callback: (detail: CustomEventDetail) => void) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === eventType) {
        callback(event.data);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [eventType, callback]);
}
