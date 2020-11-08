import * as React from "react";
import { Text, SubTitle } from "../../assets/components/pe-components";
import { SafeAreaView, View } from "react-native";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { Wave } from "react-native-animated-spinkit";
import APIKit from "../api_kit/api_kit";
import { Appearance } from "react-native-appearance";
import GlobalState from "../state/GlobalState";

class OnboardingScreen extends React.Component {
  constructor(props) {
    super(props);
    GlobalState.state = this;
    this.state = {
      loading: true,
      username: uniqueNamesGenerator({
        dictionaries: [colors, animals],
        length: 2,
        separator: "",
        style: "capital",
      }),
      loadingMessage: "Created a fun name!",
      user: null,
      allExhibits: [],
      featuredExhibits: [],
      recommendedExhibits: [],
      currentExhibit: 0,
    };
    this.generateUser().then((res) => {
      this.setState({ user: res.data });
      this.getRecommendedExhibits().then((res) => {
        this.setState({ recommendedExhibits: res.data });
      });
      this.getExhibits().then((res) => {
        this.setState({ allExhibits: res.data });
        this.setState({
          featuredExhibits: res.data.filter((exhibit) => exhibit.featured),
        });
        GlobalState.state.setState({ user: this.state.user });
        GlobalState.state.setState({
          currentExhibit: this.state.currentExhibit,
        });
        this.loadingMessageMutator();
      });
    });
  }
  async generateUser() {
    let user = await APIKit.post("/users/create", {
      username: this.state.username,
      triviaScore: 0,
      shScore: 0,
    });
    return user;
  }

  async getExhibits() {
    let exhibits = await APIKit.get("/sp/exb/get-all");
    return exhibits;
  }

  async getRecommendedExhibits() {
    let recommendedExhibits = await APIKit.get("/sp/exb/get-recommended");
    return recommendedExhibits;
  }

  loadingMessageMutator() {
    setTimeout(() => {
      this.props.navigation.navigate("BottomTabs", {
        user: this.state.user,
        allExhibits: this.state.allExhibits,
        featuredExhibits: this.state.featuredExhibits,
        recommendedExhibits: this.state.recommendedExhibits,
        currentExhibit: this.state.currentExhibit,
      });
    }, 2600);
    setTimeout(() => {
      this.setState({ loadingMessage: "Preparing the Rocket..." });
    }, 1800);
    setTimeout(() => {
      this.setState({ loadingMessage: "Alerting the dinosaurs..." });
    }, 1000);
    setTimeout(() => {
      this.setState({ loadingMessage: "Rewriting history..." });
    }, 600);
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:
            Appearance.getColorScheme() === "light" ? "white" : "#212121",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "OpenSans-Bold",
              color:
                Appearance.getColorScheme() === "light" ? "black" : "white",
            }}
          >
            Hello,{" "}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "OpenSans-Bold",
              color:
                Appearance.getColorScheme() === "light" ? "black" : "white",
            }}
          >
            {this.state.username}
          </Text>
        </View>
        <Wave size={80} color="red" />
        <Text
          style={{
            fontSize: 20,
            marginTop: 15,
            color: Appearance.getColorScheme() === "light" ? "black" : "white",
          }}
        >
          {this.state.loadingMessage}
        </Text>
      </SafeAreaView>
    );
  }
}

export default OnboardingScreen;
