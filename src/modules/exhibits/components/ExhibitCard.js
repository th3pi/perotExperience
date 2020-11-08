import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appearance } from "react-native-appearance";

import { Card, Text } from "../../../assets/components/pe-components";
import { cacheImages } from "../../../assets/components/AssetsLoader";
import { AppLoading } from "expo";
import {
  ActivitiesPill,
  ScorePill,
  AvailableActivitiesPill,
} from "./ActivityPills";

async function _loadAssetsAsync(img) {
  const imageAssets = cacheImages([
    require("../../../assets/images/placeholderHorizontal.png"),
    require("../../../assets/images/placeholderVertical.png"),
  ]);
  await Promise.all([...imageAssets]);
}

const ExhibitCard = (props) => {
  const [loaded, setLoaded] = useState(false);
  if (!loaded)
    return (
      <AppLoading
        startAsync={_loadAssetsAsync(props.cardImage)}
        onFinish={() => {
          setLoaded(true);
        }}
        onError={() => {
          setLoaded(false);
        }}
      ></AppLoading>
    );
  return (
    <Card style={[styles.exhibitCard]}>
      <TouchableOpacity
        onPress={() => {
          props.navigationFunction.navigate("ExhibitPage", {
            exhibit: props.exhibit,
          });
        }}
      >
        <View>
          <Image
            source={
              props.cardImage !== null && props.cardImage !== ""
                ? {
                    uri: props.cardImage,
                  }
                : require("../../../assets/images/placeholderHorizontal.png")
            }
            style={styles.cardImage}
          />
          <Text
            style={[
              styles.cardTitle,
              {
                position: "absolute",
                bottom: 0,

                fontFamily: "OpenSans-Bold",
                paddingHorizontal: 10,
                marginBottom: 5,
                fontSize: 16,
                color: "white",
                backgroundColor: "#212121",
              },
            ]}
          >
            {props.title}
          </Text>
        </View>
        <View
          style={{
            margin: 5,
          }}
        >
          <View style={[{ height: 95 }]}>
            <Text
              style={[
                styles.cardTitle,
                {
                  fontWeight: "400",
                  marginLeft: 5,
                  marginBottom: 5,
                  color:
                    Appearance.getColorScheme() === "light" ? "black" : "white",
                },
              ]}
            >
              {props.description}
            </Text>
          </View>
          {props.horizontal ? (
            <ActivitiesPill done={8} activities={8}></ActivitiesPill>
          ) : (
            <AvailableActivitiesPill></AvailableActivitiesPill>
          )}
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default ExhibitCard;
const styles = StyleSheet.create({
  exhibitCard: {
    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "#212121",

    width: 300,

    marginRight: 15,

    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },

  cardImage: {
    height: 120,
    width: "100%",
  },

  cardTitle: {},
});
