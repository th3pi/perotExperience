import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "../../../assets/components/pe-components";
import { ActivitiesPill } from "./ActivityPills";
import Accordion from 'react-native-collapsible/Accordion';
import TriviaQuestions from "./TriviaQuestions";

class SubExhibitTriviaList extends React.Component {

  constructor (props) {
    super();

    this.state = {
      loading: true,
      activeSections: []
    };
    this.state.loading = false;
  }

  _renderHeader = section => {
    return (
      <View key={section.name}>
        <ActivitiesPill done={0} activities={8}></ActivitiesPill>
        <Text style={{fontSize: 30}}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <TriviaQuestions key={section.name} subexhibitName={section.name}/>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    if(this.state.loading) return null;
    return (
      <View>
        <Accordion
          sections={this.props.subexhibits}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
        <TouchableOpacity style={styles.subexbDropdown} onPress={()=>console.log(this.props.title)}>
          <Text style={styles.subexhibitText}>{this.props.title}</Text>
      </TouchableOpacity>
      </View>
    );
  }
}


export default SubExhibitTriviaList;


const styles = StyleSheet.create({
    subexhibitText: {
        fontSize: 40
    },
    subexbDropdown: {
        borderColor: "black",
        borderWidth: 1
    }
});

