import React from "react";
import { View, Image } from "react-native";
import { Appearance } from "react-native-appearance";
import {
    Text,
    BracketText,
  } from "../../../assets/components/pe-components";

const ActivitiesPill = (props) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "red",
          paddingVertical: 10,
          borderRadius: 10,
          shadowRadius: 5,
          backgroundColor:
            Appearance.getColorScheme() === "light" ? "whitesmoke" : "#000",
        }}
      >
        {props.activities !== props.done ? (
          <Image
            source={require("../../../assets/images/circle.png")}
            style={{
              width: 20,
              height: 20,
              marginLeft: 5,
              marginTop: 3,
              tintColor: "red",
            }}
          />
        ) : (
          <Image
            source={require("../../../assets/images/check.png")}
            style={{
              width: 20,
              height: 20,
              marginLeft: 5,
              marginTop: 3,
            }}
          />
        )}

        <Text
          style={{
            fontSize: 14,
            marginLeft: 5,
            marginTop: 3,
            flex: 5,
            color: Appearance.getColorScheme() === "light" ? "black" : "white",
          }}
        >
          {" "}
          Activities completed
        </Text>
        <BracketText
          bracketSize={18}
          textSize={16}
          text={props.done + "/" + props.activities}
          style={{ marginLeft: 5, flex: 1 }}
          textStyle={{
            color: Appearance.getColorScheme() === "light" ? "black" : "white",
          }}
        ></BracketText>
      </View>
    );
  };

  const AvailableActivitiesPill = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "red",
          paddingVertical: 10,
          borderRadius: 10,
          shadowRadius: 5,
          backgroundColor:
            Appearance.getColorScheme() === "light" ? "whitesmoke" : "#000",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            marginLeft: 5,
            marginTop: 3,
            flex: 5,
            color: Appearance.getColorScheme() === "light" ? "black" : "white",
          }}
        >
          Available activities
        </Text>
        <BracketText
          bracketSize={18}
          textSize={16}
          text="0/8"
          style={{ marginLeft: 5, flex: 1 }}
          textStyle={{
            color: Appearance.getColorScheme() === "light" ? "black" : "white",
          }}
        ></BracketText>
      </View>
    );
  };

  const ScorePill = (props) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "red",
          paddingVertical: 10,
          borderRadius: 10,
          shadowRadius: 5,
          backgroundColor: "whitesmoke",
        }}
      >
        <Image
          source={require("../../../assets/images/circle.png")}
          style={{
            width: 20,
            height: 20,
            marginLeft: 5,
            marginTop: 3,
            tintColor: "red",
          }}
        />
        <Text style={{ fontSize: 14, marginLeft: 5, marginTop: 3, flex: 5 }}>
          {" "}
          {props.activities === props.done
            ? "Completed!"
            : "Activities completed"}
        </Text>
        <BracketText
          bracketSize={18}
          textSize={16}
          text="0/8"
          style={{ marginLeft: 5, flex: 1 }}
        ></BracketText>
      </View>
    );
  };

export { ActivitiesPill, ScorePill, AvailableActivitiesPill };