import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { SecureStore } from 'expo';
import Const from '../constants/Const'

export default class SplashScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }} />
                <Text style={{ marginTop: 20 }}> Call React Native App</Text>
            </View>
        );
    }

    componentDidMount() {
        const token = SecureStore.getItemAsync(Const.tokenKey);
        token.then(tokenResponse => {
            this.props.navigation.navigate(tokenResponse ? 'Main' : 'Login');
        });   
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
});