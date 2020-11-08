import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const Subtitle = (props) => {
  return (
    <View style={{ flexDirection: "row", height: 40, marginLeft: 10 }}>
      <Text
        style={{
          color: "#ff4000",
          fontWeight: "700",
          fontSize: 35,
        }}
      >
        [
      </Text>
      <Text
        style={{
          fontSize: 30,
          height: 30,
          alignSelf: "center",
          color: props.color,
        }}
      >
        {props.text}
      </Text>
      <Text
        style={{
          color: "#ff4000",
          fontWeight: "700",
          fontSize: 35,
        }}
      >
        ]
      </Text>
    </View>
  );
};

export default Subtitle;
