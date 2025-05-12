import { StyleSheet, View, Text, ScrollView } from "react-native";
import { goldMods, experimentalMods } from "@/assets/mods";

export default function TabTwoScreen() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <Text> Difficulty Modifiers</Text>
      {goldMods.map((mod) => (
        <View key={mod.name} style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{mod.name}</Text>
          <Text style={{ marginTop: 4 }}>{mod.description}</Text>
          <Text style={{ marginTop: 4, color: "gray" }}>
            Difficulty: {mod.difficulty}
          </Text>
        </View>
      ))}
      <Text>Experimental Mods</Text>
      {experimentalMods.map((mod) => (
        <View key={mod.name} style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{mod.name}</Text>
          <Text style={{ marginTop: 4 }}>{mod.description}</Text>
          <Text style={{ marginTop: 4, color: "gray" }}>
            Difficulty: {mod.difficulty}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
