import React, { Component }  from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default class Operations extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sign: undefined,
        };
    }

    plus = () => {
        // this.setState({sign: '+'})
        this.props.childoperation('+');
    };
    minus = () => {
        // this.setState({sign: '-'})
        this.props.childoperation('-');
    };
    multiply = () => {
        // this.setState({sign: '*'})
        this.props.childoperation('*');
    };
    divide = () => {
        // this.setState({sign: '/'})
        this.props.childoperation('/');
    };

    render(){
        return (
            <View styles={styles.operationscontainer}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.operation}
                        onPress={this.plus}>
                        <Text style={styles.operationText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.operation}
                        onPress={this.minus}>
                        <Text style={styles.operationText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.operation}
                        onPress={this.multiply}>
                        <Text style={styles.operationText}>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.operation}
                        onPress={this.divide}>
                        <Text style={styles.operationText}>/</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    operationscontainer: {
        // flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'red',
    },
    row: {
        flexDirection: 'row'
    },
    operation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: 50,
        height: 50,
        margin: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 3,
        backgroundColor: '#019c7c',
    },
    operationText: {
        color: 'white',
        fontSize: 20,
    },
    resultbutton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        margin: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        backgroundColor: '#007f9f'
    },
});
