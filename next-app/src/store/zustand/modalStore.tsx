import { create } from "zustand";

interface ModalState {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const modalStore = create<ModalState>((set) => ({
  showModal: false,
  setShowModal: (showModal: boolean) => {
    set({ showModal });
  },
}));
