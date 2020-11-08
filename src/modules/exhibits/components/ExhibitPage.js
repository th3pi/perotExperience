import * as React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Header,
  SubTitle,
  Card,
  ImageCaption,
} from "../../../assets/components/pe-components";
import { AppLoading } from "expo";
import { Appearance } from "react-native-appearance";
import APIKit from "../../api_kit/api_kit";
import { ScrollView } from "react-native-gesture-handler";

class ExhibitPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      visible: false,
      exhibit: props.route.params.exhibit,
      trivia: [],
    };

    this.fetchTrivia();
  }

  //Checks if mounted.
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.setState({ loading: false });
      this.setState({ exhibit: this.props.route.params.exhibit });
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  updateVisible = (visible) => {
    this.setState({ visible: visible });
  };

  fetchTrivia() {
    APIKit.get("/api/trivia/get-for-exb", {
      params: { exhibitName: this.state.exhibit.name },
    }).then((res) => {
      this.setState({ trivia: res.data });
    });
  }

  render() {
    if (this.state.loading == true) return <AppLoading></AppLoading>;
    //Get the exhibit object information.
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"}></StatusBar>
        <ImageBackground
          style={styles.exhibitBackground}
          source={require("../../../assets/images/space.jpeg")}
        />
        <View style={{ position: "absolute", height: "100%" }}>
          <Header
            title="Activities"
            description={this.state.exhibit.title}
            showExit={true}
            exitMessage="Exit"
            onPressExit={() => {
              this.props.navigation.goBack();
            }}
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
            {/* Introduction */}
            <SubTitle text="At a glance"></SubTitle>
            <View style={{ marginHorizontal: 10 }}>
              <Card>
                <Image
                  source={{ uri: this.state.exhibit.image }}
                  style={{ height: 200, width: "100%", borderRadius: 10 }}
                />
                <ImageCaption style={{ fontSize: 15 }}>
                  {this.state.exhibit.description}
                </ImageCaption>
              </Card>
            </View>

            {/* Buttons */}
            <SubTitle text="Games" />
            <Card style={{ margin: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  backgroundColor:
                    Appearance.getColorScheme() === "light" ? "red" : "black",
                }}
                onPress={() => {
                  this.props.navigation.navigate("TriviaScreen", {
                    trivia: this.state.trivia,
                  });
                }}
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
                    source={require("../../../assets/images/idea.png")}
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
                      fontSize: 25,
                      fontFamily: "OpenSans-ExtraBold",
                      color: "white",
                    }}
                  >
                    Trivia
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
            <Card style={{ margin: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    Appearance.getColorScheme() === "light" ? "red" : "black",
                  borderRadius: 10,
                }}
                onPress={() => {
                  this.props.navigation.navigate("ShStackScreen", {
                    screen: "IntroPage",
                    params: {
                      exhibit: this.state.exhibit,
                    },
                  });
                }}
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
                    source={require("../../../assets/images/search.png")}
                    style={{
                      resizeMode: "contain",
                      width: 30,
                      marginRight: 5,
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
                    Scavenger Hunt
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
            <Card style={{ margin: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    Appearance.getColorScheme() === "light" ? "red" : "black",
                  borderRadius: 10,
                }}
                onPress={() => {
                  this.props.navigation.navigate("ARScreen");
                }}
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
                    source={require("../../../assets/images/augmented-reality.png")}
                    style={{
                      resizeMode: "contain",
                      width: 30,
                      marginRight: 5,
                      tintColor: "white",
                    }}
                  />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        fontFamily: "OpenSans-ExtraBold",
                        color: "white",
                      }}
                    >
                      AR Navigation
                    </Text>
                    <Text style={{ color: "white" }}>Coming soon</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ExhibitPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "#212121",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    width: 240,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginTop: 25,
  },
  buttonContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
  },
  exhibitBackground: {
    height: 300,
  },
});
