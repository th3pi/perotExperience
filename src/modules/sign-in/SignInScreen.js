import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from "react-native";
import PerotLogo from "../../assets/image_components/PerotLogo";
import {
  Text,
  Card,
  BracketText,
  SectionTitle,
} from "../../assets/components/pe-components";
import Carousel from "react-native-snap-carousel";

export const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.logo}></SafeAreaView>
      <PerotLogo style={{ marginLeft: 10, marginTop: 10 }}></PerotLogo>

      {/* Global announcement card */}
      <SectionTitle
        style={{ marginHorizontal: 10 }}
        textStyle={{
          fontWeight: "300",
          marginLeft: 5,
          paddingVertical: 5,
          fontSize: 20,
        }}
      >
        Experience the museum
      </SectionTitle>
      <Card style={styles.introCard}>
        <Image
          source={{
            uri:
              "https://perot-museum.imgix.net/02-exhibits-films/exhibit-headers/LydaHillGemsandMineralsHall2.png",
          }}
          style={{
            height: 120,
            width: "100%",
            borderRadius: 10,
          }}
        ></Image>
      </Card>
      <TouchableOpacity style={styles.secondaryButton}>
        <Image
          source={require("../../assets/images/rocket.png")}
          style={[styles.buttonImage, { tintColor: "red" }]}
        ></Image>
        <Text style={styles.secondaryButtonText}>Start Your </Text>
        <Text style={[{ fontWeight: "700" }, styles.secondaryButtonText]}>
          Experience
        </Text>
      </TouchableOpacity>
      <SectionTitle
        style={{ marginHorizontal: 10, marginTop: 10, marginBottom: 10 }}
        textStyle={{
          fontWeight: "300",
          marginLeft: 5,
          paddingVertical: 5,
          fontSize: 20,
        }}
      >
        Cool things at the Perot
      </SectionTitle>
      <Carousel
        layout={"default"}
        sliderWidth={Dimensions.get("window").width}
        itemHeight={100}
        itemWidth={Dimensions.get("window").width}
        data={[
          {
            title: "Item 1",
            text: "Text 1",
          },
          {
            title: "Item 2",
            text: "Text 2",
          },
          {
            title: "Item 3",
            text: "Text 3",
          },
          {
            title: "Item 4",
            text: "Text 4",
          },
          {
            title: "Item 5",
            text: "Text 5",
          },
        ]}
        renderItem={({ item, index }) => (
          <Card style={{ marginHorizontal: 10, height: 100 }}>
            <Text>{item.text}</Text>
          </Card>
        )}
      />
      <SectionTitle
        style={{ marginHorizontal: 10, marginTop: 10, marginBottom: 10 }}
        textStyle={{
          fontWeight: "300",
          marginLeft: 5,
          paddingVertical: 5,
          fontSize: 20,
        }}
      >
        Planning for a future trip?
      </SectionTitle>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Bottom Tabs")}
        >
          <Image
            source={require("../../assets/images/ticket.png")}
            style={styles.buttonImage}
          ></Image>
          <Text style={styles.buttonText}>Get Tickets</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    backgroundColor: "red",
    paddingVertical: 20,
    borderRadius: 5,
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
    paddingVertical: 25,
    backgroundColor: "white",
    borderRadius: 5,
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
  },
  secondaryButtonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});
