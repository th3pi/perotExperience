import * as React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

const Description = (props) => {
  return (
    <View style={styles.description}>
      <Text style={styles.descriptionText}>{props.text}</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  description: {
    flexDirection: "row",
    marginBottom: 8,
    marginLeft: 10,
  },
  descriptionText: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "serif",
    color: "white",
  },
});
