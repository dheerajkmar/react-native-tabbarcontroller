import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class InboxDetail extends Component {
    render() {
        return(
            <View style={style.container}>
                <Text style={style.text}>Inbox Detail</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:22,
        fontWeight:'200',
        color:'red'
    }
})