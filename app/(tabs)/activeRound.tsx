import { useActiveRoundStore } from "../storage/activeRoundStg";
import { View, Text, TouchableOpacity } from "react-native";

export const activeRound = () => {
  const activeMods = useActiveRoundStore((state) => state.activeModifiers);
};
