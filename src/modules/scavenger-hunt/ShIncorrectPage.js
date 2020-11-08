import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

class ShIncorrectPage extends Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      visible: false,
    };

    this.shData = props.route?.params;
    //this.exhibit = props.route.params;
  }

  printParams() {
    var getTypeXd = this.shData;
    console.log("my obj: ", getTypeXd);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Incorrect</Text>
          <Text style={styles.x}>✗</Text>
        </View>
        <Separator />
        <View>
          <Button
            style={styles.button}
            title="Try Again?"
            color="#000000"
            onPress={() =>
              this.props.navigation.navigate("ShSearchPage", {
                itemData: this.shData,
              })
            }
          />
          <Separator />
          <Button
            style={styles.button}
            title="Show Answer"
            color="#000000"
            onPress={() =>
              this.props.navigation.navigate("ShowAnswer", {
                itemData: this.shData,
              })
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 0,
    backgroundColor: "#EC6464",
  },
  x: {
    textAlign: "center",
    fontSize: 50,
  },
  title: {
    textAlign: "center",
    marginVertical: 25,
    fontSize: 25,
  },
  separator: {
    marginVertical: 25,
    borderBottomColor: "#EC6464",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
});

export default ShIncorrectPage;
