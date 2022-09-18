import { StatusBar, StyleSheet, Text, View } from "react-native";
import Context from "./API/Context";
import Tabs from "./components/Tabs";

function App() {
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

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
