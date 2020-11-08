import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 50
    }
});
