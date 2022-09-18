import { useContext } from "react";
import { View, Text } from "react-native";
import { NewsContext } from "../API/Context";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);

  return (
    <View>
      <Text>News</Text>
    </View>
  );
};

export default NewsScreen;
