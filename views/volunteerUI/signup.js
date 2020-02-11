import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Settings, Image, TextInput} from 'react-native';
import loginData from '../db/Userdb'

export default class sginup extends React.Component{
    render(){
        return(
            <ImageBackground source={require('../../images/loginBackground.jpg')}
             style={styles.container}>
                 <View style={styles.whitebackground}>
                    <Text style={styles.header}>sginup</Text>
                    <TextInput style={styles.userName}
                    placeholder='  Username'
                    ></TextInput>
                    <TextInput style={styles.userName}
                    placeholder='  Email'
                    ></TextInput>
                    <TextInput style={styles.userName}
                    placeholder='  Password'
                    secureTextEntry={true}
                    ></TextInput>
                    <TextInput style={styles.userName}
                    placeholder='  Password'
                    secureTextEntry={true}
                    ></TextInput>
                    <View style={styles.loginV}>
                    <TouchableOpacity style={styles.loginB}
                    onPress={()=> this.props.navigation.navigate('volunteerHomePageP')}>
                        <Text style={styles.loginText}>Create Account</Text>
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
    },
    sginup:{
        fontSize:15,
        color:'#333333',
        textDecorationLine:'underline',
    },
    whitebackground:{
        width:'100%',
        height:'90%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1,
        borderRadius:20
    }
})