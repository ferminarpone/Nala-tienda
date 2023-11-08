import { useEffect, useState } from "react";

export const useModal = () => {
  //State para hacer aparecer el formulario
  const [form, setForm] = useState(false);
  //Función que cierra el modal
  const modalClosed = () => {
    if (form) {
      setForm(!form);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, [form]);
  return {
    form,
    setForm,
    modalClosed,
  };
};
