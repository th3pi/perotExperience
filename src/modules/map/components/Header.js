import * as React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Title } from "../../../assets/components/pe-components";
import Description from "./Description";

const Header = ({ title, description }) => {
  return (
    <SafeAreaView style={styles.header}>
      <Title title={title} color="white"/>
      <Description text={description} />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight, // Margin required for Android
    marginBottom: 10,
  },
});
