import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Video, } from 'expo-av';

export default class FirstScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.video}>
                {/*<Video*/}
                    {/*source={require('../assets/video2.mp4')}*/}
                    {/*rate={1.0}*/}
                    {/*volume={1.0}*/}
                    {/*isMuted={false}*/}
                    {/*resizeMode="cover"*/}
                    {/*shouldPlay*/}
                    {/*isLooping*/}
                    {/*useNativeControls*/}
                    {/*style={{ width: '100%', height: 300 }}*/}
                {/*/>*/}
                <Video
                    source={{uri: 'file:///ASUS_X00TD/Movies/video4.mp4'}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    useNativeControls
                    style={{ width: '100%', height: 300 }}
                />
                <Video
                    source={require('../assets/video3.mp4')}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    useNativeControls
                    style={{ width: '100%', height: 300 }}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: 300
    }
});