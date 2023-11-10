import { useState } from "react";

export const useFocus = () => {
  const [foco, setFoco] = useState(false);

  const makeFocus = () => {
    window.scroll(0, 604);
    setFoco(true);
    setTimeout(() => {
      setFoco(false);
    }, "1");
  };
  return {
    foco,
    makeFocus
  };
};
