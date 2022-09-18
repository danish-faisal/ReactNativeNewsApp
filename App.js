import { StatusBar, StyleSheet, Text, View } from "react-native";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
