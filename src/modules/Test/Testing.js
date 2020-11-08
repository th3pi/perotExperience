import React, { Component } from "./node_modules/react";
import { FlatList, StyleSheet, Text, View, SafeAreaView, Button, Image } from "react-native";
import Leaderboard from './node_modules/react-native-leaderboard';
import APIKit from "../api_kit/api_kit";


export default class HelloApp extends Component {
    
    state = {
        data: [
            {userName: 'Joe', highScore: 52},
            {userName: 'Jenny', highScore: 120},
            //...
        ] //can also be an object of objects!: data: {a:{}, b:{}}
    }
     
    render() {
      return (
       
          <Leaderboard 
            data={this.state.data} 
            sortBy='highScore' 
            labelBy='userName'/>
            )
            
    }

}





