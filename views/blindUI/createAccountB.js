import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Settings, Image, TextInput} from 'react-native';
import {saveUserdata, retrieveData} from '../db/Userdb'


export default class creatAccountB extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            phoneNumber:'',
            data:''
        };
      }
    savelogin= async(name, phoneNumber)=>{
        //saveUserdata(login)
        const res = await fetch('https://assistance-system-back-end.herokuapp.com/User', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name,
                phoneNumber: phoneNumber,
              }),
        })
        const resJ = await res.json()
        console.log(resJ)
    }
    retrievelogin=async()=>{
        const data = await retrieveData()
        console.log(data.name)
    }
    render(){
        
        return(
            <ImageBackground source={require('../../images/loginBackground.jpg')}
             style={styles.container}>
                 <View style={styles.whitebackground}>
                    <Text style={styles.header}>login</Text>
                    <TextInput style={styles.userName}
                    onChangeText={(text) => this.setState({name: text})}
                    placeholder='  Name'
                    ></TextInput>
                    <TextInput style={styles.userName}
                    onChangeText={(text) => this.setState({phoneNumber: text})}
                    placeholder='  Phone number'
                    secureTextEntry={true}
                    ></TextInput>
                    <View style={styles.loginV}>
                    <TouchableOpacity style={styles.loginB}
                     onPress={()=> this.props.navigation.navigate('blindHomePageP')} 
                    >
                        <Text style={styles.loginText}>تسجيل دخول</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginB}
                     onPress={()=> this.props.navigation.navigate('blindHomePageP')} 
                    >
                        <Text style={styles.loginText}>تسجيل حساب جديد</Text>
                        </TouchableOpacity>    
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:'10%'
    },
    userName:{
        height:'10%',
        width:'90%',
        borderColor:'#000000',
        borderWidth:1,
        borderRadius:10,
        margin:'5%',
        fontSize:25,
    },
    loginB:{
        height:'50%',
        width:'100%',
        backgroundColor:'#53A4FF',
        alignItems:'center',
        justifyContent:'center',
        // borderColor:'#000000',
        // borderWidth:1,
        borderRadius:10,
        marginBottom:'2%',
    },
    loginText:{
        fontSize:20,
        color:'#ffffff',
    },
    header:{
        fontSize:50,
        marginBottom:'10%'
    },
    loginV:{
        height:'20%',
        width:'94%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    sginup:{
        fontSize:15,
        color:'#333333',
        textDecorationLine:'underline',
    },
    whitebackground:{
        width:'100%',
        height:'70%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:20
    }
})