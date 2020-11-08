import "react-native-gesture-handler"; // This line has to be at the top for some reason.
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingScreen } from "./src/modules/landing/LandingScreen";
import ExperienceScreen from "./src/modules/experience/ExperienceScreen";

import BottomTabs from "./src/modules/bottomTabs/BottomTabs";
import ExhibitPage from "./src/modules/exhibits/components/ExhibitPage";
import {
  cacheImages,
  cacheFonts,
} from "./src/assets/components/AssetsLoader.js";
import { AppLoading } from "expo";
import { AppearanceProvider } from "react-native-appearance";
import TLeaderboard from "./src/modules/TriviaLeaderboard/TLeaderboard";
import OnboardingScreen from "./src/modules/onboarding/OnboardingScreen";

//Navigation Container
const Stack = createStackNavigator();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("./src/assets/images/space-hero.jpg"),
      require("./src/assets/images/perot_logo.png"),
    ]);

    const fontAssets = cacheFonts([
      {
        "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
        "OpenSans-Bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
        "OpenSans-ExtraBold": require("./src/assets/fonts/OpenSans-ExtraBold.ttf"),
        "OpenSans-Light": require("./src/assets/fonts/OpenSans-Light.ttf"),
      },
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (this.state.loading == true) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ loading: false })}
        ></AppLoading>
      );
    }

    return (
      <AppearanceProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen name="Home" component={ExperienceScreen} />

            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{ gestureEnabled: false, headerShown: false }}
            />
            <Stack.Screen
              name="BottomTabs"
              children={BottomTabs}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    );
  }
}

export default App;
