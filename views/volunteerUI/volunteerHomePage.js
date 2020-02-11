import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Settings, Image} from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import settings from './volunteerSettings'


export class volunteerHomePage extends React.Component{
    render(){
        return(
            <View style={styles.containar}>
                <View style={styles.statestic}>
                    <Text style={styles.statesticText}>statestic</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>User name</Text>
                </View>
                <View style={styles.settings}>
                    <View style={styles.settingsBox}>
                        <Text style={styles.name}> how many calls</Text>
                    </View>
                    <View style={styles.settingsBox}>
                        <Text style={styles.name}> Rating</Text>
                    </View>
                </View>
            </View>
        )
    }
}



const TabNavigator = createBottomTabNavigator({
    Home: volunteerHomePage,
    Settings:{
        screen:settings,
    navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => {
            <Ionicons name="md-checkmark-circle" size={32} color="green" />

          
        }
      }
    }
  });
  
  export default createAppContainer(TabNavigator);




const styles = StyleSheet.create({
    containar:{
        flex:1,
        justifyContent:'space-around',
        padding:'5%',
        backgroundColor:'#D2EDFC',
        
    },
    statestic:{
        height:"30%",
        borderRadius:20,
        borderColor:"black",
        borderWidth:1,
        backgroundColor:'#3E91FF',
        margin:"1%",
        marginBottom:"5%",
        justifyContent:'center',
        alignItems:'center',
    },
    settingsBox:{
        width:"48%",
        height:"50%",
        borderColor:"black",
        borderWidth:1,
        backgroundColor:'#3E91FF',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    settings:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:"100%",
        height:'45%',
        padding:"2%",
        justifyContent:'space-between',
    },
    info:{
        height:"10%",
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    },
    name:{
        fontSize:30,
        color:'#35363D',
        
    },
    statesticText:{
        fontSize:50,
    }
})