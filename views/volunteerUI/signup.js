import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput} from 'react-native';
import loginData from '../db/Userdb'

export default class sginup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
   craeteUser = async(name,email,password)=>{
        console.log(name,email, password)
        const res = await fetch('https://assistance-system-back-end.herokuapp.com/User/signup', {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name:name,
                email: email,
                password: password,
              }),
        })
        // if(res.status !== 200){
        //     this.setState({
        //         errorLogin:'البريد الإلكتروني/ الرقم السري غير صحيح'
        //     })
        // }
        // else{
        //     this.setState({
        //         errorLogin:''
        //     })
         
        const resJ = await res.json()
        
        console.log(resJ,`status code: ${res.status}`)
        }


    render(){
        return(
            <ImageBackground source={require('../../images/loginBackground.jpg')}
             style={styles.container}>
                 <View style={styles.whitebackground}>
                    <Text style={styles.header}>sginup</Text>
                    <TextInput style={styles.userName}
                    placeholder='  Username'
                    onChangeText={(text)=>this.setState({name: text})}
                    ></TextInput>
                    <TextInput style={styles.userName}
                     onChangeText={(text)=>this.setState({email: text})}
                    placeholder='  Email'
                    ></TextInput>
                    <TextInput style={styles.userName}
                     onChangeText={(text)=>this.setState({password: text})}
                    placeholder='  Password'
                    secureTextEntry={true}
                    ></TextInput>
                    <TextInput style={styles.userName}
                    placeholder='  Password'
                    secureTextEntry={true}
                    ></TextInput>
                    <View style={styles.loginV}>
                    <TouchableOpacity style={styles.loginB}
                    onPress={()=>this.craeteUser(this.state.name, this.state.email,this.state.password)}>
                        <Text style={styles.loginText}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            // this. props.navigation.navigate('volunteerHomePageP'
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