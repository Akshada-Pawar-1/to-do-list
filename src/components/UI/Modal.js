import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open && dialog.current) {
      dialog.current.showModal();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={styles.modal}>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
}
