import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Header, Text, SubTitle } from "../../assets/components/pe-components";
import { ScrollView } from "react-native-gesture-handler";
import { Appearance } from "react-native-appearance";

function ARScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/space.jpeg")}
        style={{ width: "100%", height: 300 }}
      />
      <View style={{ position: "absolute", height: "100%" }}>
        <Header
          title="Navigation"
          description="Use Augmented Reality to navigate through the museum"
          showExit={true}
          exitMessage="Exit"
          onPressExit={() => {
            props.navigation.goBack();
          }}
        ></Header>
        <ScrollView
          contentContainerStyle={{
            width: Dimensions.get("window").width,
            height: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor:
              Appearance.getColorScheme() === "light" ? "white" : "#212121",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SubTitle text="Coming soon!"></SubTitle>
        </ScrollView>
      </View>
    </View>
  );
}

export default ARScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "#212121",
  },
});
