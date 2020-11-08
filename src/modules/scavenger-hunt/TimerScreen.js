import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class TimerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 60 };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 1) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <View style={styles.timerCardComponent}>
        <Text style={styles.timerTextComponent}>{this.state.timer}</Text>
      </View>
    );
  }
}

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  timerCardComponent: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5500FF",
    borderRadius: 12,
    flex: 0.2,
    width: 225,
    marginTop: 40,
    padding: 20,
  },
  timerTextComponent: {
    fontSize: 40,
    color: "white",
    justifyContent: "center",
    textAlignVertical: "center",
    alignItems: "center",
  },
});
