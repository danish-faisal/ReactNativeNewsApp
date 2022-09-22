import { useContext } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Context, { NewsContext } from "./API/Context";
import Tabs from "./components/Tabs";

function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282c35" : "white",
      }}
    >
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
