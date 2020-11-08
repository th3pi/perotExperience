import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import ExhibitCarousel from "./components/ExhibitCarousel";
import APIKit from "../api_kit/api_kit";
import { Appearance } from "react-native-appearance";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../../assets/components/pe-components";

class ExhibitScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      featuredExhibits: [],
      allExhibits: [],
      loading: true,
    };
    APIKit.get("/sp/exb/get-featured").then((res) => {
      this.setState({ featuredExhibits: res.data });
      //Gets all the exhibits
      APIKit.get("/sp/exb/get-others").then((res) => {
        this.setState({ otherExhibits: res.data, loading: false });
      });
    });
  }

  render() {
    if (this.state.loading) return null;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.exhibitBackground}
          source={require("../../assets/images/space.jpeg")}
        />
        <View style={{ position: "absolute", height: "100%" }}>
          <Header title="Exhibits" description="Something for everyone" />
          <ScrollView
            contentContainerStyle={{
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              width: Dimensions.get("window").width,
              backgroundColor:
                Appearance.getColorScheme() === "light" ? "white" : "#212121",
            }}
          >
            <ExhibitCarousel
              horizontal={true}
              text="Featured"
              exhibits={this.state.featuredExhibits}
              navigationFunction={this.props.navigation}
            />
            <ExhibitCarousel
              text="Others"
              exhibits={this.state.otherExhibits}
              navigationFunction={this.props.navigation}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ExhibitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "#212121",
  },
  exhibitBackground: {
    height: 300,
  },
});
