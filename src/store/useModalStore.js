import { create } from "zustand";

const useModalStore = create((set) => ({
  components: [],
  openModal: (component) => {
    set((state) => ({ components: [...state.components, component] }));
  },
  closeModal: () =>
    set((state) => ({
      components: state.components.slice(0, -1),
    })),
  clearModals: () => set({ components: [] }),
}));

export default useModalStore;
