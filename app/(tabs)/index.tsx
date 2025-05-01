import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
} from "react-native";

export default function DifficultyButtons() {
  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleText}>Full Random</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleText}>Hard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleText}>Custom</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 20,
    backgroundColor: "#C49C17",
  },
  smallContainer: {
    gap: 8,
    padding: 16,

    backgroundColor: "#0B1713",
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F52525",
    padding: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1A1A1A", // very dark grey,
    borderWidth: 2,
    fontSize: 2,
  },
  titleText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace", // temporary default if custom font not added
    textTransform: "uppercase",
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1.5,
  },
});
