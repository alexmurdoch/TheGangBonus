import { useActiveRoundStore } from "../storage/activeRoundStg";
import { View, Text, TouchableOpacity } from "react-native";

export default function activeRound() {
  const activeMods = useActiveRoundStore((state) => state.activeModifiers);
  return;
}
