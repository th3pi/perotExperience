import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Appearance,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import {
  Text,
  Header,
  Card,
  SubTitle,
} from "../../assets/components/pe-components";

const Separator = () => <View style={styles.separator} />;

class ShLeadingQuestion extends Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      visible: false,
      shItems: props.route.params.items,
    };
  }

  getFirstItem() {
    return this.state.shItems[0];
  }
  getSecondItem() {
    return this.state.shItems[1];
  }
  getThirdItem() {
    return this.state.shItems[2];
  }

  createListItems() {}

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
            title="Question"
            description="Which one do you like the most?"
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
            <SubTitle text="Pick an option"></SubTitle>
            <View
              style={{
                padding: 5,
                backgroundColor:
                  Appearance.getColorScheme() === "light" ? "white" : "black",
                alignSelf: "flex-start",
                marginHorizontal: 10,
                borderRadius: 5,
                marginVertical: 5,
              }}
            >
              <Text
                style={{
                  color:
                    Appearance.getColorScheme() === "light" ? "black" : "white",
                }}
              >
                You'll get an item assigned for you to hunt based on which
                option you pick from below
              </Text>
            </View>
            {this.state.shItems.map((item, index) => (
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
                      Appearance.getColorScheme() === "light" ? "red" : "black",
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("ShSearchPage", {
                      item: item,
                      allItems: this.state.shItems,
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
                    <Text
                      style={{
                        fontSize: 25,
                        fontFamily: "OpenSans-ExtraBold",
                        color: "white",
                      }}
                    >
                      {item.connection}
                    </Text>
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
  exhibitBackground: {
    height: 300,
  },
});

export default ShLeadingQuestion;
