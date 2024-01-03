import { shallow } from "zustand/shallow";

import { modalStore } from "@/store/zustand/modalStore";

export const useModal = () => {
  const { showModal, setShowModal } = modalStore(
    (state) => ({
      showModal: state.showModal,
      setShowModal: state.setShowModal,
    }),
    shallow
  );

  return {
    showModal,
    setShowModal,
  };
};
