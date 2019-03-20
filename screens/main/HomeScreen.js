import React from 'react';
import {
  Image,
  Platform,
  FlatList,
  StyleSheet,
  Text, ListItem,
  TouchableOpacity,
  View,
} from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';
import Layout from '../../constants/Layout'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = { randomPeople: [] }


  componentDidMount() {
    axios.get(`https://randomuser.me/api?results=10`)
      .then(res => {
        this.setState({ randomPeople: res.data.results });
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style = {{padding: 10}}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.randomPeople}
          renderItem={({ item }) => <Text style={{ padding:10}}>
          {item.email}
          </Text>}
        /></View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF"
  },
});
