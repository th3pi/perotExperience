import React, { useState } from "react";
import { View, StyleSheet, FlatList, Modal, SafeAreaView } from "react-native";
import { Text } from "../../../assets/components/pe-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import SubExhibitList from './SubExhibitTriviaList'

class SubExhibitPage extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      visible: false,
    };

  }

  render() {
    this.state.visible = this.props.visible;
    return (
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.visible}
        >
          <SafeAreaView>
          <SubExhibitList subexhibits={this.props.subexhibits}/>
            <TouchableOpacity
              onPress={() => {
                this.props.updateVisible(false);
              }}
            >
              <Text style={{ fontSize: 45 }}>Close</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    );
  }
}

export default SubExhibitPage;
