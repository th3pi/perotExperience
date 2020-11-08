import React ,{ useState } from 'react';
import { ScrollView, ImageBackground, View, Image, StyleSheet } from 'react-native';
import Header from "./components/Header";


const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    alignContent: 'center',
    flex: 1,
    
  },
  mapImg: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
  },
  mapBackground: {
    resizeMode: "stretch",
    flex: 1,
  },
});

const MapL2 = () => {
  const [selectedValue, setSelectedValue] = useState("Level 1");
  return (
    <View style={styles.container}>
      <ImageBackground
          style={styles.mapBackground}
          source={{
            uri: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2029a.jpg',
          }}
        >
      <Header title="Maps" description="Find what you're looking for"/>
      <ScrollView style={styles.scrollView}>
      <Image
        style={styles.mapImg}
        source={{
          uri: 'https://image.shutterstock.com/image-vector/plan-vector-icon-260nw-778148326.jpg',
        }}
      />
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default MapL2;