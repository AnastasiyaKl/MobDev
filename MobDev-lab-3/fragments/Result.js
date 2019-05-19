import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     result: 'result here',
        // };
    };

    render() {
        return (
            <View style={styles.resultwrapper}>
                <Text style={styles.result}>{this.props.res}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    resultwrapper: {
        alignItems: 'center',
        minHeight: 50,
    },
    result: {
        color: '#007f9f',
        fontSize: 50,
        textAlign: 'center'
    }
});
