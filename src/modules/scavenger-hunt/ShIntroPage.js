import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  ScrollView,
  Dimensions,
  Appearance,
  Image,
} from "react-native";
import {
  Text,
  Card,
  Header,
  SubTitle,
  ImageCaption,
} from "../../assets/components/pe-components";
import Constants from "expo-constants";
import React, { Component } from "react";
import ShLeadingQuestion from "./ShLeadingQuestions";
import APIKit from "../api_kit/api_kit";
import ShLeaderboard from "./ShLeaderboard";
import GlobalState from "../state/GlobalState";

class IntroPage extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
      visible: false,
      shItems: [],
      exhibitName: props.route.params.exhibit.name,
      exhibitImage: props.route.params.exhibit.image,
    };
    this.fetchData();
  }

  fetchData() {
    APIKit.get("/api/sh/get-for-sub", {
      params: { exhibitName: this.state.exhibitName },
    }).then((res) => {
      this.setState({ shItems: res.data[0].items });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"}></StatusBar>
        <ImageBackground
          style={styles.exhibitBackground}
          source={require("../../assets/images/space.jpeg")}
        />
        <View style={{ position: "absolute", height: "100%" }}>
          <Header
            title="Scavenger"
            description="Fun way to explore more!"
            titleStyle={{ fontSize: 15 }}
            showExit={true}
            exitMessage="Exit"
            onPressExit={() => {
              this.props.navigation.goBack();
            }}
          ></Header>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor:
                Appearance.getColorScheme() === "light" ? "white" : "#212121",
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              width: Dimensions.get("window").width,
            }}
          >
            <View style={{ marginHorizontal: 10, marginTop: 5 }}>
              <Card>
                <Image
                  source={{
                    uri:
                      "https://www.teambuildingactivity.com/wp-content/uploads/collaborative-scavenger-hunt-500x500.jpg",
                  }}
                  style={{ height: 200, width: "100%", borderRadius: 10 }}
                />
              </Card>
            </View>
            <Card style={{ margin: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  backgroundColor:
                    Appearance.getColorScheme() === "light" ? "red" : "black",
                }}
                onPress={() =>
                  this.props.navigation.navigate("ShLeadingQuestion", {
                    items: this.state.shItems,
                  })
                }
              >
                <View
                  style={{
                    margin: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/images/race.png")}
                    style={{
                      resizeMode: "contain",
                      width: 40,
                      marginRight: 5,
                      marginBottom: 5,
                      tintColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 25,
                      fontFamily: "OpenSans-ExtraBold",
                      color: "white",
                    }}
                  >
                    Start the hunt!
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
            <Card style={{ margin: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  backgroundColor:
                    Appearance.getColorScheme() === "light" ? "red" : "black",
                }}
                onPress={() => this.props.navigation.navigate("ShLeaderboard")}
              >
                <View
                  style={{
                    margin: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/images/trophy.png")}
                    style={{
                      resizeMode: "contain",
                      width: 30,
                      marginRight: 5,
                      marginBottom: 5,
                      tintColor: "white",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "OpenSans-ExtraBold",
                      color: "white",
                    }}
                  >
                    View Leaderboard
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}

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

export default IntroPage;
