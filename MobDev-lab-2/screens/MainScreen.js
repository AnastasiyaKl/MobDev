import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NumberInputs from '../fragments/NumberInputs';
import Operations from '../fragments/Operations';
import Result from '../fragments/Result';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstvalue: undefined,
            secondvalue: undefined,
            sign: '',
            result: undefined,
        }
    }
    //
    // componentWillReceiveProps(nextProps) {
    //     // You don't have to do this check first, but it can help prevent an unneeded render
    //     if (nextProps.startTime !== this.state.startTime) {
    //         this.setState({ startTime: nextProps.startTime });
    //         console.log(this.state)
    //     }
    // }

    resElement = (fv, sign, sv, res) => {
        return `${fv} ${sign} ${sv} = ${res}`
        // console.log(`${fv} ${sign} ${sv} = ${res}`)
    };

    getResult = () => {
        let fv = Number(this.state.firstvalue);
        let sv = Number(this.state.secondvalue);
        let sign = this.state.sign;
        let res;
        console.log('first val', fv);
        console.log('second val', sv);
        console.log('sign', sign);

        if (fv && sv && sign) {
            // console.log(fv + sv)
            console.log(this.state);
            switch (sign) {
                case '+':
                    res = fv + sv;
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

            console.log(this.state);
        }
    };

    inputhandler = (key, val) => {
        if (key === 19) {
            this.setState({firstvalue: val});
            // console.log('input 1', this.state)
        }
        else{
            this.setState({secondvalue: val});
            // console.log('input 2', this.state)

        }
    };

    operationhandler = (val) => {
        this.setState({sign : val})
    };

    render() {
        return (
            <View style={styles.calccontainer}>
                <View>
                    <Text style={styles.header}>Lab 2</Text>
                    <Text style={styles.subheader}>Done by Anastasiya Kovalenko, IS-63, variant 9</Text>
                </View>
                <Result res={this.state.result}/>
                <NumberInputs childinput={this.inputhandler} sign={this.state.sign}/>

                <View>
                    <Operations childoperation={this.operationhandler}/>

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
    operationText: {
        color: 'white',
        fontSize: 20,
    },
    row: {
        flexDirection: 'row'
    },
});
