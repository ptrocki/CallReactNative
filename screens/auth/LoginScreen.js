import React, { Component } from 'react';
import { StyleSheet, View, Alert, TextInput, Button } from 'react-native';
import { SecureStore } from 'expo';
import Const from '../../constants/Const'

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        };
      }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin.bind(this)}
                />
            </View>
        );
    }

    onLogin() {
        const { username, password } = this.state;
        if (username && password) {
            SecureStore.setItemAsync(Const.tokenKey,'someToken');
            this.props.navigation.navigate('Main');
        } else {
            Alert.alert('Credentials are empty');
        }
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});