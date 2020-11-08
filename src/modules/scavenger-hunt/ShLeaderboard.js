import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text } from "../../assets/components/pe-components";
import Leaderboard from "react-native-leaderboard";
import APIKit from "../api_kit/api_kit";

export default class ShLeaderboard extends Component {
  code = "Koala5321";
  data2 = [];

  state = {
    data: [],
    data1: [],
    pos_code: 0,
    score: 0,
  };

  UNSAFE_componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    APIKit.get("/api/leader-board/sh/get-all").then((res) => {
      this.setState({ data1: res.data });

      for (i in this.state.data1) {
        if (this.state.data1[i].username == this.code) {
          this.setState({ pos_code: ++i });
          this.setState({ score: this.state.data1[--i].score });
        }

        let data2 = this.state.data1.slice(0, 10);
        this.setState({ data: data2 });
      }
    });
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: "row", backgroundColor: "#119abf" }}>
          <TouchableOpacity
            style={styles.pos}
            activeOpacity={0.5}
            onPress={() => this.fetchData()}
          >
            <Image
              style={styles.refresh}
              source={require("../../assets/images/refresh.png")}
            />
          </TouchableOpacity>

          <Text style={styles.sep}> </Text>

          <TouchableOpacity
            style={styles.pos}
            activeOpacity={0.5}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Image
              style={styles.exit}
              source={require("../../assets/images/wrong.png")}
            />
          </TouchableOpacity>
          <Text style={styles.sepvert}> </Text>
        </View>
        {this.renderHeader()}
        <Leaderboard data={this.state.data} sortBy="score" labelBy="username" />
      </View>
    );
  }

  renderHeader() {
    return (
      <View
        colors={[, "#1da2c6", "#1695b7"]}
        style={{
          backgroundColor: "#119abf",
          padding: 0,
          paddingTop: 0,
          alignItems: "center",
        }}
      >
        <Text style={{ paddingTop: 0, fontSize: 30, color: "white" }}>
          Leaderboard
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              flex: 1,
              textAlign: "right",
              marginRight: 40,
            }}
          >
            76th
          </Text>

          <Image
            style={styles.separator}
            source={require("../../assets/images/koala.png")}
          />

          <Text
            style={{ color: "white", fontSize: 25, flex: 1, marginLeft: 30 }}
          >
            100pts
          </Text>
        </View>
      </View>
    );
  }
}

const ordinal_suffix_of = (i) => {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 15,
    borderBottomColor: "#c92031",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 0.9,
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
  sep: {
    marginHorizontal: 150,
  },
  sepvert: {
    marginHorizontal: 95,
  },
  pos: {
    flexDirection: "row",
    paddingTop: 30,
  },

  exit: {
    marginTop: 10,
    height: 25,
    width: 25,
    resizeMode: "contain",
    tintColor: "white",
  },
  refresh: {
    marginLeft: 10,
    marginTop: 10,
    height: 25,
    width: 25,
    resizeMode: "contain",
    tintColor: "white",
  },
});
