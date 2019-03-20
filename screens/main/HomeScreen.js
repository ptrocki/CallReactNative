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

import axios from 'axios';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = { sentences: [] }


  componentDidMount() {
    // axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=20`)
    //   .then(res => {
    //     const data = res.data
    //     this.setState({ sentences: data });
    //     console.log(this.state.sentences)
    //   })
    axios.get(`https://randomuser.me/api?results=10`)
      .then(res => {
        //console.log(res)
        //console.log(res.data);
        this.setState({ sentences: res.data.results });
        //console.log(this.state.sentences)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
           keyExtractor={(item, index) => index.toString()+index.toString()}
          data={this.state.sentences}
          renderItem={({ item }) => <View style={{backgroundColor: '#f00', height:50, width:50}}>

          </View>}
        /></View>
    );
    // return (
    //   <View style={styles.container}>
    //     <FlatList 
    //     style={{ flex: 0 }}
    //       extraData={this.state}
    //       keyExtractor={(item, index) => index.toString()}
    //       data={this.state.sentences}
    //       renderItem={item => {

    //         console.log(item.index);
    //         <Text>{item.index.toString()}</Text>
    //       }} />
    //   </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
});
