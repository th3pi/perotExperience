import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import IntroPage from "../scavenger-hunt/ShIntroPage";

function ProgramScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Scavenger Hunt Navigation"
        onPress={() => navigation.navigate("IntroPage")}
      />
    </View>
  );
}

export default ProgramScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
