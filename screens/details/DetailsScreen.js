import React, { Component } from 'react';
import { StyleSheet, View, Alert, TextInput, Button, SectionList, Image, Text, StatusBar } from 'react-native';
import { Constants } from 'expo';


export default class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const person = navigation.getParam('otherParam', 'some default value');

        const name = person.name.title+ " " + person.name.first+ " " + person.name.last
        const sections = [
            { data: [{ value: name }], title: 'name' },
            { data: [{ value: person.email }], title: 'email' },
            { data: [{ value: person.gender }], title: 'gender' },
            { data: [{ value: person.dob.age }], title: 'age' },

        ];

        return (
            <SectionList
                style={styles.container}
                renderSectionHeader={this._renderSectionHeader}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index}
                sections={sections}
            />
        );
    }

    _renderSectionHeader = ({ section }) => {
        return <SectionHeader title={section.title} />;
    };

    _renderItem = ({ item }) => {
        return (
            <SectionContent>
                <Text style={styles.sectionContentText}>
                    {item.value}
                </Text>
            </SectionContent>
        );
    };
}

const SectionHeader = ({ title }) => {
    return (
        <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>
                {title}
            </Text>
        </View>
    );
};


const SectionContent = props => {
    return (
        <View style={styles.sectionContentContainer}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
    },
    titleIconContainer: {
        marginRight: 15,
        paddingTop: 2,
    },
    sectionHeaderContainer: {
        backgroundColor: '#fbfbfb',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
    },
    sectionHeaderText: {
        fontSize: 14,
    },
    sectionContentContainer: {
        paddingTop: 8,
        paddingBottom: 12,
        paddingHorizontal: 15,
    },
    sectionContentText: {
        color: '#808080',
        fontSize: 14,
    },
    nameText: {
        fontWeight: '600',
        fontSize: 18,
    },
    slugText: {
        color: '#a39f9f',
        fontSize: 14,
        backgroundColor: 'transparent',
    },
    descriptionText: {
        fontSize: 14,
        marginTop: 6,
        color: '#4d4d4d',
    },
    colorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorPreview: {
        width: 17,
        height: 17,
        borderRadius: 2,
        marginRight: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc',
    },
    colorTextContainer: {
        flex: 1,
    },
});
