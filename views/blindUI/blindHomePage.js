import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {isModelReady, getReady} from './ObjectRecognition'

export default class blindHomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            is:'',
        };
      }
    async componentDidMount() {
        try{
            if(!isModelReady){
               //await getReady()
            }
            console.log(true)
        }catch(error){
            console.log(error)
        }
          }
          
    render(){
        return(
            <View style={styles.containar}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.text}>اتصل بمتطوع</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}
                onPress={()=> this.props.navigation.navigate('CameraP')}>
                    <Text style={styles.text}>الكشف عن عمله</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}
                onPress={()=> this.props.navigation.navigate('TextP')}>
                    <Text style={styles.text}>قراءة نص</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}
                onPress={()=> this.props.navigation.navigate('CameraP')}>
                    <Text style={styles.text}>الكشف عن مجسم</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containar:{
        flex:1,
        justifyContent:'space-around',
        padding:'3%',
        backgroundColor:'#D2EDFC',
    },
    buttons:{
        height:"24%",
        width:'100%',
        backgroundColor:'#3E91FF',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
    },
})
