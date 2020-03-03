import React from 'react';
import { View, Text, StyleSheet} from 'react-native';



export default class SettingsLine extends React.Component{
    render(){
        
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
             </View>
        )
    }
}





const styles = StyleSheet.create({
    container:{
        height:100,
        width:"100%",
        flexDirection:'row',
        backgroundColor:'#d3d3d3',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
    },
    text:{
        fontSize:30
    }
})