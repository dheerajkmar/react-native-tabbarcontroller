import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class Search extends Component {

    onDetailPress() {
        console.log('')
        this.props.navigation.navigate('SearchDetail')
    }

    render() {
        return(
            <View style={style.container}>
                <Text style={style.text}>Search</Text>
                <TouchableHighlight style={style.button} 
                    onPress={()=>this.onDetailPress()}
                    activeOpacity={1}
                >
                    <Text style={style.buttonText}>Go to search detail</Text>
                </TouchableHighlight>
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
    },
    button:{
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:'blue'
    },
    buttonText:{
        fontSize:22,
        fontWeight:'200',
        color:'blue'
    }
})