import { useState, useEffect } from "react";
import { goldMods } from "@/assets/mods";
import { randomGen } from "./randomGen";

type Mod = {
  name: string;
  description: string;
  category: string;
  difficulty: number;
  custom: boolean;
  diffCategory: string;
};

export function useSingleSelect(diff: number[]) {
  const [modPool, setModPool] = useState<Mod[]>([]);
  const [selectedMod, setSelectedMod] = useState<Mod | null>(null);

  useEffect(() => {
    const filteredMods = goldMods.filter((mod) =>
      diff.includes(mod.difficulty)
    );
    setModPool(filteredMods);
  }, []);

  const selectRandomMod = () => {
    if (modPool.length === 0) {
      const refilledMods = goldMods.filter((mod) =>
        diff.includes(mod.difficulty)
      );
      setModPool(refilledMods);
      return;
    }

    const index = randomGen(modPool.length);
    const mod = modPool[index];

    setSelectedMod(mod);
    setModPool((prev) => prev.filter((_, i) => i !== index));
    return mod;
  };

  return { selectedMod, selectRandomMod };
}
