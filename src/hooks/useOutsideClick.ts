import React, { useEffect } from "react";

const useOutsideClick = (ref: any, handler: (e: React.SyntheticEvent) => void) => {
  useEffect(() => {
    const listener = (e: any) => {
      // contains проверяет содержится ли элемент по которому кликнули внутри того элемента которому присвоен ref
      if (ref.current?.contains(e.target)) return;

      handler(e);
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};

export default useOutsideClick;