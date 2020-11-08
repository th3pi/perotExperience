import * as React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import ExhibitCard from "./ExhibitCard";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";
import { Appearance } from "react-native-appearance";
import { SubTitle } from "../../../assets/components/pe-components";
const ExhibitCarousel = ({
  text,
  exhibits,
  horizontal,
  color,
  navigationFunction,
}) => {
  return (
    <View>
      <SubTitle
        color={Appearance.getColorScheme() === "light" ? color : "#fff"}
        text={text}
      ></SubTitle>
      <Carousel
        layout={"default"}
        containerCustomStyle={{ flexGrow: 1 }}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={300}
        data={exhibits}
        firstItem={1}
        renderItem={({ item: exhibit }) => (
          <ExhibitCard
            exhibit={exhibit}
            cardImage={exhibit.image}
            title={exhibit.title}
            horizontal={horizontal}
            description={exhibit.description}
            keyExtractor={(item) => item.name}
            navigationFunction={navigationFunction}
            navigationEndpoint={exhibit}
          ></ExhibitCard>
        )}
      />
    </View>
  );
};

export default ExhibitCarousel;
