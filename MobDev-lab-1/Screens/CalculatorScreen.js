import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput, TouchableOpacity,
} from 'react-native';
// import MyButton from '../components/MyButton';

export default class CalculatorScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstvalue: undefined,
            secondvalue: undefined,
            sign: '',
            result: undefined,
        };
    }

    resElement = (fv, sign, sv, res) => {
        return `${fv} ${sign} ${sv} = ${res}`
    };

    getResult = () => {
        let fv = this.state.firstvalue;
        let sv = this.state.secondvalue;
        let sign = this.state.sign;
        let res;
        if(fv && sv && sign) {

            switch (sign) {
                case '+':
                    res = Number(fv) + Number(sv);
                    this.setState({
                        result: this.resElement(fv, sign, sv, res)
                    });
                    break;
                case '-':
                    res = fv - sv;
                    this.setState({
                        result: this.resElement(fv, sign, sv, res)
                    });
                    break;
                case '/':
                    res = fv / sv;
                    this.setState({
                        result: this.resElement(fv, sign, sv, res)
                    });
                    break;
                case '*':
                    res = fv * sv;
                    this.setState({
                        result: this.resElement(fv, sign, sv, res)
                    });
                    break;
                default:
                    console.log('wrong input');
            }
        }
    };
    plus = () => {
        this.setState({sign: '+'})
    };
    minus = () => {
        this.setState({sign: '-'})
    };
    multiply = () => {
        this.setState({sign: '*'})
    };
    divide = () => {
        this.setState({sign: '/'})
    };

    render() {
        return (
            <View style={styles.calccontainer}>
                <View>
                    <Text style={styles.header}>Lab 1</Text>
                    <Text style={styles.subheader}>Done by Anastasiya Kovalenko, IS-63, variant 9</Text>
                </View>

                <View style={styles.resultwrapper}>
                    <Text style={styles.result}>{this.state.result}</Text>
                </View>

                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.inputleft]}
                        editable={true}
                        maxLength={6}
                        placeholder={'Number'}
                        placeholderTextColor={'white'}
                        keyboardType={'numeric'}
                        onChangeText={(val) => this.setState({firstvalue: val})}
                    />
                    <View style={styles.signwrapper}>
                        <Text style={styles.sign}>{this.state.sign}</Text>
                    </View>
                    <TextInput
                        style={[styles.input, styles.inputright]}
                        editable={true}
                        maxLength={6}
                        placeholder={'Number'}
                        placeholderTextColor={'white'}
                        keyboardType={'numeric'}
                        onChangeText={(val) => this.setState({secondvalue: val})}
                    />
                </View>

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

                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.resultbutton}
                            onPress={this.getResult}>
                            <Text style={styles.operationText}>Result</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    calccontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#cecece',
    },
    header: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#019c7c',
    },
    subheader: {
        textAlign: 'center',
        fontSize: 14,
        color: '#001b00',
    },
    operationscontainer: {
        // flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'red',
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
