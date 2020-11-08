import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
  Appearance,
} from "react-native";
import { Text, Card, Header } from "../../assets/components/pe-components";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import APIKit from "../api_kit/api_kit";
import GlobalState from "../state/GlobalState";

export default class TriviaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trivia: props.route.params.trivia,
      triviaCorrect: [],
      triviaIncorrect: [],
    };
  }

  colorPalette = (index) => {
    let colors = [
      "#446DF6",
      "#4d7ea8",
      "#e08e45",
      "#1b1b3a",
      "#c33c54",
      "#4e5340",
      "#4281a4",
      "#a5402d",
      "#721121",
    ];
    return colors[index];
  };

  // Get result from TriviaPopup
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      APIKit.get("/users/get", {
        params: { username: GlobalState.state.state.username },
      }).then((res) => {
        this.setState({ triviaCorrect: res.data.triviaCorrect });
        this.setState({ triviaIncorrect: res.data.triviaIncorrect });
      });
    });
  }

  // Unsubscribe listener and resubscribe when navigated back to TriviaScreen from TriviaPopup to update
  componentWillUnmount() {
    this._unsubscribe();
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
            title="Trivia"
            description="Fun way to learn more"
            showExit={true}
            exitMessage="Exit"
            onPressExit={() => {
              this.props.navigation.goBack();
            }}
          ></Header>

          {/* Body */}
          <ScrollView
            contentContainerStyle={{
              backgroundColor:
                Appearance.getColorScheme() === "light" ? "white" : "#212121",
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              width: Dimensions.get("window").width,
            }}
          >
            {/* Leaderboard button */}
            <Card style={{ marginHorizontal: 10 }}>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 5,
                  flexDirection: "row",
                  backgroundColor:
                    Appearance.getColorScheme() === "light" ? "white" : "black",
                  borderRadius: 10,
                  padding: 5,
                }}
                onPress={() => {
                  this.props.navigation.navigate("TLeaderboard");
                }}
              >
                <Image
                  source={require("../../assets/images/trophy.png")}
                  style={{
                    resizeMode: "contain",
                    width: 20,
                    height: 20,
                    marginRight: 5,
                    tintColor:
                      Appearance.getColorScheme() === "light"
                        ? "black"
                        : "white",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "OpenSans-Bold",
                    fontSize: 18,
                    textShadowColor: "black",
                    textShadowRadius: 0.5,
                    color:
                      Appearance.getColorScheme() === "light"
                        ? "black"
                        : "white",
                  }}
                >
                  View Leaderboard
                </Text>
              </TouchableOpacity>
            </Card>

            {/* Trivia Cards */}
            {this.state.trivia.map((t, index) => (
              <Card key={t.tId} style={{}}>
                <TouchableOpacity
                  disabled={
                    this.state.triviaCorrect.includes(t.tId) ||
                    this.state.triviaIncorrect.includes(t.tId)
                  }
                  onPress={() => {
                    this.props.navigation.navigate("TriviaPopup", {
                      trivia: t,
                    });
                  }}
                >
                  <View
                    style={{
                      backgroundColor: this.state.triviaCorrect.includes(t.tId)
                        ? "green"
                        : this.state.triviaIncorrect.includes(t.tId)
                        ? "red"
                        : this.colorPalette(index),
                      paddingVertical: 10,
                      borderRadius: 10,
                      margin: 5,
                      width: Dimensions.get("window").width - 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <View style={styles.row}>
                        <Text style={styles.title}>{index + 1}</Text>
                        <Text
                          style={[
                            styles.text,
                            { fontFamily: "OpenSans-ExtraBold" },
                          ]}
                        >
                          Tap to reveal
                        </Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.title}>Near</Text>
                        <Text style={styles.text}>{t.subExhibitTitle}</Text>
                      </View>
                    </View>
                    <View style={styles.scoreContainer}>
                      {this.state.triviaCorrect.includes(t.tId) ? (
                        <Image
                          source={require("../../assets/images/correct.png")}
                          style={styles.result}
                        ></Image>
                      ) : this.state.triviaIncorrect.includes(t.tId) ? (
                        <Image
                          source={require("../../assets/images/wrong.png")}
                          style={styles.result}
                        ></Image>
                      ) : (
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={styles.result}
                        ></Image>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </Card>
            ))}
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
  card: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width,
  },
  row: { flexDirection: "row", marginLeft: 5, marginVertical: 5 },
  title: {
    fontFamily: "OpenSans-Bold",
    width: 75,
    fontSize: 16,
    color: "white",
    textAlign: "center",
    textShadowRadius: 2,
    textShadowColor: "white",
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
    color: "white",
    textAlign: "auto",
  },
  scoreContainer: {
    marginRight: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 10,
  },
  score: {
    color: "white",
    fontFamily: "OpenSans-Bold",
  },
  result: {
    resizeMode: "contain",
    width: 25,
    height: 25,
    tintColor: "white",
  },
  exhibitBackground: {
    height: 300,
  },
});
