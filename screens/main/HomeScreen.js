import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = { randomPeople: [] }

  constructor(props) {
    super(props)
    this.onCellClick = this.onCellClick.bind(this);
    this.renderCell = this.renderCell.bind(this);
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api?results=10`)
      .then(res => {
        this.setState({ randomPeople: res.data.results });
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={{ padding: 10 }}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.randomPeople}
          renderItem={({ item }) => this.renderCell(item)}
        /></View>
    );
  }

  renderCell(item) {
    return (
      <TouchableWithoutFeedback onPress={ () => this.onCellClick(item)} >
        <Text style={{ padding: 10 }}>
          {item.email}
        </Text>
      </TouchableWithoutFeedback>);
  }

  onCellClick(item) {
    this.props.navigation.push('Details', {detailscreenparam: item});
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
