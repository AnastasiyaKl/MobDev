import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';

export default class NumberInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstvalue: undefined,
            secondvalue: undefined,
            sign: undefined,
        };
    };

    submitinput = (e) => {
        this.props.childinput(e.nativeEvent.target, e.nativeEvent.text);
        console.log('child', e)
    };

    render() {
        return (
            <View style={styles.row}>
                <TextInput
                    id={1}
                    style={[styles.input, styles.inputleft]}
                    editable={true}
                    maxLength={6}
                    placeholder={'Number'}
                    placeholderTextColor={'white'}
                    keyboardType={'numeric'}
                    onChangeText={(val) => this.setState({firstvalue: val})}
                    // onEndEditing={this.input1(this.state.firstvalue)}
                    onEndEditing={this.submitinput}
                />
                <View style={styles.signwrapper}>
                    <Text style={styles.sign}>{this.props.sign}</Text>
                </View>
                <TextInput
                    id={2}
                    style={[styles.input, styles.inputright]}
                    editable={true}
                    maxLength={6}
                    placeholder={'Number'}
                    placeholderTextColor={'white'}
                    keyboardType={'numeric'}
                    onChangeText={(val) => this.setState({secondvalue: val})}
                    onEndEditing={this.submitinput}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 20,
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        color: 'white'
    },
    inputleft: {
        marginLeft: 15,
    },
    inputright: {
        marginRight: 15,
    },
    signwrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
    },
    sign: {
        color: 'white',
        fontSize: 24
    },
});
