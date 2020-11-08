import React, { useState, Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  Dimensions,
  Appearance,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Text,
  Header,
  Card,
  SubTitle,
} from "../../assets/components/pe-components";
import ShowAnswer from "./ShShowAnswerPage";
import APIKit from "../api_kit/api_kit";
import GlobalState from "../state/GlobalState";

const Separator = () => <View style={styles.separator} />;

const Hint1 = (hintParam, props) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <View>
      <Button
        onPress={() => {
          setIsClicked(false);
        }}
        disabled={!isClicked}
        title={isClicked ? "Hint 1" : hintParam.hintParam}
      />
    </View>
  );
};
const Hint2 = (hintParam, props) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <View>
      <Button
        onPress={() => {
          setIsClicked(false);
        }}
        disabled={!isClicked}
        title={isClicked ? "Hint 2" : hintParam.hintParam}
      />
    </View>
  );
};
const Hint3 = (hintParam, props) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <View>
      <Button
        onPress={() => {
          setIsClicked(false);
        }}
        disabled={!isClicked}
        title={isClicked ? "Hint 3" : hintParam.hintParam}
      />
    </View>
  );
};

class ShSearchPage extends Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      visible: false,
      item: props.route.params.item,
      answered: [],
      allItems: props.route.params.allItems,
    };
    this.getUserSh();
  }

  getUserSh() {
    APIKit.get("/users/get", {
      params: {
        username: GlobalState.state.state.username,
      },
    }).then((res) => {
      this.setState({ answered: res.data.shItemsAnswered });
      if (this.props.route.params.feedback !== undefined) {
        this.checkItem();
      }
    });
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.getUserSh();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  checkItem() {
    this.state.allItems.forEach((item) => {
      if (!this.state.answered.includes(item["_id"])) {
        this.setState({ item: item });
      }
    });
  }

  addCurrentQuestionToBackend() {
    APIKit.put("/users/add-sh-answered", {
      username: GlobalState.state.state.username,
      shItemId: this.state.item["_id"],
    }).then(() => {
      this.props.navigation.navigate("ShowAnswer", {
        item: this.state.item,
      });
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
            title="Hunt"
            description="Use the hints to aid your hunt"
            titleStyle={{ fontSize: 15 }}
            showExit={true}
            exitMessage="Exit"
            onPressExit={() => {
              this.props.navigation.goBack();
            }}
          />
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
            <SubTitle text={this.state.item.question}></SubTitle>

            {this.state.item.hints.map((hint, index) => (
              <Card
                style={{ marginVertical: 5, marginHorizontal: 10 }}
                key={index}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    paddingVertical: 10,
                    backgroundColor:
                      Appearance.getColorScheme() === "light"
                        ? "white"
                        : "black",
                  }}
                  onPress={() => {}}
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
                        fontSize: 25,
                        fontFamily: "OpenSans-ExtraBold",
                        color:
                          Appearance.getColorScheme() === "light"
                            ? "black"
                            : "white",
                      }}
                    >
                      {hint}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
            ))}

            <Card style={{ marginVertical: 5, marginHorizontal: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingVertical: 10,
                  backgroundColor:
                    Appearance.getColorScheme() === "light" ? "red" : "black",
                }}
                onPress={() => {
                  this.props.navigation.navigate("ShQRCode", {
                    item: this.state.item,
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
                    source={require("../../assets/images/qr.png")}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: "contain",
                      tintColor: "white",
                      marginRight: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 25,
                      fontFamily: "OpenSans-ExtraBold",
                      color: "white",
                    }}
                  >
                    Scan QR
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
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View>
//           <Text style={styles.instructionsTitle}>Item Prompt:</Text>
//           <Text style={styles.instructions}>{this.state.item.question}</Text>
//           <Hint1 hintParam={this.state.item.hints[0]} />
//           <Separator />
//           <Hint2 hintParam={this.state.item.hints[1]} />
//           <Separator />
//           <Hint3 hintParam={this.state.item.hints[2]} />
// <View style={styles.lowerButtons}>
//   <Button
//     title="Scan QR"
//     color="#00BFFF"
//     onPress={() =>

//     }
//   />
// </View>

//           <View style={styles.lowerButtons}>
//             <Button
//               title="Show Answer"
//               color="#00BFFF"
//               onPress={() => {
//                 this.addCurrentQuestionToBackend();
//               }}
//             />
//             <Button
//               title="forLoopComapreStuff"
//               color="#00BFFF"
//               onPress={() => this.parseQuestionsAndCompareToOnesAnswered()}
//             />
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

const styles = StyleSheet.create({
  instructionsTitle: {
    textAlign: "left",
    marginVertical: 10,
    fontSize: 25,
  },
  instructions: {
    textAlign: "left",
    marginVertical: 2,
    fontSize: 15,
  },
  lowerButtons: {
    marginVertical: 10,
    padding: 16,
    borderRadius: 3,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  timerTopStyle: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "#212121",
  },
  exhibitBackground: {
    height: 300,
  },
});

export default ShSearchPage;
