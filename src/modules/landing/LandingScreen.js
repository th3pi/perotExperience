import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import PerotLogo from "../../assets/image_components/PerotLogo";
import {
  Text,
  Card,
  SectionTitle,
} from "../../assets/components/pe-components";
import Carousel from "react-native-snap-carousel";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Appearance } from "react-native-appearance";

export const LandingScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectDate) => {
    const currentDate = selectDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (shouldShow, currentMode) => {
    setShow(shouldShow);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode(show ? false : true, "date");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ScrollView
        snapToAlignment={show ? "end" : "start"}
        snapToEnd={show ? true : false}
      >
        <PerotLogo style={{ marginLeft: 10 }}></PerotLogo>

        {/* Global announcement card */}
        <SectionTitle
          style={{ marginHorizontal: 10 }}
          textStyle={{
            fontWeight: "300",
            marginLeft: 5,
            paddingVertical: 5,
            fontSize: 16,
          }}
        >
          Announcements
        </SectionTitle>
        <Card style={styles.introCard}>
          <Image
            source={require("../../assets/images/space.png")}
            style={{
              height: 180,
              width: "100%",
              borderRadius: 10,
            }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              bottom: 10,
              paddingHorizontal: 5,
              marginTop: 5,
              fontWeight: "700",
              fontSize: 20,
              color: "white",
              backgroundColor: "#212121",
            }}
          >
            Perot Museum is now in Space
          </Text>
        </Card>

        {/* Main entry point */}
        <TouchableOpacity
          onPress={() => navigation.navigate("OnboardingScreen")}
          style={styles.secondaryButton}
        >
          <Image
            source={require("../../assets/images/rocket.png")}
            style={[styles.buttonImage, { tintColor: "white" }]}
          ></Image>
          <Text style={styles.secondaryButtonText}>Start Your </Text>
          <Text style={[{ fontWeight: "700" }, styles.secondaryButtonText]}>
            Adventure!
          </Text>
        </TouchableOpacity>
        <SectionTitle
          style={{ marginHorizontal: 10, marginTop: 10, marginBottom: 10 }}
          textStyle={{
            fontWeight: "300",
            marginLeft: 5,
            paddingVertical: 5,
            fontSize: 16,
          }}
        >
          Cool things at the Perot
        </SectionTitle>

        {/* Highlights carousel */}
        <Carousel
          layout={"default"}
          containerCustomStyle={{ flexGrow: 1 }}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width - 50}
          firstItem={1}
          data={[
            {
              title: "Item 1",
              text: "Learn while having fun!",
              image:
                "https://perot-museum.imgix.net/02-exhibits-films/being-human-hall/Being-Human-Hall-07.jpg",
            },
            {
              title: "Item 2",
              text: "Coolest museum on the block",
              image:
                "https://static1.squarespace.com/static/584ee3cc2994cac9e545aadd/t/5d2e1cf8ff35b20001a1754c/1563303165483/2016-01-15-perot-museum-morphosis-1.jpg",
            },
            {
              title: "Item 3",
              text: "We have real dinosaurs",
              image:
                "https://perot-museum.imgix.net/02-exhibits-films/life-then-and-now-hall/Paleo_Lab/Paleo-Lab-01.jpg",
            },
            {
              title: "Item 4",
              text: "Big and small dinosaurs",
              image:
                "https://perot-museum.imgix.net/00-home/life-then-and-now-hall.jpg",
            },
            {
              title: "Item 5",
              text: "And cool dinosaurs",
              image:
                "https://media2.giphy.com/media/iVqXV4vE4DDYk/giphy.gif?cid=ecf05e47avuyk89ddttksdjfmtm689yfgq4x32e3dqdm85jp&rid=giphy.gif",
            },
          ]}
          renderItem={({ item, index }) => (
            <Card style={{ marginBottom: 20 }}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  height: 200,
                  width: "100%",
                  borderRadius: 10,
                }}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  paddingHorizontal: 5,
                  marginTop: 5,
                  fontWeight: "700",
                  fontSize: 20,
                  color: "white",
                  backgroundColor: "#212121",
                }}
              >
                {item.text}
              </Text>
            </Card>
          )}
        />

        {/* Tickets section */}
        <SectionTitle
          style={{ marginHorizontal: 10, marginTop: 10, marginBottom: 10 }}
          textStyle={{
            fontWeight: "300",
            marginLeft: 5,
            paddingVertical: 5,
            fontSize: 16,
          }}
        >
          Planning for a future trip?
        </SectionTitle>
        <View>
          <TouchableOpacity style={styles.button} onPress={showDatePicker}>
            <Image
              source={require("../../assets/images/ticket.png")}
              style={styles.buttonImage}
            ></Image>
            <Text style={styles.buttonText}>
              {" "}
              {show
                ? "Get tickets for " + date.toLocaleDateString()
                : "Get Tickets"}
            </Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            minimumDate={new Date()}
          />
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : null,
    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "#212121",
  },
  introCard: {
    margin: 10,
  },
  buttonContainer: {
    marginTop: 15,
    width: 200,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Appearance.getColorScheme() === "light" ? "red" : "black",
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonImage: {
    width: 30,
    height: 30,
    tintColor: "white",
    marginRight: 5,
  },
  secondaryButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: Appearance.getColorScheme() === "light" ? "red" : "black",
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 5,
    shadowColor: "#545454",
  },
  secondaryButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: Appearance.getColorScheme() === "light" ? "white" : "white",
    fontFamily: "OpenSans-Bold",
  },
});
