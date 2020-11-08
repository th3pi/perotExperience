import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Appearance,
  Animated,
} from "react-native";
import {
  Title,
  Text,
  Card,
  SubTitle,
} from "../../assets/components/pe-components";
import GlobalState from "../state/GlobalState";
import APIKit from "../api_kit/api_kit";

class TriviaPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.route.params.trivia.question,
      responses: props.route.params.trivia.responses,
      answer: props.route.params.trivia.correct,
      subExhibitTitle: props.route.params.trivia.subExhibitTitle,
      feedback: null,
      done: false,
      timer: 60,
      bgColor: Appearance.getColorScheme() === "light" ? "white" : "black",
      rightColor: "green",
      wrongColor: "red",
    };
    this.Animation = new Animated.Value(0);
  }
  checkAnswer(response) {
    if (response == this.state.answer) {
      this.setState({ feedback: true });
      this.changeBackground(this.state.feedback);
      APIKit.put("/users/add-trivia-correct", {
        username: GlobalState.state.state.username,
        tId: this.props.route.params.trivia.tId,
      }).then((res) => {
        setTimeout(() => {
          this.props.navigation.navigate("TriviaScreen", {
            trivia: this.props.route.params.trivia,
          });
        }, 1000);
      });
    } else {
      this.setState({ feedback: false });
      // If wrong go back to TriviaScreen
      // And update database
      APIKit.put("/users/add-trivia-incorrect", {
        username: GlobalState.state.state.username,
        tId: this.props.route.params.trivia.tId,
      }).then((res) => {
        setTimeout(() => {
          this.props.navigation.navigate("TriviaScreen", {
            trivia: this.props.route.params.trivia,
          });
        }, 1000);
      });
    }

    // Change timer background color based on feedback
    this.changeBackground(this.state.feedback);
  }
  changeBackground() {
    this.Animation.setValue(0);
    Animated.timing(this.Animation, {
      toValue: 1,
      duration: 450,
      useNativeDriver: false,
    }).start();
  }
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("blur", () => {
      clearInterval(this.interval);
    });
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer - 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    var bgColor = this.Animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        "rgba(0,0,0,.4)",
        this.state.feedback ? "green" : "#ff4000",
      ],
    });
    return (
      <Animated.View style={[styles.container]}>
        <ImageBackground
          style={styles.exhibitBackground}
          source={require("../../assets/images/space.jpeg")}
        />
        {/* Header */}
        <View
          style={{
            position: "absolute",
            height: "100%",
          }}
        >
          <SafeAreaView
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 50,
                  color: "white",
                  fontFamily: "OpenSans-ExtraBold",
                }}
              >
                Trivia
              </Text>
              <Text style={{ color: "white", fontSize: 16 }}>
                Answer before the timer ends!
              </Text>
            </View>
          </SafeAreaView>

          {/* Body */}
          <View
            style={{
              backgroundColor:
                Appearance.getColorScheme() === "light" ? "white" : "black",
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              width: Dimensions.get("window").width,
            }}
          >
            {/* Question */}
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "#212121",
                  alignSelf: "flex-start",
                  marginTop: 10,
                  borderRadius: 5,
                  padding: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Bold",
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  {this.state.question}
                </Text>
              </View>
            </View>

            {/* Location hint */}
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text
                style={{
                  color:
                    Appearance.getColorScheme() === "light" ? "black" : "white",
                }}
              >
                Find out more near{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  color:
                    Appearance.getColorScheme() === "light" ? "black" : "white",
                }}
              >
                {this.state.subExhibitTitle}
              </Text>
            </View>

            {/* Timer and feedback */}
            <Animated.View
              style={{
                backgroundColor: bgColor,
                marginTop: 10,
                borderRadius: 10,
                padding: 5,
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 40,
                  color: "white",
                }}
              >
                {this.state.feedback === null
                  ? this.state.timer
                  : this.state.feedback
                  ? "+200 points"
                  : "Wrong"}
              </Text>
              <Text style={{ color: "white", fontFamily: "OpenSans-Bold" }}>
                {this.state.feedback === null
                  ? "seconds left"
                  : this.state.feedback
                  ? "Good job!"
                  : "Try again"}
              </Text>
            </Animated.View>

            {/* Responses */}
            {this.state.responses.map((response, index) => (
              <Card key={index}>
                <TouchableOpacity
                  disabled={this.state.feedback !== null}
                  onPress={() => {
                    this.checkAnswer(response);
                  }}
                >
                  <View
                    style={[
                      styles.card,
                      { opacity: this.state.feedback !== null ? 0.6 : 1 },
                    ]}
                  >
                    <Text style={styles.response}>{response}</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            ))}
            <TouchableOpacity
              style={{
                marginTop: 5,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 5,
                padding: 3,
                alignSelf: "center",
              }}
              onPress={() => {
                this.props.navigation.navigate("TriviaScreen", {
                  tId: this.state.feedback,
                });
              }}
            >
              <Text style={{ color: "white", padding: 2, fontSize: 15 }}>
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
  }
}

export default TriviaPopup;

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "black",
  },
  questionText: {
    fontSize: 30,
  },
  card: {
    backgroundColor: "#446DF6",
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  response: {
    fontSize: 20,
    color: "white",
    fontFamily: "OpenSans-Bold",
  },
  exhibitBackground: {
    height: 300,
  },
});
