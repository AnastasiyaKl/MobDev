import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ItemComponent from '../fragments/ItemComponent';
import {db} from '../config/db';

let itemsRef = db.ref('/items');


export default class SavedDataList extends React.Component {
    constructor(props) {
        super (props);
    }

    state = {
        items: []
    };

    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
        });
    }

    render() {
        return (
            <View>
                {this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>}
            </View>
        )
    }
}
