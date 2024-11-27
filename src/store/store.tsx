import { create } from "zustand";

type StoreType = {
  isTranslate: boolean;
  setIsTranslate: (value: boolean | ((c: boolean) => boolean)) => Promise<void>;
};

export const useStoreManager = create<StoreType>()((set) => ({
  isTranslate: false,
  setIsTranslate: async (value: boolean | ((c: boolean) => boolean)) => {
    set((state) => ({
      isTranslate:
        typeof value === "function" ? value(state.isTranslate) : value,
    }));
  },
}));
