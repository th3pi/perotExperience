import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//screen imports
import ExperienceScreen from "../experience/ExperienceScreen";
import ExhibitScreen from "../exhibits/ExhibitsScreen";
import ExhibitPage from "../exhibits/components/ExhibitPage";
import MapScreen from "../map/MapScreen";
import HelpScreen from "../help/HelpScreen";
import OnboardingScreen from "../onboarding/OnboardingScreen";

import IntroPage from "../scavenger-hunt/ShIntroPage";
import ShLeadingQuestion from "../scavenger-hunt/ShLeadingQuestions";
import ShLeaderboard from "../scavenger-hunt/ShLeaderboard";
import ShSearchPage from "../scavenger-hunt/ShSearchPage";
import ShowAnswer from "../scavenger-hunt/ShShowAnswerPage";
import ShQRCode from "../scavenger-hunt/ShQRCode";
import ShCorrectPage from "../scavenger-hunt/ShCorrectPage";
import ShIncorrectPage from "../scavenger-hunt/ShIncorrectPage";
import TriviaScreen from "../trivia/TriviaScreen";
import TLeaderboard from "../TriviaLeaderboard/TLeaderboard";
import ARScreen from "../augmented_reality/ARScreen";
import { createStackNavigator } from "@react-navigation/stack";
import TriviaPopup from "../trivia/TriviaPopup";
import { Appearance } from "react-native-appearance";

const Tab = createBottomTabNavigator();

const ExhibitStack = createStackNavigator();
const ExperienceStack = createStackNavigator();
const ShStack = createStackNavigator();
const TriviaStack = createStackNavigator();

function shStackScreen() {
  return (
    <ShStack.Navigator initialRouteName="IntroPage">
      <ShStack.Screen
        name="IntroPage"
        component={IntroPage}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ShStack.Screen
        name="ShLeadingQuestion"
        component={ShLeadingQuestion}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ShStack.Screen
        name="ShSearchPage"
        component={ShSearchPage}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ShStack.Screen
        name="ShowAnswer"
        component={ShowAnswer}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ShStack.Screen
        name="ShQRCode"
        component={ShQRCode}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ShStack.Screen
        name="ShCorrectPage"
        component={ShCorrectPage}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ShStack.Screen
        name="ShIncorrectPage"
        component={ShIncorrectPage}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ShStack.Screen
        name="ShLeaderboard"
        component={ShLeaderboard}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
    </ShStack.Navigator>
  );
}

function experienceStackScreen() {
  return (
    <ExperienceStack.Navigator initialRouteName="ExperienceScreen">
      <ExperienceStack.Screen
        name="ExperienceScreen"
        component={ExperienceScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ExperienceStack.Screen
        name="ExhibitPage"
        component={ExhibitPage}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ExperienceStack.Screen
        name="TriviaScreen"
        component={TriviaScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ExperienceStack.Screen
        name="TriviaPopup"
        component={TriviaPopup}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ExperienceStack.Screen
        name="TLeaderboard"
        component={TLeaderboard}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ExperienceStack.Screen
        name="ARScreen"
        component={ARScreen}
        options={{
          headerShown: false,
        }}
      />
      <ExperienceStack.Screen
        name="ShStackScreen"
        component={shStackScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
    </ExperienceStack.Navigator>
  );
}

function exhibitStackScreen() {
  return (
    <ExhibitStack.Navigator initialRouteName="ExhibitScreen">
      <ExhibitStack.Screen
        name="ShStackScreen"
        component={shStackScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />

      <ExhibitStack.Screen
        name="ExhibitScreen"
        component={ExhibitScreen}
        options={{
          headerShown: false,
          headerTitle: "",
          headerBackTitle: "Scavenger Hunt Instructions",
        }}
      />
      <ExhibitStack.Screen
        name="ExhibitPage"
        component={ExhibitPage}
        options={{
          headerShown: false,
          headerTitle: "",
          headerBackTitle: "Scavenger Hunt Instructions",
        }}
      />

      <ExhibitStack.Screen
        name="TriviaScreen"
        component={TriviaScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ExhibitStack.Screen
        name="TriviaPopup"
        component={TriviaPopup}
        options={{
          headerShown: false,
        }}
      />
      <ExperienceStack.Screen
        name="TLeaderboard"
        component={TLeaderboard}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ExhibitStack.Screen
        name="ARScreen"
        component={ARScreen}
        options={{
          headerShown: false,
        }}
      />
    </ExhibitStack.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="experienceStackScreen"
      tabBarOptions={{
        activeTintColor: "#f40000",
        style: {
          backgroundColor:
            Appearance.getColorScheme() === "light" ? "white" : "black",
        },
      }}
    >
      <Tab.Screen
        name="ExperienceStackScreen"
        component={experienceStackScreen}
        options={{
          tabBarLabel: "Experience",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/images/joystick.png")}
              style={[styles.tabImage]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExhibitStackScreen"
        component={exhibitStackScreen}
        options={{
          tabBarLabel: "Exhibits",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/images/dinosaur.png")}
              style={[styles.tabImage]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/images/map.png")}
              style={[styles.tabImage]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("../../assets/images/help.png")}
              style={[styles.tabImage]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabImage: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain",
    tintColor: Appearance.getColorScheme() === "light" ? "black" : "white",
  },
});
