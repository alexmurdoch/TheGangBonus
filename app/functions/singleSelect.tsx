import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
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

export const singleSelect = (diff: number[]) => {
  const initialPool = goldMods.filter((mod) => diff.includes(mod.difficulty));
  const [modPool, setModPool] = useState<Mod[]>([]);
  const [selectedMod, setSelectedMod] = useState<Mod | null>(null);

  useEffect(() => {
    const filteredMods = goldMods.filter((mod) =>
      diff.includes(mod.difficulty)
    );
    setModPool(filteredMods);
  }, [diff]);

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
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {selectedMod ? (
        <>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {selectedMod.name}
          </Text>
          <Text>{selectedMod.description}</Text>
        </>
      ) : (
        <Text>No mod selected yet</Text>
      )}
      <Button
        title="Select Mod"
        onPress={selectRandomMod}
        disabled={modPool.length === 0}
      />
    </View>
  );
};
