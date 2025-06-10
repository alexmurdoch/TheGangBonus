import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useSingleSelect } from "../../components/functions/singleSelect";
import React, { useMemo, useState } from "react";

type Mod = {
  name: string;
  description: string;
  category: string;
  difficulty: number;
  custom: boolean;
  diffCategory: string;
};

function SelectedModDisplay({ mod }: { mod: Mod | null }) {
  if (!mod) return null;

  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>{mod.name}</Text>
      <Text>Difficulty: {mod.difficulty}</Text>
      <Text>{mod.description}</Text>
    </View>
  );
}

export default function DifficultyButtons() {
  const easy = useSingleSelect([1, 2]);
  const medium = useSingleSelect([3, 4]);
  const hard = useSingleSelect([5, 6, 7, 8, 9, 10]);
  const fullRandom = useSingleSelect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [activeMod, setActiveMod] = useState<Mod | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const mod = easy.selectRandomMod();
            if (mod) setActiveMod(mod);
          }}
        >
          <Text style={styles.difficultyText}>Easy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const mod = medium.selectRandomMod();
            if (mod) setActiveMod(mod);
          }}
        >
          <Text style={styles.difficultyText}>Medium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const mod = hard.selectRandomMod();
            if (mod) setActiveMod(mod);
          }}
        >
          <Text style={styles.difficultyText}>Hard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const mod = fullRandom.selectRandomMod();
            if (mod) setActiveMod(mod);
          }}
        >
          <Text style={styles.difficultyText}>Full Random</Text>
        </TouchableOpacity>
      </View>

      <SelectedModDisplay mod={activeMod} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 20,
    backgroundColor: "#C49C17", // mustard yellow / goldenrod
  },
  smallContainer: {
    gap: 8,
    padding: 16,
    backgroundColor: "#0B1713", // very dark greenish teal / near black
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F52525", // bright red / fire engine red
    padding: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1A1A1A", // very dark grey / almost black
    borderWidth: 2,
    fontSize: 2,
  },
  titleText: {
    color: "white", // pure white
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace", // temporary default if custom font not added
    textTransform: "uppercase",
    textShadowColor: "#000", // black
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1.5,
  },
  difficultyText: {
    color: "white",
    fontSize: 20,
  },
});
