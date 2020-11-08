import * as React from "react";
import {
  View,
  StyleSheet,
  Text as DefaultText,
  Platform,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Appearance,
  Dimensions,
  StatusBar,
} from "react-native";

const Card = (props) => {
  return (
    <View {...props} style={[props.style, styles.card]}>
      {props.children}
    </View>
  );
};

const Text = (props) => {
  return (
    <DefaultText
      {...props}
      style={[
        {
          fontFamily: "OpenSans-Regular",
        },
        props.style,
      ]}
    >
      {props.children}
    </DefaultText>
  );
};

const Title = (props) => {
  return (
    <View
      {...props}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
      }}
    >
      <Text
        style={[
          {
            fontFamily: "OpenSans-Bold",
            fontSize: 50,
            color: "white",
          },
          { color: props.color },
        ]}
      >
        {props.title}
      </Text>
      {props.showExit ? (
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 15,
            top: "40%",
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: 5,
            borderRadius: 5,
          }}
          onPress={props.onPress}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontFamily: "OpenSans-ExtraBold",
              textAlign: "center",
            }}
          >
            {props.exitMessage}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const BracketText = (props) => {
  return (
    <View style={[{ flexDirection: "row", alignItems: "center" }, props.style]}>
      <Text
        style={{
          color: "#ff4000",
          fontSize: props.bracketSize,
          fontWeight: "700",
        }}
      >
        {" "}
        [
      </Text>
      <Text
        style={[
          {
            fontSize: props.textSize,
            alignSelf: "center",
          },
          props.textStyle,
        ]}
      >
        {props.text}
      </Text>
      <Text
        style={{
          color: "#ff4000",
          fontSize: props.bracketSize,
          fontWeight: "700",
        }}
      >
        ]
      </Text>
    </View>
  );
};

const SectionTitle = (props) => {
  return (
    <View
      {...props}
      style={[{ backgroundColor: "#212121", borderRadius: 5 }, props.style]}
    >
      <Text style={[{ color: "white" }, props.textStyle]}>
        {props.children}
      </Text>
    </View>
  );
};

const Carousel = (props) => {
  return (
    <View>
      <FlatList
        horizontal={props.horizontal}
        numColumns={!props.horizontal ? 2 : 1}
        data={props.data}
        renderItem={props.renderItem}
        keyExtractor={props.keyExtractor}
      ></FlatList>
    </View>
  );
};
const Description = (props) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 10 }}>
      <Text
        style={[
          {
            fontSize: 18,
            fontFamily: "OpenSans-Regular",
            color: "white",
          },
          props.descriptionStyle,
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
};

const Header = (props) => {
  return (
    <SafeAreaView
      style={[
        {
          marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight, // Margin required for Android
          marginBottom: 10,
        },
        props.style,
      ]}
    >
      <Title
        showExit={props.showExit}
        exitMessage={props.exitMessage}
        title={props.title}
        style={props.titleStyle}
        color="#fff"
        onPress={props.onPressExit}
      />
      <Description
        text={props.description}
        descriptionStyle={props.descriptionStyle}
      />
    </SafeAreaView>
  );
};

const SubTitle = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 10,
        width: Dimensions.get("window").width,
      }}
    >
      <Text
        style={[
          {
            color: "#ff4000",
            fontWeight: "700",
            fontSize: 35,
            fontFamily: "OpenSans-ExtraBold",
          },
        ]}
      >
        [
      </Text>
      <Text
        style={[
          {
            fontSize: 30,
            alignSelf: "center",
            color: Appearance.getColorScheme() === "light" ? "black" : "white",
            height: 40,
            fontFamily: "OpenSans-Bold",
          },
        ]}
      >
        {props.text}
      </Text>
      <Text
        style={[
          {
            color: "#ff4000",
            fontWeight: "700",
            fontSize: 35,
            fontFamily: "OpenSans-ExtraBold",
          },
        ]}
      >
        ]
      </Text>
    </View>
  );
};

const ImageCaption = (props) => {
  return (
    <Text
      {...props}
      style={[
        {
          backgroundColor: "#212121",
          color: "white",
          position: "absolute",
          bottom: 10,
          paddingLeft: 5,
          paddingVertical: 3,
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
export {
  Text,
  Card,
  Title,
  BracketText,
  SectionTitle,
  Carousel,
  Header,
  SubTitle,
  ImageCaption,
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 10,
    elevation: 10,
  },
});
