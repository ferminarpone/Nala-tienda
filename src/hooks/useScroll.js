import { useEffect } from "react";
export const useScroll = () => {
    useEffect(() => {
      window.scroll(0, 0);
    }, []);
};
