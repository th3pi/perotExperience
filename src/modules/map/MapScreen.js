import React, { useState } from "react";
import {
  ScrollView,
  ImageBackground,
  View,
  Image,
  StyleSheet,
  Modal,
  StatusBar,
} from "react-native";
import Header from "./components/Header";
import DropDownPicker from "react-native-dropdown-picker";
import ImageViewer from "react-native-image-zoom-viewer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "../../assets/components/pe-components";
import { Appearance } from "react-native-appearance";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Appearance.getColorScheme() === "light" ? "white" : "#212121",
  },
  mapImg: {
    height: 300,
    width: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  mapBackground: {
    resizeMode: "stretch",
    flex: 1,
  },
});

const levels = [
  ["level-l", "level-1", "level-2", "level-3", "level-4", "level-5"],
];

let map = new Map();
map.set("level-l", require(`../../assets/images/floorplans/level-l.png`));
map.set("level-1", require(`../../assets/images/floorplans/level-1.png`));
map.set("level-2", require(`../../assets/images/floorplans/level-2.png`));
map.set("level-3", require(`../../assets/images/floorplans/level-3.png`));
map.set("level-4", require(`../../assets/images/floorplans/level-4.png`));
map.set("level-4m", require(`../../assets/images/floorplans/level-4m.png`));

const MapPage = () => {
  const [level, setLevel] = useState("level-1");
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"}></StatusBar>
      <ImageBackground
        style={{ height: 300 }}
        source={{
          uri:
            "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2029a.jpg",
        }}
      >
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        >
          <Header title="Maps" description="Find what you're looking for" />
          <View
            style={{
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              height: "100%",
              backgroundColor:
                Appearance.getColorScheme() === "light" ? "white" : "#212121",
            }}
          >
            <DropDownPicker
              items={[
                {
                  label: "Lower Level",
                  value: "level-l",
                },
                {
                  label: "Level 1",
                  value: "level-1",
                },
                {
                  label: "Level 2",
                  value: "level-2",
                },
                {
                  label: "Level 3",
                  value: "level-3",
                },
                {
                  label: "Level 4",
                  value: "level-4",
                },
                {
                  label: "Level 4M",
                  value: "level-4m",
                },
              ]}
              defaultValue={level}
              containerStyle={{ height: 60 }}
              dropDownMaxHeight={220}
              style={{ backgroundColor: "#fafafa", margin: 10 }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeItem={(item) => {
                setLevel(item.value);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setFullScreen(true);
              }}
            >
              <Modal visible={fullScreen} transparent={true}>
                <ImageViewer
                  onSwipeDown={() => {
                    setFullScreen(false);
                  }}
                  onClick={() => {
                    setFullScreen(false);
                  }}
                  imageUrls={[
                    {
                      props: {
                        source: map.get(level),
                      },
                    },
                  ]}
                />
              </Modal>
              <Card>
                <View style={{ margin: 10, borderRadius: 5, marginBottom: 50 }}>
                  <Image style={styles.mapImg} source={map.get(level)} />
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MapPage;
