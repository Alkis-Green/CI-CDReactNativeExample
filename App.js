import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Components
import Greetings from "./src/components/Greetings";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CICD example course</Text>
      <StatusBar style="auto" />
      <Greetings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
