// import React, { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import { Text } from "../../../assets/components/pe-components";
// import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
// import TriviaPopup from "../../trivia/TriviaPopup";
// import APIKit from "../../api_kit/api_kit";

// class TriviaQuestions extends React.Component {
//   constructor(props) {
//     super();

//     this.state = {
//       loading: true,
//       questions: [],
//       visible: false,
//       activeQuestion: undefined,
//     };

//     this.state.loading = false;

//     APIKit.get(
//       `/api/trivia/get-for-sub?subExhibitName=${props.subexhibitName}`
//     ).then((res) => {
//       this.setState({ questions: res.data, loading: false });
//     });
//   }

//   showTriviaQuestion = (visible) => {
//     this.setState({ visible: visible });
//   };

//   activeQuestion = (question) => {
//     this.setState({ activeQuestion: question });
//   };

//   renderItem = ({ item, index }) => {
//     return (
//       <View>
//         <TouchableOpacity
//           style={{ padding: 20, backgroundColor: "lightgrey" }}
//           onPress={() => {
//             this.setState({ visible: true, activeQuestion: item });
//           }}
//         >
//           <Text style={{ fontSize: 30 }}>Question {index + 1}</Text>
//         </TouchableOpacity>
//         <TriviaPopup
//           question={this.state.activeQuestion}
//           visible={this.state.visible}
//           visibilityFunction={this.showTriviaQuestion}
//         />
//       </View>
//     );
//   };

//   render() {
//     return (
//       <View>
//         <FlatList
//           data={this.state.questions}
//           renderItem={this.renderItem}
//           keyExtractor={(item) => item.x}
//         />
//       </View>
//     );
//   }
// }

// export default TriviaQuestions;
