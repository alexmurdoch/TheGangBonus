import { create } from "zustand";

type Mod = {
  name: string;
  description: string;
  category: string;
  difficulty: number;
  custom: boolean;
  diffCategory: string;
};

type ActiveRoundState = {
  activeModifiers: Mod[];
  addModifier: (mod: Mod) => void;
  removeModifier: (modName: string) => void;
  clearModifiers: () => void;
};

export const useActiveRoundStore = create<ActiveRoundState>((set) => ({
  activeModifiers: [],

  addModifier: (mod) =>
    set((state) => ({
      activeModifiers: [...state.activeModifiers, mod],
    })),

  removeModifier: (modName) =>
    set((state) => ({
      activeModifiers: state.activeModifiers.filter(
        (mod) => mod.name !== modName
      ),
    })),

  clearModifiers: () => set({ activeModifiers: [] }),
}));
