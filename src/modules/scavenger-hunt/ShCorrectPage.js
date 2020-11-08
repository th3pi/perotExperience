import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Alert,
  Image,
  TouchableOpacity,
  Appearance,
  Dimensions,
} from "react-native";
import GlobalState from "../state/GlobalState";
import APIKit from "../api_kit/api_kit";
import { Text, Card } from "../../assets/components/pe-components";

const Separator = () => <View style={styles.separator} />;

class ShCorrectPage extends Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      visible: false,
      item: props.route.params.item,
      feedback: props.route.params.feedback,
    };
  }

  addCurrentQuestionToBackend() {
    APIKit.put("/users/add-sh-answered", {
      username: GlobalState.state.state.username,
      shItemId: this.state.item["_id"],
    }).then(() => {
      this.props.navigation.navigate("ShSearchPage", {
        item: this.state.shItemId,
        feedback: this.state.feedback,
      });
    });
  }
  render() {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: this.state.feedback ? "green" : "red" },
        ]}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.title}>
            {this.state.feedback ? "Correct!" : "Incorrect!"}
          </Text>
          <Image
            source={require("../../assets/images/correct.png")}
            style={{ tintColor: "white" }}
          />
          <Text style={styles.title}>
            {this.state.feedback ? "+100 Points" : "+0 Points"}
          </Text>
        </View>
        <View>
          <Card style={{ margin: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                backgroundColor:
                  Appearance.getColorScheme() === "light" ? "red" : "black",
              }}
              onPress={() => {
                this.addCurrentQuestionToBackend();
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
                  source={require("../../assets/images/search.png")}
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
                  Next Item
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
          {this.state.feedback === false ? (
            <TouchableOpacity
              style={{
                borderRadius: 10,
              }}
              onPress={() => {
                this.state.feedback;
                this.props.navigation.navigate("ShSearchPage", {
                  item: this.state.shItemId,
                  feedback: this.state.feedback,
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
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "OpenSans-ExtraBold",
                    color: "white",
                  }}
                >
                  Try again
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    marginHorizontal: 0,
    backgroundColor: "#008000",
  },
  check: {
    color: "#000000",
    textAlign: "center",
    fontSize: 50,
  },
  title: {
    textAlign: "center",
    marginVertical: 25,
    fontSize: 25,
    color: "white",
    fontFamily: "OpenSans-Bold",
  },
  separator: {
    marginVertical: 25,
    borderBottomColor: "#008000",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ShCorrectPage;
