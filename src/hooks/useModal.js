import { useState, useEffect } from "react";

function useModal(parentRef) {
  const [isModalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen(!isModalOpen);
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        parentRef.current &&
        !parentRef.current.contains(event.target) &&
        isModalOpen
      ) {
        toggleModal();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [parentRef, isModalOpen]);

  return {
    isModalOpen,
    toggleModal,
  };
}

export default useModal;
