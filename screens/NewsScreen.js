import { useContext, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);

  const [activeIndex, setActiveIndex] = useState();
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default NewsScreen;
