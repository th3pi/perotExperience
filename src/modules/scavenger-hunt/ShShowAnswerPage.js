import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import React, { Component } from "react";

const getAnswer = () => {
  name = "Ruby"; // hard coding name
  return name; // this needs to return the current items name, newItem.name
};

class ShowAnswer extends Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      visible: false,
      item: props.route.params.item,
    };
  }
  state = {
    count: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              //TODO: NEED TO ADD THIS IMAGE TO DATABSE SCHEMA
              "https://portswigger.net/cms/images/f5/d7/61c1d398bde7-article-main.jpg",
          }}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text>{"\n"}</Text>

        <Text>The correct answer is {this.state.item["answer"]}!</Text>
        <Text>{"\n"}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("ShSearchPage")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
});

export default ShowAnswer;
