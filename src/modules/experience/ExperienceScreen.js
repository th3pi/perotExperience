import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Appearance } from "react-native-appearance";

import {
  Text,
  Header,
  Card,
  SubTitle,
} from "../../assets/components/pe-components";
import { ScrollView } from "react-native-gesture-handler";
import APIKit from "../api_kit/api_kit";
import { AppLoading } from "expo";
import GlobalState from "../state/GlobalState";

export default class ExperienceScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
      user: null,
      recommendedExhibits: [],
    };
    this.fetchAll();
  }
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.fetchAll();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  fetchAll() {
    APIKit.get("/sp/exb/get-recommended").then((res) => {
      this.setState({ recommendedExhibits: res.data, loading: false });
      APIKit.get("/users/get", {
        params: { username: GlobalState.state.state.username },
      }).then((res) => {
        this.setState({ user: res.data });
      });
    });
  }

  updateExhibitsVisited(exhibitName) {
    APIKit.put("/users/add-exhibits-visited", {
      username: this.state.user.username,
      exhibitName: exhibitName,
    }).then(() => {});
  }

  render() {
    if (this.state.loading) return <AppLoading></AppLoading>;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"}></StatusBar>
        <ImageBackground
          style={styles.exhibitBackground}
          source={require("../../assets/images/space.jpeg")}
        />
        <View style={{ position: "absolute", height: "100%" }}>
          <Header
            title="Experience"
            description="Recommended route for your adventure"
          ></Header>
          <ScrollView
            contentContainerStyle={{
              backgroundColor:
                Appearance.getColorScheme() === "light" ? "white" : "#212121",
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              width: Dimensions.get("window").width,
            }}
          >
            <SubTitle
              text={
                GlobalState.state.state.currentExhibit == 0
                  ? "Start at"
                  : "Exploring"
              }
              color={
                Appearance.getColorScheme() === "light" ? "black" : "white"
              }
            ></SubTitle>

            {/* Current exhibit */}
            <Card style={{ marginBottom: 5, marginHorizontal: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  this.updateExhibitsVisited(
                    GlobalState.state.state.recommendedExhibits[
                      GlobalState.state.state.currentExhibit
                    ].name
                  );
                  this.props.navigation.navigate("ExhibitPage", {
                    exhibit:
                      GlobalState.state.state.recommendedExhibits[
                        GlobalState.state.state.currentExhibit
                      ],
                  });
                }}
              >
                <Image
                  source={{
                    uri:
                      GlobalState.state.state.recommendedExhibits[
                        GlobalState.state.state.currentExhibit
                      ].image,
                  }}
                  style={{
                    height: 180,
                    width: "100%",
                    borderRadius: 10,
                  }}
                ></Image>
                <View style={{ top: 10, position: "absolute" }}>
                  <Text
                    style={{
                      backgroundColor: "#212121",
                      color: "white",
                      fontSize: 20,
                      paddingRight: 4,
                      paddingLeft: 4,
                      paddingVertical: 3,
                    }}
                  >
                    {
                      GlobalState.state.state.recommendedExhibits[
                        GlobalState.state.state.currentExhibit
                      ].title
                    }
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>

            {/* Non-current exhibits */}

            <SubTitle
              text="Up next"
              color={
                Appearance.getColorScheme() === "light" ? "black" : "white"
              }
            ></SubTitle>
            {GlobalState.state.state.recommendedExhibits.map((exhibit, index) =>
              index !== GlobalState.state.state.currentExhibit ? (
                <Card
                  key={exhibit.name}
                  style={{
                    margin: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.updateExhibitsVisited(
                        GlobalState.state.state.recommendedExhibits[index].name
                      );
                      this.props.navigation.navigate("ExhibitPage", {
                        exhibit:
                          GlobalState.state.state.recommendedExhibits[index],
                      });
                    }}
                  >
                    <Image
                      source={{ uri: exhibit.image }}
                      style={{
                        height: 180,
                        width: "100%",
                        borderRadius: 10,
                      }}
                    ></Image>
                    <View style={{ top: 10, position: "absolute" }}>
                      <Text
                        style={{
                          backgroundColor: "#212121",
                          color: "white",
                          fontSize: 20,
                          paddingRight: 4,
                          paddingLeft: 4,
                          paddingVertical: 3,
                        }}
                      >
                        {exhibit.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              ) : null
            )}
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
