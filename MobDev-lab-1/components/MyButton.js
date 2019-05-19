import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'

export default class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Touch Here </Text>
                </TouchableOpacity>
                {/*<View style={[styles.countContainer]}>*/}
                    {/*<Text style={[styles.countText]}>*/}
                        {/*{this.state.count !== 0 ? this.state.count : null}*/}
                    {/*</Text>*/}
                {/*</View>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        width: 90,
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 3,
        color: 'white',
        backgroundColor: 'skyblue'
    },
});
