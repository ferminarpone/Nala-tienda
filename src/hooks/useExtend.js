import { useState } from "react";

export const useExtend = () => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

  return {
    show,
    handleToggle
  }
}
