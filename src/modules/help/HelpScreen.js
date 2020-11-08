import * as React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Appearance,
  Dimensions,
  ImageBackground,
} from "react-native";
import ChatBot from "react-native-chatbot-expo";
import { Header, Text, SubTitle } from "../../assets/components/pe-components";

const steps = [
  {
    id: "1",
    message:
      "Hi! I am disabled for this demo since at the moment I do not have the power to handle too many requests at once.",
    end: true,
  },
  // {
  //   id: "2",
  //   user: true,
  //   trigger: "3",
  // },
  // {
  //   id: "3",
  //   message:
  //     "The restrooms for the third floor are located by the entrance of the gems and minerals hall. Is there anything else I can help you with?",
  //   trigger: "4",
  // },
  // {
  //   id: "4",
  //   user: true,
  //   trigger: "5",
  // },

  // {
  //   id: "5",
  //   message:
  //     "I am great and happy to be speaking with you, thank you for asking. How are you?",
  //   trigger: "6",
  // },
  // {
  //   id: "6",
  //   user: true,
  //   trigger: "7",
  // },
  // {
  //   id: "7",
  //   message:
  //     "The gift shop and cafe are located on level 1. Here are some pictures for reference:",
  //   trigger: "8",
  // },
  // {
  //   id: "8",
  //   component: (
  //     <Image
  //       source={require("../../assets/images/Gift-Shop.jpg")}
  //       style={{ width: 300, height: 180 }}
  //     />
  //   ),
  //   trigger: "9",
  // },
  // {
  //   id: "9",
  //   component: (
  //     <Image
  //       source={require("../../assets/images/cafe.jpg")}
  //       style={{ width: 300, height: 180 }}
  //     />
  //   ),
  //   trigger: "10",
  // },
  // {
  //   id: "10",
  //   user: true,
  //   trigger: "11",
  // },
  // {
  //   id: "11",
  //   message:
  //     "The Perot closes at 5pm today. Our general hours are Monday-Saturday: 10am-5pm, and Sunday: 11am-5pm. Is there anything else I can assist with?",
  //   trigger: "12",
  // },
  // {
  //   id: "12",
  //   user: true,
  //   trigger: "13",
  // },
  // {
  //   id: "13",
  //   message:
  //     "Yes our wifi is PerotGuestWifi and the ATM is on level 1 by the museum gift shop. Is there anything else I can assist with?",
  //   trigger: "14",
  // },
  // {
  //   id: "14",
  //   user: true,
  //   trigger: "15",
  // },
  // {
  //   id: "15",
  //   message:
  //     "I hope you have a great experience at the Perot! Goodbye and see you next time!",
  //   end: true,
  // },
];
function HelpScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/space.jpeg")}
        style={{ height: 300 }}
      />
      <View style={{ position: "absolute", height: "100%" }}>
        <Header title="Help" description="Perot-bot is here to help!"></Header>
        <View
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor:
              Appearance.getColorScheme() === "light" ? "white" : "#212121",
            height: "73%",
          }}
        >
          <SubTitle text="Perot-bot"></SubTitle>
          <ChatBot
            steps={steps}
            contentStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor:
                Appearance.getColorScheme() === "light" ? "white" : "#212121",
              height: "100%",
            }}
          ></ChatBot>
        </View>
      </View>
    </View>
  );
}

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "#212121",
  },
});
